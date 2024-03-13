import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { closeModal } from './closeModal';

function createModal(product) {
  const instance = basicLightbox.create(
    `
	<div class="js-modal">
        <img src="${product.img}" alt="${product.name}" width=300 />
        <h2>${product.name}</h2>
        <h3>${product.price} coint</h3>
        <p>"${product.description}</p>
        <div class="">
          <button class="js-favorite">Add to favorite</button>
          <button class="js-basket">Add to basket</button>
        </div>
      </div>
`,
    {
      handler: null,
      onShow(instance) {
        console.log(instance);
        this.handler = closeModal.bind(instance);
        console.log(this.handler);
        document.addEventListener('keydown', this.handler);
      },

      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

export { createModal };
