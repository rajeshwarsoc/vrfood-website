# VRfood - Pre-Deployment Checklist

## 📋 Before You Deploy

Use this checklist to ensure everything is configured correctly before deploying to production.

---

## ✅ Local Setup

### Environment Variables
- [ ] Copied `.dev.vars.example` to `.dev.vars`
- [ ] Added `SANITY_PROJECT_ID` to `.dev.vars`
- [ ] Added `SANITY_DATASET` to `.dev.vars`
- [ ] Added `SANITY_API_TOKEN` to `.dev.vars`
- [ ] Verified `.dev.vars` is in `.gitignore`

### Dependencies
- [ ] Ran `npm install` successfully
- [ ] No npm errors or warnings
- [ ] Node.js version 18+ installed

### Build & Type Check
- [ ] `npm run typecheck` passes with 0 errors
- [ ] `npm run build` completes successfully
- [ ] `npm run dev` starts without errors

---

## 🎨 Sanity CMS Setup

### Sanity Account
- [ ] Created Sanity account (free tier)
- [ ] Logged in to https://sanity.io/manage

### Sanity Project
- [ ] Ran `npm run sanity:dev`
- [ ] Created new project named "VRfood"
- [ ] Selected dataset "production"
- [ ] Copied Project ID from dashboard
- [ ] Created API Token with "Editor" permissions
- [ ] Saved API Token securely

### Sanity Studio
- [ ] Sanity Studio opens at `http://localhost:3333`
- [ ] Can create/edit content
- [ ] Images upload successfully
- [ ] All schemas visible (Торты, Домашняя еда, Отзывы, Настройки)

### Sanity Studio Deployment
- [ ] Ran `npm run sanity:deploy`
- [ ] Studio accessible at public URL
- [ ] Can log in to deployed studio
- [ ] Can manage content from deployed studio

---

## 📝 Content Preparation

### Initial Content
- [ ] Added at least 5-6 cakes with images
- [ ] Marked 3-4 cakes as "featured"
- [ ] Added food items in all categories:
  - [ ] Супы
  - [ ] Салаты  
  - [ ] Обеды
  - [ ] Ужины
- [ ] Marked 4-5 food items as "featured"

### Site Settings
- [ ] Configured hero title
- [ ] Configured hero subtitle
- [ ] Added contact phone
- [ ] Added contact email
- [ ] Added WhatsApp number
- [ ] Added Telegram handle
- [ ] Added Instagram handle
- [ ] Added VK handle

### Test Review
- [ ] Submitted a test review via form
- [ ] Review appears in Sanity Studio
- [ ] Approved review in Studio
- [ ] Approved review displays on site

---

## ☁️ Cloudflare Setup

### Cloudflare Account
- [ ] Created Cloudflare account (free tier)
- [ ] Logged in to https://dash.cloudflare.com
- [ ] Navigated to "Workers & Pages"

### GitHub Repository
- [ ] Code pushed to GitHub
- [ ] Repository is accessible
- [ ] Main branch exists
- [ ] Latest changes committed

### Cloudflare Pages Project
- [ ] Connected GitHub repository
- [ ] Selected "vrfood" repository
- [ ] Configured build settings:
  - [ ] Build command: `npm run build`
  - [ ] Build output: `build/client`
  - [ ] Root directory: (empty)

### Environment Variables (Cloudflare)
- [ ] Added `SANITY_PROJECT_ID` (Production)
- [ ] Added `SANITY_DATASET` (Production)
- [ ] Added `SANITY_API_TOKEN` (Production)
- [ ] Saved and redeployed

### First Deployment
- [ ] Deployment started successfully
- [ ] Build completed without errors
- [ ] Site is accessible at Cloudflare URL
- [ ] Homepage loads correctly
- [ ] Images load from Sanity CDN

---

## 🧪 Testing Checklist

### Homepage
- [ ] Hero section displays correctly
- [ ] Featured cakes load from Sanity
- [ ] Featured food loads from Sanity
- [ ] All images are clickable
- [ ] Reviews section shows approved reviews
- [ ] "Обо мне" section displays
- [ ] Footer links work

### Navigation
- [ ] Header menu works
- [ ] Mobile menu works on small screens
- [ ] All page links navigate correctly
- [ ] Floating messengers visible

