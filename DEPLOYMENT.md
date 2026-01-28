# VRfood Deployment Guide

## Overview

This guide covers the complete deployment process for VRfood, including Sanity CMS setup and Cloudflare Pages deployment.

## Prerequisites

- Node.js 18+ installed
- Git installed
- Cloudflare account (free tier works)
- Sanity account (free tier works)

## Part 1: Sanity CMS Setup

### 1.1 Create Sanity Project

```bash
# Initialize Sanity project
npm run sanity:dev
```

This will:
- Open Sanity Studio in your browser
- Prompt you to log in/create a Sanity account
- Create a new project

### 1.2 Get Sanity Credentials

After creating your project, you'll receive:
- **Project ID**: Found in your Sanity dashboard
- **Dataset**: Usually "production" (default)
- **API Token**: Create one with Editor permissions

To create an API token:
1. Go to https://www.sanity.io/manage
2. Select your project
3. Navigate to "API" → "Tokens"
4. Click "Add API Token"
5. Name it "VRfood Production"
6. Set permissions to "Editor"
7. Copy the token (you won't see it again!)

### 1.3 Configure Environment Variables

Create a `.dev.vars` file in the project root:

```bash
cp .dev.vars.example .dev.vars
```

Edit `.dev.vars` and add your credentials:

```env
SANITY_PROJECT_ID=your-actual-project-id
SANITY_DATASET=production
SANITY_API_TOKEN=your-actual-api-token
```

**Important:** Never commit `.dev.vars` to Git!

### 1.4 Deploy Sanity Studio

```bash
npm run sanity:deploy
```

This will deploy your Sanity Studio to a URL like:
`https://your-project.sanity.studio`

## Part 2: Cloudflare Pages Setup

### 2.1 Connect Git Repository

1. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/vrfood.git
git push -u origin main
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to "Workers & Pages" → "Create application" → "Pages"
4. Click "Connect to Git"
5. Select your repository
6. Configure build settings:

   - **Build command:** `npm run build`
   - **Build output directory:** `build/client`
   - **Root directory:** (leave empty)

### 2.2 Set Environment Variables in Cloudflare

In Cloudflare Pages settings, add these environment variables:

```
SANITY_PROJECT_ID = your-project-id
SANITY_DATASET = production
SANITY_API_TOKEN = your-api-token
```

To add them:
1. Go to your project in Cloudflare Pages
2. Navigate to "Settings" → "Environment variables"
3. Add each variable for "Production" environment
4. Click "Save"

### 2.3 Deploy

Cloudflare will automatically deploy when you push to `main`. You can also trigger manual deployments:

```bash
npm run deploy
```

Or using Wrangler CLI directly:

```bash
npx wrangler pages deploy ./build/client
```

### 2.4 Understanding Build Messages

When deploying to Cloudflare Pages, you may see this message in the build logs:

```
✘ [ERROR] No routes found when building Functions directory
Warning: Wrangler did not find routes when building functions. Skipping.
Success: Assets published!
Success: Your site was deployed!
```

**This is NORMAL and NOT an actual error!**

- ✅ The deployment succeeds (notice the "Success" messages)
- ⚠️ The "ERROR" is Cloudflare checking for a `/functions` directory
- ✅ VRfood uses React Router SSR, not Cloudflare Functions
- ✅ The warning is automatically skipped
- ✅ Your site deploys correctly

**Status:** If you see both the error AND the success messages, your deployment worked perfectly!

## Part 3: Initial Content Setup

### 3.1 Add Initial Content

1. Open your Sanity Studio: `https://your-project.sanity.studio`
2. Add cake categories:
   - Create at least 6 cakes
   - Mark some as "featured" for homepage display
   - Upload images for each

3. Add food items:
   - Create items in categories: Супы, Салаты, Обеды, Ужины
   - Mark 4 items as "featured"
   - Set prices and descriptions

4. Configure site settings:
   - Add hero title and subtitle
   - Set contact information
   - Add social media handles

### 3.2 Test Reviews

1. Visit your deployed site
2. Go to `/reviews` page
3. Submit a test review
4. Return to Sanity Studio
5. Go to "Reviews" section
6. Approve the review by checking "Одобрен"
7. Refresh your site to see the approved review

## Part 4: Git Workflow

### 4.1 Daily Development

```bash
# Create a new feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature
```

### 4.2 Deployment Flow

```bash
# Merge to main (or use Pull Request on GitHub)
git checkout main
git merge feature/new-feature

# Push to trigger automatic deployment
git push origin main
```

Cloudflare will automatically:
1. Pull the latest code
2. Run `npm run build`
3. Deploy the new version
4. Make it live in ~1 minute

## Part 5: Domain Setup (Optional)

### 5.1 Add Custom Domain

1. In Cloudflare Pages, go to "Custom domains"
2. Click "Set up a custom domain"
3. Enter your domain (e.g., `vrfood.ru`)
4. Follow DNS setup instructions

Cloudflare provides:
- Free SSL certificate
- Automatic HTTPS
- Global CDN

## Troubleshooting

### Build Fails

1. Check environment variables are set correctly
2. Verify Sanity credentials
3. Check build logs in Cloudflare dashboard

### Reviews Not Submitting

1. Verify SANITY_API_TOKEN has "Editor" permissions
2. Check browser console for errors
3. Ensure API route is deployed

### Images Not Loading

1. Verify Sanity images are uploaded correctly
2. Check SANITY_PROJECT_ID is correct
3. Clear browser cache

## Performance Optimization

### Caching Strategy

Cloudflare automatically caches:
- Static assets (images, CSS, JS)
- API responses (configurable)

### Image Optimization

Sanity's image CDN automatically:
- Resizes images on-demand
- Serves WebP format when supported
- Applies compression

## Security Best Practices

1. **Never commit secrets:**
   - `.dev.vars` is in `.gitignore`
   - Use environment variables only

2. **API Token Permissions:**
   - Use "Editor" for write operations
   - Consider "Viewer" for read-only deployments

3. **Review Moderation:**
   - All reviews require approval
   - Check reviews regularly in Sanity Studio

## Monitoring

### Cloudflare Analytics

View deployment analytics:
- Visitor statistics
- Performance metrics
- Error logs

### Sanity Analytics

Monitor content usage:
- API request counts
- Dataset size
- User activity

## Cost Estimate

### Free Tier Limits

**Cloudflare Pages:**
- Unlimited requests
- Unlimited bandwidth
- 500 builds/month
- ✅ Perfect for this project

**Sanity:**
- 3 users
- 10,000 documents
- 100,000 API requests/month
- ✅ More than enough for VRfood

## Support

### Common Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare
npm run deploy

# Open Sanity Studio locally
npm run sanity:dev

# Deploy Sanity Studio
npm run sanity:deploy

# Type checking
npm run typecheck
```

### Useful Links

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [Sanity Documentation](https://www.sanity.io/docs)
- [React Router v7 Docs](https://reactrouter.com)

## Next Steps

1. ✅ Set up Sanity project
2. ✅ Configure environment variables
3. ✅ Deploy to Cloudflare Pages
4. ✅ Add initial content
5. ✅ Test review submission
6. ✅ Configure custom domain (optional)
7. ✅ Monitor and optimize

Your VRfood website is now live and production-ready! 🎉
