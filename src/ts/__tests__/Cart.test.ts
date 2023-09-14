import Cart from '../service/Cart';

let cart: Cart;

beforeEach(() => {
  cart = new Cart();
  cart.add({ id: 1, name: 'item 1', price: 100 });
  cart.add({ id: 2, name: 'item 2', price: 200 });
  cart.add({ id: 3, name: 'item 3', price: 300 });
});

test('should calculate total cost correctly without discount', () => {
  const totalCost = cart.TotalCost;
  expect(totalCost).toEqual(600);
});

test('should calculate total cost correctly with discount by default', () => {
  const totalCostWithDiscount = cart.TotalCostWithDiscount();
  expect(totalCostWithDiscount).toEqual(600);
});

test('should calculate total cost correctly with discount', () => {
  const totalCostWithDiscount = cart.TotalCostWithDiscount(0.2);
  expect(totalCostWithDiscount).toEqual(480);
});

test('should remove item by id', () => {
  cart.removeById(2);
  expect(cart.items).toEqual([
      { id: 1, name: 'item 1', price: 100 },
      { id: 3, name: 'item 3', price: 300 }
  ]);
});

test('removeById should throw an error when collection is empty', () => {
  expect(() => cart.removeById(4)).toThrowError(new Error("invalid id"));
});
