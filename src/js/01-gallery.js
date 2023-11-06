// Add imports above this line

import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector('.gallery');

const makeGallery = pictureInfo => { 
    const { preview, original, description } = pictureInfo;
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </li>
         `;
}
const arrayGallery = galleryItems.map(pictureInfo => {
    return makeGallery(pictureInfo);
});

galleryList.insertAdjacentHTML('beforeend', arrayGallery.join(''));

console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });
