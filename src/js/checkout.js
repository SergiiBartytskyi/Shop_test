import { common } from '../common';
import { createMarkupBasket } from '../helpers/createMarkup';
import { createModal } from '../helpers/createModal';
import { findProduct } from '../helpers/findProduct';

const list = document.querySelector('.js-list');
console.log(list);
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createMarkupBasket(basket, list);
list.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();

  if (e.target.classList.contains('js-info')) {
    const product = findProduct(e.target);
    createModal(product);
  }

  if (e.target.classList.contains('js-favorite')) {
    const product = findProduct(e.target);

    const storage = JSON.parse(localStorage.getItem(common.KEY_FAVORITE));
    const updateStorage = storage.filter(({ id }) => id !== product.id);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(updateStorage));
    createMarkupFavorite(updateStorage, list);
  }

  if (e.target.classList.contains('js-basket')) {
    const product = findProduct(e.target);
    const storage = JSON.parse(localStorage.getItem(common.KEY_BASKET));
    const updateStorage = storage.filter(({ id }) => id !== product.id);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(updateStorage));
    createMarkupBasket(updateStorage, list);
  }
}
