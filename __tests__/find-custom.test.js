const findCustom = require('../src/find-custom');

let arr;
beforeAll(() => {
    arr = [1, 2, 3];
})
test.each([
    {
        input: 10,
        output: 1,
    },
    {
        input: false,
        output: undefined,
    },
    {
        input: true,
        output: 1,
    },
    {
        input: 0,
        output: undefined
    },
    {
        input: "",
        output: undefined,
    },
    {
        input: "hello",
        output: 1,
    },
    {
        inout: [],
        output: undefined,
    },
    {
        input: {},
        output: 1,
    },
    {
        input: null,
        output: undefined,
    },
    {
        input: undefined,
        output: undefined,
    },
    {
        input: [1],
        output: 1,
    },
    {
        input: {name: "au"},
        output: 1,
    }
])('test with no argument with $input ', ({input, output})  => {
    const func = () => input;
    const result = findCustom(func, arr);
    const resultFind = arr.find(func);
    // test value
    expect(result).toBe(output);
    expect(resultFind).toBe(output);
    // test array original should not change
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3]));
});

test('test with one argument is value', () => {
    const func = item => item === 2;
    const result = findCustom(func, arr);
    const resultFind = arr.find(func);

    expect(result).toBe(2);
    expect(resultFind).toBe(2);
    // test array original should not change
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3]));
})

test('test with two arguments is value and index', () => {
    const func = (item, index) => item + index === 3;
    const result = findCustom(func, arr);
    const resultFind = arr.find(func);

    expect(result).toBe(2);
    expect(result).toBe(2);
    // test array original should not change
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3]));
})
