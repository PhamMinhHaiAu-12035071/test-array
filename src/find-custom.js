const findCustom = (func, arr) => {
  // write code in here
  if (func == true && (arr.length - 1) > 0) {
    return (arr.length - 1);
  } else
    return findCustom(func, arr); // testchua lam xong
};

module.exports = findCustom;
