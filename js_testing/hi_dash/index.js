module.exports = {
  forEach(array, func) {
    // for (let i = 0; i < array.length; i++) {
    //   const value = array[i];
    //   func(value, i);
    // }
    for (let index in array) {
      func(array[index], index);
    }
  },
  
  map(array, func) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      result.push(func(array[i], i))
    }

    return result;
  }
};

