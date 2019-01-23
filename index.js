function locate(array, target) {
  let found = false
  function deepSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'object') {
        deepSearch(array[i], target);
      }
      else {
        if (array[i] === target) {
          found = true;
        }
      }
    }
  }
  deepSearch(array, target);
  return found;
}

module.exports = locate;
