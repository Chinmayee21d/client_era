const fs = require('fs');
const path = require('path');

const rootNext = path.join(process.cwd(), '.next');
const standalonePath = path.join(rootNext, 'standalone');

console.log('--- Starting Robust Build Artifact Repair ---');
console.log(`Working Directory: ${process.cwd()}`);
console.log(`Root .next: ${rootNext}`);
console.log(`Standalone Path: ${standalonePath}`);

if (!fs.existsSync(standalonePath)) {
  console.log('Error: Standalone folder not found! Next.js build might have failed or output: "standalone" is not set.');
  console.log('Listing contents of .next directory for diagnostics:');
  try {
    const nextContents = fs.readdirSync(rootNext);
    console.log(nextContents.join(', '));
  } catch (err) {
    console.log(`Failed to list .next contents: ${err.message}`);
  }
  process.exit(0); // Exit gracefully to allow OpenNext to show its own error if it wants
}

// Helper to find files recursively in a directory
function findFile(startPath, filter) {
  if (!fs.existsSync(startPath)) return null;
  const files = fs.readdirSync(startPath);
  for (let i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      const found = findFile(filename, filter);
      if (found) return found;
    } else if (filename.endsWith(filter)) {
      return filename;
    }
  }
  return null;
}

// 1. Fix BUILD_ID
const expectedBuildIdPath = path.join(standalonePath, '.next/BUILD_ID');
console.log(`Checking for BUILD_ID at: ${expectedBuildIdPath}`);

if (!fs.existsSync(expectedBuildIdPath)) {
  console.log('BUILD_ID not found in standard location. Searching...');
  
  // Try to find it anywhere in standalone
  const foundBuildId = findFile(standalonePath, 'BUILD_ID');
  
  if (foundBuildId) {
    console.log(`Found BUILD_ID at: ${foundBuildId}. Copying to standard location...`);
    fs.mkdirSync(path.dirname(expectedBuildIdPath), { recursive: true });
    fs.copyFileSync(foundBuildId, expectedBuildIdPath);
  } else {
    console.log('BUILD_ID missing from standalone entirely. Checking root .next...');
    const sourceBuildId = path.join(rootNext, 'BUILD_ID');
    
    if (fs.existsSync(sourceBuildId)) {
      console.log('Restoring BUILD_ID from root .next to standalone folder...');
      fs.mkdirSync(path.dirname(expectedBuildIdPath), { recursive: true });
      fs.copyFileSync(sourceBuildId, expectedBuildIdPath);
    } else {
      console.log('Warning: Source BUILD_ID not found anywhere. Creating fallback.');
      fs.mkdirSync(path.dirname(expectedBuildIdPath), { recursive: true });
      fs.writeFileSync(expectedBuildIdPath, 'fallback-build-id-' + Date.now());
    }
  }
} else {
  console.log('BUILD_ID already exists in standard standalone location.');
}

// 2. Fix pages-manifest.json
const expectedManifestPath = path.join(standalonePath, '.next/server/pages-manifest.json');
console.log(`Checking for pages-manifest.json at: ${expectedManifestPath}`);

if (!fs.existsSync(expectedManifestPath)) {
  console.log('pages-manifest.json not found. Searching...');
  const foundManifest = findFile(standalonePath, 'pages-manifest.json');
  
  if (foundManifest) {
    console.log(`Found pages-manifest.json at: ${foundManifest}. Copying to standard location...`);
    fs.mkdirSync(path.dirname(expectedManifestPath), { recursive: true });
    fs.copyFileSync(foundManifest, expectedManifestPath);
  } else {
    console.log('Creating dummy pages-manifest.json to satisfy OpenNext...');
    fs.mkdirSync(path.dirname(expectedManifestPath), { recursive: true });
    fs.writeFileSync(expectedManifestPath, JSON.stringify({}));
  }
} else {
  console.log('pages-manifest.json already exists.');
}

// 3. Ensure .next/required-server-files.json if missing
const expectedRequiredFilesPath = path.join(standalonePath, '.next/required-server-files.json');
if (!fs.existsSync(expectedRequiredFilesPath)) {
    console.log('Checking for required-server-files.json in root...');
    const sourceRequiredFiles = path.join(rootNext, 'required-server-files.json');
    if (fs.existsSync(sourceRequiredFiles)) {
        console.log('Copying required-server-files.json to standalone...');
        fs.mkdirSync(path.dirname(expectedRequiredFilesPath), { recursive: true });
        fs.copyFileSync(sourceRequiredFiles, expectedRequiredFilesPath);
    }
}

console.log('--- Build Artifact Repair Complete ---');
