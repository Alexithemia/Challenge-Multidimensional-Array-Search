function locate(array, target) {
  let found = false;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      found = locate(array[i], target);
    }
    else {
      if (array[i] === target) {
        found = true;
      }
    }
  }
  return found;
}

module.exports = locate;
