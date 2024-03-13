import { common } from './helpers/common';
import { instruments } from './helpers/exemples';
import { createMarkupHome } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { findProduct } from './helpers/findProduct';
import { isInStorage } from './helpers/isInStorage';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createMarkupHome(instruments, list);
list.addEventListener('click', onClick);

function onClick(e) {
  e.preventDefault();

  if (e.target.classList.contains('js-info')) {
    const product = findProduct(e.target);
    createModal(product);
  }

  if (e.target.classList.contains('js-favorite')) {
    const product = findProduct(e.target);

    isInStorage(favoriteArr, product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }

  if (e.target.classList.contains('js-basket')) {
    const product = findProduct(e.target);

    isInStorage(basketArr, product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }
}
