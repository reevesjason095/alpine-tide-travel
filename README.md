# AlpineTideTravel

A simple cruise travel website with:

- Home page
- About Us page
- Contact and inquiry forms
- Blog and blog article pages
- Port information page
- Lanyard information page
- Greenbrier Bunker information page
- Terms and conditions page
- Thank-you page
- Responsive hamburger menu
- Sitemap and robots configuration

## Pages

- `index.html` — Home page
- `about.html` — About Us page
- `thankyou.html` — Booking confirmation page
- `terms.html` — Terms and conditions
- `inquiry.html` — Inquiry/contact form
- `blog.html` — Blog listing page
- `blog-template.html` — Blog article template
- `greenbrier-bunker.html` — Greenbrier Bunker information page
- `portcanaveral.html` — Port Canaveral information page
- `lanyard.html` — Lanyard information page

## Supporting Files

- `styles.css` — Website styles and responsive layout
- `script.js` — Navigation and interactive functionality
- `sitemap.xml` — Search engine sitemap
- `robots.txt` — Search engine crawling instructions
- `sensory-guide.pdf` — Sensory accessibility guide

## Run Locally

Open `index.html` in a browser, or use OneCompiler / any static web server.

## GitHub Pages Setup

1. Create a new GitHub repository.
2. Upload all project files to the repository root.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, select:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
5. Save and wait for the site link to appear.

## Notes

- Keep all files in the repository root so links such as `about.html` and `booking.html` work correctly.
- The booking engine uses an external iframe and requires internet access.
- Ensure filenames and links use matching capitalization when deploying to GitHub Pages.

## Project Structure

```text
/
├── index.html
├── about.html
├── thankyou.html
├── terms.html
├── inquiry.html
├── blog.html
├── blog-template.html
├── greenbrier-bunker.html
├── portcanaveral.html
├── lanyard.html
├── styles.css
├── script.js
├── sitemap.xml
├── robots.txt
└── sensory-guide.pdf
