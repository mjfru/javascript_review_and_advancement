const debounce = (callbackFunction, delay = 1000) => {
  let timeOutId;
  return (...args) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      // Call the function and take all the arguments and pass them in seperately
      callbackFunction.apply(null, args);
    }, delay);
  };
};