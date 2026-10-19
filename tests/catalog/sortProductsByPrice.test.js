const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const product = sortProductsByPrice(products, 'asc');
    const productIds = product.map((product) => product.id);
    expect(productIds).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const product = sortProductsByPrice(products);
    const productIds = product.map((product) => product.id);
    expect(productIds).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const product = sortProductsByPrice([products[0], products[2], products[3]], 'asc');
    const productIds = product.map((product) => product.id);
    expect(productIds).toEqual([3, 4, 1]);
  });

  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const product = sortProductsByPrice(products, 'desc');
    const productIds = product.map((product) => product.id);
    expect(productIds).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const product = sortProductsByPrice([products[2], products[0], products[3]], 'desc');
    const productIds = product.map((product) => product.id);
    expect(productIds).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const product = sortProductsByPrice([products[4], products[1], products[5]], 'desc');
    const productIds = product.map((product) => product.id);
    expect(productIds).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const originalProducts = [...products];
    sortProductsByPrice([products[0], products[2], products[3]], 'asc');
    expect(products).toEqual(originalProducts);
  });

  test("'desc' не меняет исходный массив [1,_3,_4]", () => {
    const originalProducts = [...products];
    sortProductsByPrice([products[0], products[2], products[3]], 'desc');
    expect(products).toEqual(originalProducts);
  });

  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const originalProducts = [...products];
    sortProductsByPrice(products);
    expect(products).toEqual(originalProducts);
  });
});
