const filterCustom = require('../src/filter-custom');

let arr;
beforeAll(() => {
    arr = [1, 2, 3];
})
test.each([
    {
        input: 10,
        output: [1, 2, 3],
    },
    {
        input: false,
        output: [],
    },
    {
        input: true,
        output: [1, 2, 3]
    },
    {
        input: 0,
        output: [],
    },
    {
        input: "",
        output: []
    },
    {
        input: "hello",
        output: [1, 2, 3]
    },
    {
        inout: [],
        output: [],
    },
    {
        input: {},
        output: [1, 2, 3],
    },
    {
        input: null,
        output: [],
    },
    {
        input: undefined,
        output: [],
    },
    {
        input: [1],
        output: [1, 2, 3],
    },
    {
        input: {name: "au"},
        output: [1, 2, 3]
    }
])('test with no argument with $input ', ({input, output})  => {
    const func = () => input;
    const result = filterCustom(func, arr);
    const resultFilter = arr.filter(func);
    // test value
    expect(result).toEqual(expect.arrayContaining(output));
    expect(resultFilter).toEqual(expect.arrayContaining(output));
    // test array original should not change
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3]));
});

test('test with one argument is value', () => {
    const func = item => item > 1;
    const result = filterCustom(func, arr);
    const resultFilter = arr.filter(func);

    expect(result).toEqual(expect.arrayContaining([2, 3]));
    expect(resultFilter).toEqual(expect.arrayContaining([2, 3]));
    // test array original should not change
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3]));
})

test('test with two arguments is value and index', () => {
    const func = (item, index) => item + index > 3;
    const result = filterCustom(func, arr);
    const resultFilter = arr.filter(func);

    expect(result).toEqual(expect.arrayContaining([3]));
    expect(result).toEqual(expect.arrayContaining([3]));
    // test array original should not change
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3]));
})

