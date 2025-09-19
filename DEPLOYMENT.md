# 🚀 Deployment Guide - Astrophysicist Portfolio

## GitHub Pages Deployment

### Method 1: Automatic Deployment (Recommended)

1. **Create GitHub Repository**:
   ```bash
   # Initialize git repository
   git init
   git add .
   git commit -m "Initial commit: Astrophysicist Portfolio"
   
   # Create repository on GitHub and push
   git branch -M main
   git remote add origin https://github.com/yourusername/astrophysicist-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Source: Deploy from a branch
   - Branch: Select `gh-pages` (will be created automatically)
   - Click Save

3. **Update Homepage URL**:
   - Edit `package.json` line 5:
   ```json
   "homepage": "https://yourusername.github.io/astrophysicist-portfolio"
   ```
   Replace `yourusername` with your actual GitHub username

4. **Automatic Deployment**:
   - Every push to `main` branch will automatically deploy
   - GitHub Actions workflow handles the build and deployment
   - Check Actions tab for deployment status

### Method 2: Manual Deployment

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy manually**:
   ```bash
   npm run deploy
   ```

## 🔧 Configuration

### Custom Domain (Optional)
If you have a custom domain:
1. Update `public/CNAME` file with your domain
2. Configure DNS settings with your domain provider

### Environment Variables
For production-specific settings, create `.env.production`:
```
REACT_APP_SITE_URL=https://yourusername.github.io/astrophysicist-portfolio
```

## 📝 Pre-Deployment Checklist

- [ ] Update personal information in all pages
- [ ] Replace placeholder images in Gallery
- [ ] Update contact information in About page
- [ ] Add real publications and research data
- [ ] Test all navigation and animations
- [ ] Verify responsive design on mobile
- [ ] Update README with your information

## 🌟 Post-Deployment

1. **Test the live site**: Visit your GitHub Pages URL
2. **Share your portfolio**: Add the URL to your CV, LinkedIn, etc.
3. **Monitor performance**: Use browser dev tools to check loading times
4. **SEO optimization**: Consider adding meta tags for better search visibility

## 🔄 Updates

To update your portfolio:
1. Make changes locally
2. Test with `npm start`
3. Commit and push to main branch
4. Automatic deployment will handle the rest

## 🆘 Troubleshooting

**Build fails?**
- Check console for errors
- Ensure all dependencies are installed: `npm install`
- Verify Node.js version compatibility

**Page not loading?**
- Check GitHub Pages settings
- Verify homepage URL in package.json
- Wait 5-10 minutes for DNS propagation

**Images not showing?**
- Ensure images are in `public/` folder
- Use relative paths: `/images/photo.jpg`
- Check browser console for 404 errors

## 📞 Support

If you encounter issues:
1. Check GitHub Actions logs
2. Verify all file paths are correct
3. Test locally first with `npm start`
4. Check browser console for errors

Your stunning astrophysicist portfolio will be live at:
`https://yourusername.github.io/astrophysicist-portfolio`

🌌 Happy stargazing! ✨