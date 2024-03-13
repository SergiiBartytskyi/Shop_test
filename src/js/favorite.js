import { common } from '../helpers/common';
import { createMarkupFavorite } from '../helpers/createMarkup';
import { createModal } from '../helpers/createModal';
import { findProduct } from '../helpers/findProduct';
import { isInStorage } from '../helpers/isInStorage';

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createMarkupFavorite(favorite, list);
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

    isInStorage(basket, product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basket));
  }
}
