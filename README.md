# BiteCycle – Professional Delivery Service Website Demo

A modern, mobile-first static website demo for **BiteCycle**, a South African bicycle delivery service.

This project was created as a professional demonstration to present to the business owner.

## Features

- Responsive design (mobile, tablet, desktop)
- Black / yellow / white brand colour scheme inspired by the original advertisement
- WhatsApp-first ordering with prefilled service-specific messages
- Working contact form that opens WhatsApp with the enquiry
- FAQ accordion
- Smooth scrolling and accessible navigation
- Floating WhatsApp button
- SEO meta tags, Open Graph, favicon
- No backend or paid dependencies required

## Business Information Used

- **Name:** BiteCycle  
- **Services:** Food, Grocery, Medication, Liquor, Shop-to-Door delivery  
- **Contact:** +27 60 624 8852 (WhatsApp & call)  
- **Promo:** 10% off first order (to be confirmed)  
- **Delivery fee:** From R20 (final fee confirmed on WhatsApp)

Unconfirmed details (areas, hours, exact pricing terms) are clearly marked as placeholders.


## IMPORTANT – Images / Assets

The live site currently shows broken images because the `assets/` folder was not pushed to GitHub.

**You must upload the entire `assets` folder** (containing `images/` and `icons/`) to the root of your repository alongside `index.html`.

Without it, hero and service images will not appear.

## Quick Start

1. Clone or download this repository.
2. Open `index.html` in a browser, **or**
3. Deploy to GitHub Pages / Netlify / any static host.

```bash
# Local preview with a simple server (optional)
npx serve .
# or
python3 -m http.server 8000
```

## File Structure

```
bitecycle/
├── index.html          # Main page
├── style.css           # All styles
├── script.js           # Interactions
├── assets/
│   ├── images/         # Service & hero images
│   └── icons/
│       └── favicon.svg
├── robots.txt
├── sitemap.xml
└── README.md
```

## Customisation for the Business Owner

Search the code for these markers to update content once confirmed:

- **Promo settings** – look for `promo-settings` or the “10% OFF” text
- **Delivery areas / hours** – “Where We Deliver” section placeholders
- **Social media links** – footer placeholder
- **Privacy / Terms** – footer links (currently placeholders)

## WhatsApp Links

All order buttons use the official number:

```
https://wa.me/27606248852
```

Service-specific prefilled messages are already implemented.

## Deployment (GitHub Pages)

1. Create a new GitHub repository.
2. Push the contents of this folder.
3. Go to **Settings → Pages**.
4. Select the `main` branch and `/ (root)`.
5. Your site will be live at `https://<username>.github.io/<repo>/`.

## Disclaimer

This is a **demonstration concept**. It is not an official BiteCycle website unless the business owner approves and adopts it.

## Licence

Demo project – free to use and modify for the intended client presentation.
