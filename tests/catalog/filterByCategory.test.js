const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const productIds = products.map((product) => product.id);
    expect(filterByCategory(productIds, 'all')).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const productIds = products.map((product) => product.id);
    expect(filterByCategory(productIds, undefined)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]', () => {
    const productIds = products.map((product) => product.id);
    expect(filterByCategory(productIds, '')).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const product = filterByCategory(products, 'electronics');
    const productIds = product.map((product) => product.id);
    expect(filterByCategory(productIds)).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const product = filterByCategory(products, 'books');
    const productIds = product.map((product) => product.id);
    expect(filterByCategory(productIds)).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const product = filterByCategory(products, 'home');
    const productIds = product.map((product) => product.id);
    expect(filterByCategory(productIds)).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const product = filterByCategory(products, 'clothes');
    const productIds = product.map((product) => product.id);
    expect(filterByCategory(productIds)).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const product = filterByCategory(products, 'toys');
    const productIds = product.map((product) => product.id);
    expect(filterByCategory(productIds)).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const product = filterByCategory(products, 'sports');
    const productIds = product.map((product) => product.id);
    expect(filterByCategory(productIds)).toEqual([]);
  });
});
