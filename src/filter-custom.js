const filterCustom = (func, arr) => {
    let i = 0;
    return filter([], arr, func, 0);

}

filter(returnArr, arr, argFunc, index){
    const newItem = argFunc(arr[i], i, arr);
    returnArr.push(newItem || []);
    filter(returnArr, arr, argFunc, i ++);
}

module.exports = filterCustom;
