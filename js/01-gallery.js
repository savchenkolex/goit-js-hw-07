import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", imageClickGalleryHendler);

galleryEl.insertAdjacentHTML("beforeend",createGalleryItems(galleryItems));

document.addEventListener("keydown", keyCloseImgHandler);


let instance = {};

function createGalleryItems(arr) {
    return arr.map(({preview, original,description})=>{
        return `<li class="gallery__item" >
                    <a href="#" class="gallery__link">
                        <img 
                        class="gallery__image" 
                        src="${preview}" 
                        data-original="${original}" 
                        alt="${description}" 
                        width=300>
                    </a>
                </li>`;} ).join("");
}

function imageClickGalleryHendler (event) {
    const targetEl = event.target;
    if (!targetEl.classList.contains("gallery__image")) {
        return;
    }
    const title = targetEl.alt;
    const bigImgURL = targetEl.dataset.original;
    instance = basicLightbox.create(`
	<h2 class="gallery-title">${title}</h2>
	<img class="gallery__image" src="${bigImgURL}" alt="${title}" >
    `);

    instance.show();
    
}

function keyCloseImgHandler (event) {
    const isEscape = event.code === "Escape";
    
    if ( !isEscape) {
        return;
    }
    if (basicLightbox.visible()) {
        instance.close();
    }
   
}

