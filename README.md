# Faith Anyango - Professional Portfolio

## Project Structure

```
my-portfolio/
│
├── index.html
├── README.md
├── js/
│   └── script.js
├── img/
│   └── profile.jpg  # Your headshot (rename your image to this)
│   └── (project images if any)
├── cv.pdf           # Your downloadable CV (replace placeholder)
```

## Customizing Your Portfolio

- **Profile Photo:**
  - Place your professional headshot in the `img/` folder and name it `profile.jpg`.
- **Project Images:**
  - Project images use Unsplash by default. To use your own, add them to `img/` and update the `src` in `index.html`.
- **CV:**
  - Replace `cv.pdf` in the root directory with your actual CV file.
- **Content:**
  - Edit `index.html` to update your name, summary, skills, projects, and contact info.

## Serving the Site Locally

1. Open a terminal in the `my-portfolio/` directory.
2. Run:
   ```
   python -m http.server 8000
   ```
3. Visit [http://localhost:8000](http://localhost:8000) in your browser.

## Tailwind CSS
- The site uses Tailwind CSS via CDN for development. For production, consider setting up a Tailwind build process to optimize CSS.

## Unsplash Image Attribution
- Project images use Unsplash stock photos. Replace with your own if desired.

## Advanced
- For a production build, set up Tailwind CLI to purge unused CSS.
- To enable the contact form, a backend is required.

---

**Questions?** Edit the files as needed or contact Faith Anyango at [Faithfreyah315@gmail.com](mailto:Faithfreyah315@gmail.com). 