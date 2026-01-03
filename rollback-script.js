const { execSync } = require('child_process');

// Get wrangler auth
const deploymentId = 'c8f4ae9f-ed90-4e7e-8160-3316db8ebfea';
const projectName = 'official-geotapp-website';

console.log('Attempting to re-deploy deployment:', deploymentId);

// The easiest way is to just re-trigger the deployment by deploying the same content
// But since we don't have that, we'll use the dashboard

console.log('Please use the Cloudflare dashboard to rollback');
console.log('Go to: https://dash.cloudflare.com/34a3e90dabdb6c10eb33f37259fafca4/pages/view/official-geotapp-website/c8f4ae9f-ed90-4e7e-8160-3316db8ebfea');
