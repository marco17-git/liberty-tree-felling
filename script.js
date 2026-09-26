const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobileViewport = window.matchMedia('(max-width: 800px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.hidden = mobileViewport.matches && !open;
}

function syncMenu() {
  menuButton.hidden = !mobileViewport.matches;
  setMenu(false);
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && mobileViewport.matches) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileViewport.matches && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
mobileViewport.addEventListener('change', syncMenu);
syncMenu();
document.querySelector('#year').textContent = new Date().getFullYear();

// Content comes from the administrator-maintained gallery-data.js file.
// Publishing permissions are enforced by GitHub, not by this public script.
function renderGallery(photos) {
  const gallery = document.querySelector('#gallery-photos');
  const status = document.querySelector('#gallery-status');
  gallery.replaceChildren();
  status.hidden = true;
  if (!Array.isArray(photos)) {
    status.textContent = 'The gallery is temporarily unavailable. Please try again later.';
    status.hidden = false;
    return;
  }
  photos.forEach((photo) => {
    if (!photo || typeof photo.file !== 'string' ||
        !/^assets\/gallery\/[a-zA-Z0-9_-]+\.(jpe?g|png|webp|avif)$/i.test(photo.file) ||
        typeof photo.caption !== 'string' || !photo.caption.trim() ||
        typeof photo.alt !== 'string' || !photo.alt.trim()) return;
    const figure = document.createElement('figure');
    figure.className = 'gallery-item';
    const link = document.createElement('a');
    link.href = photo.file;
    link.setAttribute('aria-label', `View full photo: ${photo.caption}`);
    const image = document.createElement('img');
    image.src = photo.file;
    image.alt = photo.alt;
    image.width = Number.isInteger(photo.width) && photo.width > 0 ? photo.width : 960;
    image.height = Number.isInteger(photo.height) && photo.height > 0 ? photo.height : 1280;
    image.loading = 'lazy';
    image.decoding = 'async';
    const caption = document.createElement('figcaption');
    const label = document.createElement('span');
    label.textContent = photo.caption;
    const number = document.createElement('span');
    number.textContent = String(gallery.children.length + 1).padStart(2, '0');
    caption.append(label, number);
    link.append(image);
    figure.append(link, caption);
    gallery.append(figure);
  });
  if (!gallery.children.length) {
    status.textContent = photos.length ? 'The gallery is temporarily unavailable. Please try again later.' : 'New job photos will be added soon.';
    status.hidden = false;
  }
}

renderGallery(window.galleryPhotos);
