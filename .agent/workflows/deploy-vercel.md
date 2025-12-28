---
description: Deploying to Vercel (Free Plan)
---

Follow these steps to deploy your high-end portfolio to Vercel for free:

## 1. Push to GitHub
If you haven't already, push your code to a GitHub repository:
```bash
git add .
git commit -m "Initial commit: High-end fintech portfolio"
# Create a repo on GitHub and follow their "push an existing repository" instructions
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## 2. Connect to Vercel
1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New..."** and select **"Project"**.
3. Find your `portfolio` repository and click **"Import"**.

## 3. Configure & Deploy
Next.js apps are zero-config on Vercel. 
1. **Framework Preset**: Vercel will automatically detect **Next.js**.
2. **Build Command**: `npm run build` (automatic).
3. **Output Directory**: `.next` (automatic).
4. Click **"Deploy"**.

## 4. Custom Domain (Optional)
Once deployed, Vercel gives you a `*.vercel.app` URL. 
To add a custom domain (e.g., `agnabasil.com`):
1. Go to **Project Settings** > **Domains**.
2. Enter your domain and follow the DNS configuration steps on your domain provider's dashboard.

> [!TIP]
> Since this is a static site (SSG), Vercel's Edge Network will serve it extremely fast across the globe.
