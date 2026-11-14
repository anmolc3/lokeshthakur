# Lokesh Thakur — Official Author Website

Welcome to the official, responsive personal and portfolio website for **Lokesh Thakur**, author of *Co-Mat-Ose*, *Don't Be a Parent, Be a Friend*, and *Twenty20 of Life*.

Built with semantic HTML5, modern CSS3, vanilla JavaScript, and Bootstrap 5 assets (adapted from the iPortfolio framework), this website features an editorial aesthetic tailored for a literary professional.

---

## 1. Project Structure

```
lokesh-author/
├── index.html                                # 1. Home Page
├── about.html                                # 2. About Lokesh (Author Biography & Journey)
├── work.html                                 # 3. Work & Creative Portfolio
├── news-events.html                          # 4. News & Speaking Engagements
├── gallery.html                              # 5. Photography Gallery (GLightbox & Isotope)
├── shop.html                                 # 6. Books Showcase & WhatsApp Enquiries
├── extra.html                                # 7. Resources, Media Kit & Discussion Guides
├── faq.html                                  # 8. Frequently Asked Questions
│
├── Bearded Scholar in a Warm Library.webp     # Primary author portrait
├── Smiling Bearded Man in Floral Shirt.webp   # About & personal moments portrait
├── Smiling Outdoorsman on the Bridge.webp     # Travel & outdoor moments
├── Laughing Man Amid Scenic Hills.webp        # Personal moments in nature
├── Bearded Speaker in Ornate Armchair.webp    # Speaking engagements & keynote address
├── Co-Mat-Ose_ Illustrated Story Collection.webp # Book 1 cover
├── Don’t Be a Parent, Be a Friend.webp         # Book 2 cover
├── Twenty20 of Life_ Cricketing Life Lessons.webp # Book 3 cover
│
├── assets/
│   ├── css/
│   │   ├── main.css                          # Core template layout stylesheet
│   │   └── custom.css                        # Editorial author theme, typography & components
│   ├── js/
│   │   └── main.js                           # Responsive drawer, GLightbox, and filters
│   └── vendor/
│       ├── bootstrap/                        # Bootstrap v5.3.3 CSS & JS
│       ├── bootstrap-icons/                  # Bootstrap Icons font & CSS
│       ├── aos/                              # Animate On Scroll library
│       ├── glightbox/                        # Lightbox modal for photo gallery
│       └── isotope-layout/                   # Masonry and category filtering
│
└── README.md                                 # Documentation & Maintenance Guide
```

---

## 2. How to Run the Website Locally

Since the website is completely static (no backend, no database, no Node.js server required):

### Option A: Double-Click
Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

### Option B: Local Web Server (Recommended)
You can serve the directory using any lightweight local static server:

- **VS Code Live Server**: Right-click `index.html` and click **"Open with Live Server"**.
- **Python**: `python -m http.server 8000` (Visit `http://localhost:8000`)
- **Node `serve` / `npx`**: `npx serve .`

---

## 3. How to Deploy to Static Hosting

This website is ready for zero-configuration static deployment:

