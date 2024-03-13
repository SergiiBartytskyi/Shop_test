function createMarkupHome(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) => `<li data-id="${id}" class="js-card">
        <img src="${img}" alt="${name}" width=300 />
        <h2>${name}</h2>
        <p ><a href="#" class="js-info">More information</a></p>
        <div>
          <button class="js-favorite">Add to favorite</button>
          <button class="js-basket">Add to basket</button>
        </div>
      </li>`
      )
      .join('');
  } else {
    markup = `
    <li>
        <img src="https://aesmide.es/wp-content/uploads/2021/03/Diseno-sin-titulo-24.jpg" alt="404" width=600 />
    </li>`;
  }
  list.innerHTML = markup;
}

function createMarkupFavorite(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) => `<li data-id="${id}" class="js-card">
        <img src="${img}" alt="${name}" width=300 />
        <h2>${name}</h2>
        <p ><a href="#" class="js-info">More information</a></p>
        <div>
          <button class="js-favorite">Remove from favorite</button>
          <button class="js-basket">Add to basket</button>
        </div>
      </li>`
      )
      .join('');
  } else {
    markup = `
    <li>
        <img src="https://aesmide.es/wp-content/uploads/2021/03/Diseno-sin-titulo-24.jpg" alt="404" width=600 />
    </li>`;
  }
  list.innerHTML = markup;
}

function createMarkupBasket(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name }) => `<li data-id="${id}" class="js-card">
        <img src="${img}" alt="${name}" width=300 />
        <h2>${name}</h2>
        <p ><a href="#" class="js-info">More information</a></p>
        <div>
          <button class="js-basket">Remove from basket</button>
        </div>
      </li>`
      )
      .join('');
  } else {
    markup = `
    <li>
        <img src="https://aesmide.es/wp-content/uploads/2021/03/Diseno-sin-titulo-24.jpg" alt="404" width=600 />
    </li>`;
  }
  list.innerHTML = markup;
}
export { createMarkupHome, createMarkupFavorite, createMarkupBasket };
