const chalk = require('chalk');

function addToCart(cart, itemId, quantity) {
  const cartItem = { itemId, quantity };
  cart.push(cartItem);
  console.log(chalk.green('Item successfully added to cart'));
  return cart;
}

function removeFromCart(cart, itemId) {
  const index = cart.findIndex(item => item.itemId === itemId);
  if (index > -1) {
    cart.splice(index, 1);
    console.log(chalk.green('Item successfully removed from cart'));
  } else {
    console.log(chalk.red('Item not found in cart'));
  }
  return cart;
}

module.exports = {
  addToCart,
  removeFromCart
};