import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend",createGalleryItems(galleryItems));

// galleryEl.addEventListener("click", imageClickGalleryHendler);

function createGalleryItems(arr) {
    return arr.map(({preview, original,description})=>{

        return `<li class="gallery__item" >
                    <a href="${original}" class="gallery__link">
                        <img 
                        class="gallery__image" 
                        src="${preview}" 
                        data-original="${original}" 
                        alt="${description}" 
                        width=300>
                    </a>
                </li>`;} ).join("");
}

let lightbox = new SimpleLightbox('.gallery a');