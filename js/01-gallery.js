import { galleryItems } from "./gallery-items.js";
// Change code below this line

const newListImg = galleryItems.map((img) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>`;
});

const galleryListEl = document.querySelector(".gallery");
const newListImgLine = newListImg.join("");
galleryListEl.insertAdjacentHTML("afterbegin", newListImgLine);

galleryListEl.addEventListener("click", openModalImg);

function openModalImg(even) {
  const originalImg = even.target.dataset.source;
  even.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600">
`);
  instance.show();
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      instance.close();
      return;
    }
  });
}
