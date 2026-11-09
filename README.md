> **Typography update:** This is the Arial / black-text edition. The entire site uses Arial with high-contrast black text and minimal color accents. Edit `assets/css/style.css` to adjust typography.

# Mingyang Mao — Traditional Academic Homepage

A **classic professor / Ph.D. student-style academic site** featuring a profile sidebar, biography, research areas, news, education, selected publications, complete publication list with search/filter, research projects, and teaching experience. Written with plain HTML, CSS, JavaScript. No Node.js, framework, backend, paid hosting, or build step.

## Preview

Open `index.html` in your browser, or run from this directory:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

Pages:
- `index.html`: home / biography, news, research, selected publications, teaching, education
- `publications.html`: all papers, searchable and filterable by topic
- `projects.html`: research and engineering projects

## Personalize **before public release**

All content is in `assets/js/data.js` in `window.ACADEMIC_DATA`. Edit this file to update publication lists and project descriptions without changing the HTML.

1. Add your **actual portrait** to `assets/images/profile.jpg` and set `profile.photo: 'assets/images/profile.jpg'`, and `profile.photoAlt` accordingly. The provided `profile-placeholder.svg` is an **initials placeholder**, not a real photograph.
2. Set `profile.email` to your confirmed public-facing academic email; set `profile.github` (and optionally `profile.linkedin`) to your actual accounts. Unset links are hidden by design.
3. Put the latest CV PDF in `assets/Mingyang_Mao_CV.pdf` and set `profile.cv: 'assets/Mingyang_Mao_CV.pdf'`. CV navigation/links appear automatically when you configure it.
4. Review institution and education, research summary, teaching, all coauthor lists, titles, venue and submission statuses. Check whether a paper has transitioned from **preprint / under review** to accepted/published and update it.
5. Update the date in the `Last updated` HTML footer after changing content.
6. Customize typography/colors in `assets/css/style.css` (`--navy`, `--link`, etc.).

The data was prepared using prior user-provided information and verified public paper pages (arXiv, PAKDD/Springer) available November 2026. **The research direction described as ongoing is NOT represented as a published paper.** We did not infer any personal email, GitHub handle or portrait.

## Publish on GitHub Pages for free

1. Create a public GitHub repository named `YOUR_GITHUB_USERNAME.github.io` (use your actual username).
2. Upload **the contents** of this directory to the root of the repository. The root should contain `index.html`, `publications.html`, `projects.html`, `assets/` and `.nojekyll`.
3. In repository **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. Visit `https://YOUR_GITHUB_USERNAME.github.io/` once published. GitHub Actions will indicate deployment errors, if any.
5. Optional: connect a personal domain via **Settings → Pages → Custom domain** and configure DNS according to GitHub documentation.

## Files

```
index.html                         Homepage
publications.html                  Publications (search / filter)
projects.html                      Projects
assets/js/data.js                  EDIT THIS to update all content
assets/js/site.js                  Site rendering and navigation
assets/css/style.css               Academic theme and responsive styles
assets/images/profile-placeholder.svg   Placeholder for headshot
assets/images/*.svg                Locally hosted original illustrations
.nojekyll                          Static hosting support
```

This version can coexist with the previously generated **modern** website. Deploy one design at a time to the root of `username.github.io`, or use separate repositories / subpaths for both.
