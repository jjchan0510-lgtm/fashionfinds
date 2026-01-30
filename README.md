# fashionfinds

A simple static webpage for the "fashionfinds" demo. This repository includes the HTML, CSS and JavaScript files needed to view the page locally or host it via GitHub Pages.

## Files
- [temu-home.html](temu-home.html) — main page
- [temu-home.css](temu-home.css) — styles
- [temu-home.js](temu-home.js) — script

## Quick start
1. Open `temu-home.html` in a browser to view locally.

## Host with GitHub Pages (recommended)
GitHub Pages can serve this repository as a static site. Two common approaches:

1) Serve from the `main` branch root (easy)
   - Ensure your repository is pushed to GitHub.
   - In the repository on GitHub: Settings → Pages → Source → select `main` branch and `/ (root)` folder → Save.
   - Note: GitHub Pages looks for `index.html` at the site root. If you want the site to load automatically, either rename or copy `temu-home.html` to `index.html`.

2) Use a `gh-pages` branch or other deployment workflow
   - Create a `gh-pages` branch that contains `index.html`, `temu-home.css`, and `temu-home.js`, or use a GitHub Action to publish.

### Example commands (copy/paste)
```bash
# (optional) copy the page to index.html so Pages serves it automatically
cp temu-home.html index.html

# add files, commit, and push
git add README.md index.html
git commit -m "Add README and index for GitHub Pages"
git push origin main
```

## Notes
- If you prefer the site to be available at `https://<your-username>.github.io/<repo>/`, using the `main` branch root or a `gh-pages` branch both work.
- If you want me to push these changes to the remote repo or set up an automated deploy (GitHub Action), I can do that for you.

---
Created for quick GitHub Pages hosting of this static demo.