### Pages
- [ ] `/cakes` - Shows all cakes
- [ ] `/cakes/:category` - Shows category
- [ ] `/food` - Shows all food with filters
- [ ] `/reviews` - Shows review form and approved reviews
- [ ] `/contact` - Shows contact channels
- [ ] `/about` - Loads correctly
- [ ] `/delivery` - Loads correctly
- [ ] `/fillings` - Loads correctly
- [ ] `/desserts` - Loads correctly

### Review System
- [ ] Review form displays on `/reviews`
- [ ] Form validation works
  - [ ] Name required
  - [ ] Email required and validated
  - [ ] Rating selection works
  - [ ] Text min/max length enforced
- [ ] Submit button works
- [ ] Success message appears
- [ ] Review appears in Sanity (unapproved)
- [ ] After approval, review appears on site

### Responsive Design
- [ ] Mobile (< 640px) - all pages work
- [ ] Tablet (640-1024px) - all pages work
- [ ] Desktop (> 1024px) - all pages work
- [ ] Images scale correctly
- [ ] Text remains readable
- [ ] Buttons/links are clickable

### Performance
- [ ] Page loads under 3 seconds
- [ ] Images lazy load
- [ ] No console errors
- [ ] Lighthouse score > 90

---

## 🔐 Security Checklist

### Code Security
- [ ] No hardcoded secrets in code
- [ ] `.dev.vars` in `.gitignore`
- [ ] `.env` in `.gitignore`
- [ ] All API calls use environment variables

### Form Security
- [ ] Email validation on client and server
- [ ] Text sanitization implemented
- [ ] No XSS vulnerabilities
- [ ] Review moderation enabled

### Deployment Security
- [ ] HTTPS enabled (automatic on Cloudflare)
- [ ] Environment variables secure
- [ ] API tokens have correct permissions
- [ ] No secrets in GitHub repository

---

## 📱 Mobile Testing

Test on actual devices or browser dev tools:

### iOS
- [ ] iPhone SE (small screen)
- [ ] iPhone 12/13 (medium screen)
- [ ] iPad (tablet)

### Android
- [ ] Small phone (< 360px)
- [ ] Medium phone (360-400px)
- [ ] Large phone (> 400px)

### Browsers
- [ ] Safari
- [ ] Chrome
- [ ] Firefox
- [ ] Edge

---

## 🚀 Go-Live Checklist

### Final Verification
- [ ] All tests passed
- [ ] Content reviewed and approved
- [ ] Contact information correct
- [ ] Social media links work
- [ ] Test order flows work

### SEO
- [ ] Meta tags on all pages
- [ ] Favicon exists
- [ ] Open Graph images set
- [ ] Sitemap generated

### Analytics (Optional)
- [ ] Google Analytics installed (if needed)
- [ ] Yandex.Metrika installed (if needed)
- [ ] Tracking events configured

### Custom Domain (Optional)
- [ ] Domain purchased
- [ ] DNS configured
- [ ] SSL certificate active
- [ ] WWW redirect configured

### Monitoring
- [ ] Cloudflare analytics enabled
- [ ] Error logging configured
- [ ] Uptime monitoring (if needed)

---

## 📢 Launch

### Pre-Launch
- [ ] All checklist items above completed
- [ ] Stakeholders notified
- [ ] Launch date confirmed

### Launch Day
- [ ] Final content review
- [ ] Test one more time
- [ ] Monitor deployments
- [ ] Check error logs
- [ ] Verify everything works

### Post-Launch
- [ ] Share URL with clients
- [ ] Update social media
- [ ] Monitor reviews
- [ ] Respond to feedback
- [ ] Plan next features

---

## ✅ Sign-Off

**Deployed by**: _________________  
**Date**: _________________  
**Cloudflare URL**: _________________  
**Sanity Studio URL**: _________________  
**Custom Domain** (if applicable): _________________

---

## 🆘 If Something Goes Wrong

### Build Fails
1. Check build logs in Cloudflare dashboard
2. Verify environment variables are set
3. Run `npm run build` locally to reproduce
4. Check for TypeScript errors: `npm run typecheck`

### Content Not Showing
1. Verify Sanity credentials in Cloudflare
2. Check API token permissions (should be "Editor")
3. Ensure content is published in Sanity
4. Clear Cloudflare cache

### Reviews Not Submitting
1. Check browser console for errors
2. Verify API route is deployed
3. Check Sanity API token has write permissions
4. Test locally first

### Need Help?
- Review [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions
- Check [QUICKSTART.md](./QUICKSTART.md) for setup guide
- Review [FEATURES.md](./FEATURES.md) for feature documentation

---

**Good luck with your deployment! 🚀**
