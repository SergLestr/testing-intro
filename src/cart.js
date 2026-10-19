function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError('Quantity must be greater than zero');
  }

  const existingProduct = cart.find((item) => item.id === product.id);

  const totalQuantity = existingProduct ? existingProduct.quantity + quantity : quantity;

  if (totalQuantity > product.stock) {
    throw new RangeError('Not enough products in stock');
  }

  if (existingProduct) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: totalQuantity } : item
    );
  }

  return [...cart, { ...product, quantity }];
}

function changeQuantity(cart, productId, newQuantity) {
  if (newQuantity <= 0) {
    throw new RangeError('Quantity must be greater than zero');
  }

  const product = cart.find((item) => item.id === productId);

  if (!product) {
    return cart;
  }

  if (newQuantity > product.stock) {
    throw new RangeError('Not enough products in stock');
  }

  return cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item));
}

function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);

  const discount = promoCode === 'SAVE10' && subtotal >= 20000 ? Math.round(subtotal * 0.1) : 0;

  const delivery = subtotal >= 50000 ? 0 : 30000;

  const total = subtotal - discount + delivery;

  return {
    subtotal,
    discount,
    delivery,
    total,
  };
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
