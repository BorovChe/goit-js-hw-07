import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const newListImg = galleryItems.map((img) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
   </a>
</li>`;
});

const galleryListEl = document.querySelector(".gallery");
const newListImgLine = newListImg.join("");
galleryListEl.insertAdjacentHTML("beforeend", newListImgLine);

galleryListEl.addEventListener("click", openModalImg);

function openModalImg(even) {
  even.preventDefault();
};

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionSelector: "img",
  captionsData: "alt",
});
