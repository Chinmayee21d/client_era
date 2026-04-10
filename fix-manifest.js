const fs = require('fs');
const path = require('path');

const manifestPath = path.join(process.cwd(), '.next/standalone/.next/server/pages-manifest.json');

if (!fs.existsSync(manifestPath)) {
  console.log('Creating dummy pages-manifest.json...');
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, JSON.stringify({}));
} else {
  console.log('pages-manifest.json already exists.');
}
