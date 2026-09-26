# Liberty Tree Felling

A responsive, static website for Liberty Tree Felling in Durban and KwaZulu-Natal, South Africa. Built with HTML, CSS and vanilla JavaScript. No build step, packages, backend, paid services, credit card or custom domain are required. Nothing has been deployed.

## Files

- `index.html` — all six sections, contact links, search and sharing metadata, embedded favicon.
- `style.css` — responsive layout, colours, typography, reduced-motion support and focus states.
- `script.js` — accessible mobile navigation, current footer year and gallery rendering.
- `gallery-data.js` — editable photo list; no HTML edits needed.
- `ADMIN.md` — GitHub permissions and photo-management instructions.
- `assets/hero.jpg` — locally stored, compressed forest photograph.
- `assets/gallery/` — all 10 supplied job photographs, stored locally with lazy loading.
- `.nojekyll` — allows GitHub Pages to serve the static files directly.

## Preview locally

Double-click `index.html` to open it in a browser. No installation is needed; all visual assets are local. An internet connection is needed only when following WhatsApp links.

Alternatively, if Python is installed, open a terminal in this folder and run:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then visit http://localhost:8000. Press Ctrl+C in the terminal to stop the server. On Windows, `py` may be used instead of `python`.

## Publish to GitHub Pages later

These are instructions only; the site has not been published.

1. Create a **public** GitHub repository, for example `liberty-tree-felling`. Public repositories can use GitHub Pages on GitHub Free.
2. Upload `index.html`, `style.css`, `script.js`, `gallery-data.js`, `.nojekyll`, `README.md`, `ADMIN.md` and the entire `assets` folder to the root of the `main` branch. Keep file names and folder structure unchanged.
3. When ready to publish, open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**. Choose `main` and `/(root)`, then **Save**. This step publishes the site.
5. Wait for the Pages deployment to finish. The address will be `https://YOUR-USERNAME.github.io/liberty-tree-felling/` for that repository name. GitHub provides the address; no custom domain is needed.
6. Check the live page on a phone and desktop. Future commits to the selected branch update the published site.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

All asset paths are relative, so the site works under a GitHub Pages repository path. Once the final public URL is known, optionally add a canonical link and `og:url` to the HTML head using that exact URL.

## Gallery photographs

All 10 supplied photographs are included in `assets/gallery/`, numbered `job-01.jpg` through `job-10.jpg` in the order provided. They are copied unchanged from the supplied JPEGs, with descriptive captions and alternative text. Their full portrait composition is preserved; selecting a photo opens the full image. Browser Back returns to the gallery.

The gallery uses lazy loading and explicit image dimensions to limit initial loading and layout shifts. The supplied images are approximately 90–250 KB each. The hero remains decorative stock photography and is not presented as a job photograph.

To add, remove or reorder photos, edit `gallery-data.js`. See [ADMIN.md](ADMIN.md) for step-by-step GitHub instructions and administrator permissions. The gallery requires JavaScript, and also works when index.html is opened directly. No HTML edits or backend are needed. GitHub access has not yet been configured; no repository is connected.
## Contact links and content

Phone: `tel:+27680415825`. Email: `mailto:katuruzabrian35@gmail.com`. Both WhatsApp buttons use `https://wa.me/27680415825` with an encoded free-quotation request. They open a draft; visitors decide whether to send it. No contact form or personal data storage is included.

The website includes no invented reviews, years of experience, qualifications, insurance, certifications, guarantees or emergency availability. Update the contact details consistently if they change. The navigation stays usable if JavaScript is disabled.

## Image credit and licence

Hero: **Darren Bockman**, “Sunlight Through The Trees”, via Unsplash.

- Source: https://unsplash.com/photos/green-leaf-trees-illuminated-by-suns-rays-pN3Z2usSIQw
- Licence: https://unsplash.com/license (free commercial use; attribution appreciated)
- Downloaded from: https://images.unsplash.com/photo-1452990457935-b5638f0c013b?auto=format&fit=crop&w=1920&q=80

The image is stored locally to avoid third-party image requests on page loads. System fonts avoid font downloads. No analytics, tracking scripts or external libraries are used.

## Pre-publication check

- Review at phone, tablet and desktop widths, and at 200% zoom.
- Use Tab to check visible focus, the skip link, mobile menu, section links and contact links. Escape closes an open mobile menu.
- Verify the phone and email destinations on a suitable device, and inspect the WhatsApp quotation draft without sending a test message.
- Check business details and any newly added photos before publishing.


