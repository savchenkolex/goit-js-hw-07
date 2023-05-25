import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", imageClickGalleryHendler);
galleryEl.insertAdjacentHTML("beforeend",createGalleryItems(galleryItems));

let instance = {};

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

function imageClickGalleryHendler (event) {
    event.preventDefault();
    const targetEl = event.target;
    const isIMG = targetEl.nodeName === "IMG";

    if (!isIMG) {
             return;
    }
    const title = targetEl.alt;
    const bigImgURL = targetEl.dataset.original;
    instance = basicLightbox.create(`
	<h2 class="gallery-title">${title}</h2>
	<img class="gallery__image bigImg" src="${bigImgURL}" alt="${title}" >
    `,{
        onShow: addKeydownHandler,
        onClose: removeKeydownHandler,
        
    });

    instance.show();
}

function addKeydownHandler (){
    document.addEventListener("keydown", keyCloseImgHandler);
    document.addEventListener("click", keyCloseImgHandler);
}

function removeKeydownHandler(){
    document.removeEventListener("keydown", keyCloseImgHandler);
    document.removeEventListener("click", keyCloseImgHandler);
}

function keyCloseImgHandler (event) {
    const isEscape = event.code === "Escape";
    const isMousClick = event.type === "click" && event.target.classList.contains("bigImg");
    const isVisible = basicLightbox.visible();
    
   
    if (isMousClick) {
        instance.close();
    }

    if (!isEscape) {
        return;
    }
    if (isVisible ) {
        instance.close();
    }
}
