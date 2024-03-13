function isInStorage(arr, el) {
  const inStorage = arr.some(({ id }) => id === el.id);
  if (inStorage) {
    return;
  }
  arr.push(el);
}

export { isInStorage };
