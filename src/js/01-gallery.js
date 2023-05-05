import SimpleLightbox from 'simplelightbox';
console.log(SimpleLightbox);
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
console.log(galleryItems);
const galleryPictures = document.querySelector('.gallery');
galleryPictures.style.listStyle = 'none';

const newGallery = createPicturesMarkup(galleryItems);

galleryPictures.insertAdjacentHTML('beforeend', newGallery);

galleryPictures.addEventListener('click', onGalleryPictures);

console.log(galleryPictures);

let lightbox;

function createPicturesMarkup(picture) {
  return picture
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}"  >
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`;
    })
    .join(' ');
}

const lightboxEl = document.querySelector('.gallery__link');
console.log(lightboxEl);
function onGalleryPictures(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  lightbox = $('.gallery ').simpleLightbox({
    captionsData: 'alt',
    captionDelay: '250',
  });

  console.log(lightbox);
}
