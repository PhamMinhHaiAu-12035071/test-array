const filterCustom = (func, arr) => {
    return filter([], arr, func, 0);
}

function filter(result, arr, argFunc, index) {
    argFunc(arr[index], index, arr) ? result.push(arr[index]) : result;
    index ++;
   return index === arr.length ? result : filter(result, arr, argFunc, index);
}

module.exports = filterCustom;
