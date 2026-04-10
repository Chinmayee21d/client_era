import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // The app doesn't require specific overrides for now, 
  // but defineCloudflareConfig ensures the middleware and workers 
  // are configured correctly for the Cloudflare Edg
});
