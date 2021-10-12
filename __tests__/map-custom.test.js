const mapCustom = require('../src/map-custom');

let arr;
beforeAll(() => {
    arr = [1, 2, 3];
})
test.each([
    {
        input: 10,
        output: [10, 10, 10]
    },
    {
        input: true,
        output: [true, true, true]
    },
    {
        input: false,
        output: [false, false, false],
    },
    {
        input: '',
        output: ['', '', ''],
    },
    {
        input: 'hello',
        output: ['hello', 'hello', 'hello']
    },
    {
        input: null,
        output: [null, null, null]
    },
    {
        input: undefined,
        output: [undefined, undefined, undefined]
    },
    {
        input: [],
        output: [[], [], []]
    },
    {
        input: {},
        output: [{}, {}, {}]
    },
    {
        input: [1],
        output: [[1], [1], [1]]
    },
    {
        input: {name: 'a'},
        output: [{name: 'a'}, {name: 'a'}, {name: 'a'}]
    }
])('test with no argument with $input ', ({input, output})  => {
    const func = () => input;
    const result = mapCustom(func, arr);
    const resultMap = arr.map(func);
    // test length
    expect(result.length).toBe(arr.length);
    expect(resultMap.length).toBe(arr.length);
    // test value
    expect(result).toEqual(expect.arrayContaining(output));
    expect(resultMap).toEqual(expect.arrayContaining(output));
    // test array original should not change
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3]));
});

test ('test with one argument is value', () => {
    const func = item => item * 2;
    const result = mapCustom(func, arr);
    const resultMap = arr.map(func);
    // test length
    expect(result.length).toBe(arr.length);
    expect(resultMap.length).toBe(arr.length);
    // test value
    expect(result).toEqual(expect.arrayContaining([2, 4, 6]));
    expect(resultMap).toEqual(expect.arrayContaining([2, 4, 6]));
    // test array original should not change
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3]));
});

test('test with two arguments is value and index', () => {
    const func = (item, index) => item + index * 2;
    const result = mapCustom(func, arr);
    const resultMap = arr.map(func);
    // test length
    expect(result.length).toBe(arr.length);
    expect(resultMap.length).toBe(arr.length);
    // test value
    expect(result).toEqual(expect.arrayContaining([1, 4, 7]));
    expect(resultMap).toEqual(expect.arrayContaining([1, 4, 7]));
    // test array original should not change
    expect(arr).toEqual(expect.arrayContaining([1, 2, 3]));
})

