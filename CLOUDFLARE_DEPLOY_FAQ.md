# Cloudflare Pages Deployment - FAQ

## ❓ Common Questions & Issues

### Q1: I see an ERROR during deployment, but it says "Success" too. What's happening?

**Message you see:**
```
✘ [ERROR] No routes found when building Functions directory
Warning: Wrangler did not find routes when building functions. Skipping.
Success: Assets published!
Success: Your site was deployed!
```

**Answer:** ✅ **This is completely normal!** Your site deployed successfully.

**Explanation:**
- Cloudflare Pages checks for a `/functions` directory (for serverless functions)
- VRfood uses **React Router SSR** instead of Cloudflare Functions
- The "ERROR" is just Cloudflare saying "I checked, but didn't find functions"
- The warning is **automatically skipped**
- Your site still deploys perfectly

**How to know it worked:**
- ✅ You see "Success: Assets published!"
- ✅ You see "Success: Your site was deployed!"
- ✅ Your site is accessible at the Cloudflare URL

**Fix Applied:**
The `wrangler.toml` file now includes `functions = false` to suppress this warning in future deployments.

---

### Q2: How do I know my deployment actually worked?

**Check these indicators:**

1. **Build Logs:**
   ```
   ✓ built in 17.46s           ← Client build succeeded
   ✓ built in 443ms            ← Server build succeeded
   Success: Assets published!   ← Files uploaded
   Success: Your site deployed! ← Live!
   ```

2. **Cloudflare Dashboard:**
   - Visit your Cloudflare Pages project
   - Check "Deployments" tab
   - Latest deployment shows "Success" with green checkmark

3. **Live Site:**
   - Visit your Cloudflare Pages URL
   - Site loads correctly
   - All pages are accessible

---

### Q3: What are the critical environment variables?

**Required in Cloudflare Pages:**

```
SANITY_PROJECT_ID    = your-sanity-project-id
SANITY_DATASET       = production
SANITY_API_TOKEN     = skxxxxxxxxxxxx (Editor permissions)
```

**Where to set them:**
1. Cloudflare Dashboard → Your Project
2. Settings → Environment Variables
3. Add for "Production" environment
4. Redeploy after adding

---

### Q4: My build is failing. What should I check?

**Common causes:**

1. **Missing environment variables**
   - Solution: Add all three required variables in Cloudflare

2. **Wrong build settings**
   - Build command: `npm run build`
   - Output directory: `build/client`
   - Root directory: (leave empty)

3. **Sanity credentials incorrect**
   - Verify PROJECT_ID in Sanity dashboard
   - Ensure API token has "Editor" permissions
   - Check dataset name (usually "production")

4. **Node.js version**
   - Cloudflare uses Node 22.x by default
   - Our project supports Node 18+
   - No action needed

---

### Q5: How long does deployment take?

**Typical timeline:**

```
Clone repository        → 2 seconds
Install dependencies    → 20-30 seconds
Build client           → 15-20 seconds
Build server           → 1-2 seconds
Upload assets          → 10-15 seconds
Deploy                 → 1-2 seconds
Total: ~1 minute
```

**First deployment:** May take 2-3 minutes
**Subsequent deployments:** Usually under 1 minute

---

### Q6: Can I deploy manually without pushing to Git?

**Yes! Two methods:**

**Method 1: Using npm script**
```bash
npm run build
npm run deploy
```

**Method 2: Using Wrangler directly**
```bash
npm run build
npx wrangler pages deploy ./build/client --project-name=vrfood
```

**Note:** Manual deployments still require environment variables set in Cloudflare.

---

### Q7: How do I rollback to a previous version?

**In Cloudflare Dashboard:**

1. Go to your project
2. Click "Deployments" tab
3. Find the deployment you want to restore
4. Click "•••" menu → "Rollback to this deployment"
5. Confirm

**Your site will instantly switch to the selected version.**

---

### Q8: What happens when I push to Git?

**Automatic flow:**

1. You push code to GitHub (`git push origin main`)
2. Cloudflare detects the push (webhook)
3. Cloudflare clones your repository
4. Runs `npm install`
5. Runs `npm run build`
6. Uploads `build/client` folder
7. Makes it live
8. Sends you notification (if enabled)

**Time:** ~1 minute from push to live

---

### Q9: Where can I see build logs?

**In Cloudflare Dashboard:**

1. Go to your project
2. Click "Deployments" tab
3. Click on any deployment
4. View full build logs
5. See errors, warnings, and success messages

**Logs include:**
- Dependency installation
- Build process
- Asset upload
- Deployment status

---

### Q10: Can I use a custom domain?

**Yes! Free SSL included:**

1. Cloudflare Dashboard → Your Project
2. "Custom domains" tab
3. "Set up a custom domain"
4. Enter your domain (e.g., `vrfood.ru`)
5. Follow DNS setup instructions
6. SSL certificate auto-generated

**Benefits:**
- Free SSL (HTTPS)
- Global CDN
- DDoS protection
- Fast DNS

---

## 📊 Build Output Explained

### Successful Build Log:

```
✓ 1819 modules transformed          ← React components compiled
rendering chunks...                 ← Code bundled
computing gzip size...              ← Compression calculated

Client bundle: 186.77 kB            ← Total JS size
              (gzip: 59.06 kB)      ← Compressed size
Server bundle: 144.76 kB            ← SSR bundle size

✓ built in 17.46s                   ← Build succeeded
Success: Assets published!          ← Deployed
Success: Your site was deployed!    ← Live!
```

### What to ignore:

```
Generated an empty chunk: "api.reviews"
```
This is normal - React Router creates chunks for code splitting.

```
✘ [ERROR] No routes found when building Functions directory
```
This is normal - we don't use Cloudflare Functions.

---

## 🎯 Quick Checklist

**Before deployment:**
- [ ] Code pushed to GitHub
- [ ] Environment variables set in Cloudflare
- [ ] Build settings correct
- [ ] Sanity Studio deployed

**After deployment:**
- [ ] Check deployment status in Cloudflare
- [ ] Visit live site URL
- [ ] Test all major pages
- [ ] Verify Sanity content loads
- [ ] Test review submission
- [ ] Check mobile responsiveness

---

## 🆘 Getting Help

**Build issues:**
- Check build logs in Cloudflare
- Verify environment variables
- Test build locally: `npm run build`

**Content issues:**
- Check Sanity Studio
- Verify content is published
- Check SANITY_PROJECT_ID

**Performance issues:**
- View Cloudflare Analytics
- Check bundle sizes in build logs
- Enable browser DevTools

---

## 📚 Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages)
- [React Router v7 Docs](https://reactrouter.com)
- [Sanity Docs](https://www.sanity.io/docs)

---

**Remember:** If you see "Success: Your site was deployed!" at the end, your deployment worked! 🎉