### Deploying to Netlify
1. Log into [Netlify](https://www.netlify.com).
2. Drag and drop the entire project folder into the Netlify "Deploys" dashboard.
3. Your site will immediately be live with HTTPS enabled.

### Deploying to GitHub Pages
1. Push this folder to a GitHub repository.
2. In your repository, go to **Settings > Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch** (select `main` branch, root `/`).
4. Click **Save**.

---

## 4. Content Management & Editing Guide

All editable regions in the HTML files are clearly demarcated with uppercase HTML comments.

### 4.1 How to Edit the Author Biography
1. Open `about.html` (and the preview in `index.html`).
2. Search for the comment:
   ```html
   <!-- EDITABLE: AUTHOR BIOGRAPHY -->
   ```
3. Update the paragraphs with new biography details, educational history, or awards.
4. Save the file.

### 4.2 How to Update Book Details & Descriptions
1. Open `shop.html` (and the summary cards on `index.html`).
2. Search for the relevant book marker:
   ```html
   <!-- EDITABLE: BOOK DETAILS - CO-MAT-OSE -->
   <!-- EDITABLE: BOOK DETAILS - PARENTING BOOK -->
   <!-- EDITABLE: BOOK DETAILS - TWENTY20 OF LIFE -->
   ```
3. Update the title, subtitle, synopsis, genre, or format tags.

### 4.3 How to Change Book Prices
1. Open `shop.html` (or `index.html`).
2. Locate the price field:
   ```html
   <span class="text-muted">Price:</span> <strong class="text-dark"><!-- EDITABLE: PRICE --> Available on Direct Enquiry</strong>
   ```
3. Replace with your actual price (e.g. `₹299 (Inclusive of taxes)`).

### 4.4 How to Add a New Book
1. Place the new book cover PNG or JPG into the root directory (e.g. `New_Book_Cover.png`).
2. In `shop.html`, copy an existing `<section id="book-...">` block.
3. Update the image `src`, book title, synopsis, and WhatsApp link:
   ```html
   <a href="https://wa.me/919456593170?text=Hello%2C%20I%20am%20interested%20in%20purchasing%20the%20book%20[BOOK_TITLE]%20by%20Lokesh%20Thakur." ...>
   ```

### 4.5 How to Add Gallery Images
1. Place your new image file in the project folder.
2. Open `gallery.html`.
3. Locate the comment:
   ```html
   <!-- EDITABLE: GALLERY IMAGES AND CATEGORIES -->
   ```
4. Add a new item block inside the `.isotope-container`:
   ```html
   <div class="col-lg-4 col-md-6 isotope-item filter-personal">
     <div class="gallery-card">
       <img src="Your_New_Image.png" alt="Description" loading="lazy">
       <a href="Your_New_Image.png" class="glightbox gallery-overlay" data-gallery="author-gallery" data-title="Title" data-description="Caption">
         <h5>Title</h5>
         <span>Category &bull; Subtitle</span>
         <div class="gallery-zoom-icon"><i class="bi bi-arrows-fullscreen"></i></div>
       </a>
     </div>
   </div>
   ```

### 4.6 How to Add News & Speaking Events
1. Open `news-events.html`.
2. Locate the comment:
   ```html
   <!-- EDITABLE: NEWS ITEM 1 -->
   ```
3. Update the event date, headline, featured image, and summary text.

### 4.7 How to Update FAQs
1. Open `faq.html`.
2. Locate the comment:
   ```html
   <!-- EDITABLE: FAQ ACCORDION -->
   ```
3. Duplicate an `<div class="accordion-item">` block and update the question in the `<button>` and the answer in the `.accordion-body`. Ensure the `id`, `data-bs-target`, and `aria-controls` match.

### 4.8 How to Change Contact Details
The website uses:
- **Phone Number:** `+91 94565 93170` (link: `tel:+919456593170`)
- **WhatsApp Link:** `https://wa.me/919456593170`

To update the phone number across the website:
Perform a project-wide search and replace for `9456593170` and `+91 94565 93170` across all `.html` files.

---

## 5. Design System & Image Rules

- **Photographs:** Always use `object-fit: cover` to maintain natural aspect ratios without distortion.
- **Book Covers:** Always use `object-fit: contain` on book displays to preserve cover proportions and avoid stretching or pixelation.
- **Sidebar:** The dark sidebar remains fixed on desktop screens (>=1200px) and converts to an accessible, smooth off-canvas drawer on mobile (<1200px).
- **Color Variables:** Global palette variables can be customized in `assets/css/custom.css`.

---

## 6. Verification & Quality Checklist

- [x] Extracted original iPortfolio template and reused Bootstrap 5 vendor assets.
- [x] All 8 separate HTML pages implemented with identical navigation and footer.
- [x] Responsive sidebar drawer on desktop and mobile.
- [x] Authentic supplied photographs properly integrated without distortion.
- [x] All 3 authentic book covers integrated with `object-fit: contain`.
- [x] Individual dynamic WhatsApp book enquiry buttons functional with pre-filled messages.
- [x] Direct phone call (`tel:+919456593170`) actions implemented.
- [x] Responsive photographic gallery with GLightbox fullscreen preview and zoom.
- [x] Interactive FAQ accordion with smooth expand/collapse.
- [x] Portfolio isotope category filters functional.
- [x] Valid relative asset links across all 8 pages.
- [x] Zero broken internal links.
- [x] Valid semantic SEO meta descriptions and Open Graph tags on each page.
- [x] Detailed `README.md` maintenance guide included.

---
&copy; 2026 Lokesh Thakur. All Rights Reserved.
