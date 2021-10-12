const mapCustom = (func, arr) => {
    let newArr = [];
    for(let i = 0, size = arr.length; i < size; i++) {
        const newItem = func(arr[i], i, arr);
        newArr.push(newItem);
    }
    return newArr;
};
module.exports = mapCustom;
