# Automated Deployment from youssef-s Repository

This repository includes an automated GitHub Actions workflow that builds the source code from the [YoussefChlih/youssef-s](https://github.com/YoussefChlih/youssef-s) repository and deploys the built static files to this GitHub Pages repository.

## How to Use

1. **Go to the Actions tab** in this repository
2. **Select "Deploy from youssef-s"** workflow
3. **Click "Run workflow"**
4. **Optionally specify a ref** (branch, tag, or commit SHA) from the youssef-s repository to build (defaults to `main`)
5. **Click "Run workflow"** button to start the deployment

## What the Workflow Does

The workflow performs the following steps:

1. **Checks out this repository** (YoussefChlih.github.io)
2. **Checks out the source repository** (YoussefChlih/youssef-s) into a `./source` subdirectory
3. **Sets up Node.js 20** environment with npm caching
4. **Installs dependencies and builds** the source project (`npm ci && npm run build`)
5. **Replaces the contents** of this repo's root with the build output from `./source/dist`
6. **Preserves important files** including:
   - `.git` directory (version control)
   - `.github` directory (workflows and configuration)
   - `CNAME` file (custom domain configuration)
   - `404.html` file (custom 404 page)
   - `.nojekyll` file (if present)
7. **Handles CNAME file logic**:
   - Preserves existing CNAME from this repository
   - If no CNAME exists here but one exists in `source/public/CNAME`, copies it over
8. **Commits and pushes changes** only if there are actual changes to deploy

## Security and Permissions

- The workflow uses the built-in `GITHUB_TOKEN` for authentication
- It has `contents: write` permission to commit and push changes
- No personal access tokens (PAT) or deploy keys are required
- The workflow reads from the public source repository and commits back to this repository

## Manual Trigger Only

This workflow is designed to be **manually triggered only**. It does not automatically run on:
- Pushes to the source repository
- Scheduled intervals
- Other repository events

This gives you full control over when deployments occur.

## Custom Domain Configuration

The workflow intelligently handles the `CNAME` file:

- **If this repository already has a CNAME file**, it will be preserved regardless of what's in the source repository
- **If this repository doesn't have a CNAME file** but the source repository has one in `public/CNAME`, it will be copied over
- This ensures your custom domain configuration (`youssefchlih.me`) is maintained

## Build Requirements

The source repository must:
- Have a `package.json` file with build scripts
- Use `npm ci` for dependency installation
- Use `npm run build` for building
- Output built files to a `dist/` directory (standard for Vite projects)

## Troubleshooting

If the workflow fails:

1. **Check the Actions tab** for detailed error logs
2. **Verify the source repository** has the correct build setup
3. **Ensure the ref parameter** (if specified) exists in the source repository
4. **Check that the source repository** produces output in the `dist/` directory

## GitHub Pages Configuration

This workflow assumes:
- GitHub Pages is configured to serve from the **root of the default branch**
- This is set up as a **user site** (not a project site)
- The repository name follows the pattern `username.github.io`

No changes to GitHub Pages settings are made by this workflow.