
# FG Labs — Static Site

**Pages:** Home, Services, Apply, About, FAQ, Contact  
**Stack:** HTML, CSS, JavaScript (no frameworks)  
**Theme:** Terracotta accent (#cc5a34), dark UI, Apple‑like motion

## Run locally
Just open `index.html` in a browser. For local servers:
```
python3 -m http.server 8000
```

## Deploy
1. Push this folder to a new GitHub repo.
2. Import the repo on Vercel (or Netlify). Use default settings.
3. Add your domain (e.g., `fglabs.com`).

## Forms
Forms currently call `fakeSubmit()`. Replace `<form action="#">` with:
- **Web3Forms:** `https://api.web3forms.com/submit` + hidden `access_key` input
- **Formspree:** `https://formspree.io/f/xxxxxxx`
- Or your serverless endpoint.

## SEO
- Edit `canonical` & sitemap URLs to your real domain.
- Update JSON‑LD in `<head>` with your socials & logo path.
- Submit sitemap to Google Search Console.

## Customize
- Colors/typography in `assets/css/style.css`
- Animations: IntersectionObserver in `assets/js/main.js`
- Logos: replace SVGs in `assets/img/`
- Favicons: add to `assets/img/` and link in `<head>`

© 2025 FG Labs
