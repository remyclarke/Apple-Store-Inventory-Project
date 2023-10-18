const chalk = require('chalk');
const { readJSONFile, writeJSONFile } = require('./src/helpers');
const { create, index, show, destroy, update } = require('./src/itemController');
const { addToCart, removeFromCart } = require('./src/cartController');

const inform = console.log;

const items = readJSONFile('./data', 'items.json');
const cart = readJSONFile('./data', 'cart.json');

function run() {
  const action = process.argv[2];
  const idOrName = process.argv[3];
  const priceInCents = process.argv[4];
  const inStock = process.argv[5] === 'true';
  const category = process.argv[6];

  let writeToFile = false;
  let updatedData = [];
  let fileName = 'items.json'; // Default file to write to

  switch (action) {
    case 'index':
      inform(chalk.blue('Listing all items:'));
      inform(index(items));
      break;
    case 'create':
      updatedData = create(items, idOrName, priceInCents, inStock, category);
      inform(chalk.green('Item created.'));
      writeToFile = true;
      break;
    case 'show':
      inform(chalk.cyan(show(items, idOrName)));
      break;
    case 'destroy':
      updatedData = destroy(items, idOrName);
      inform(chalk.red('Item destroyed.'));
      writeToFile = true;
      break;
    case 'update':
      updatedData = update(items, idOrName, process.argv.slice(4));
      inform(chalk.yellow('Item updated.'));
      writeToFile = true;
      break;
    case 'add-to-cart':
      updatedData = addToCart(cart, idOrName, process.argv[4]);
      inform(chalk.magenta('Item added to cart.'));
      writeToFile = true;
      fileName = 'cart.json'; // This is for the CARTS file
      break;
    case 'remove-from-cart':
      updatedData = removeFromCart(cart, idOrName);
      inform(chalk.magenta('Item removed from cart.'));
      writeToFile = true;
      fileName = 'cart.json'; 
      break;
    default:
      inform(chalk.red('Invalid action'));
  }

  if (writeToFile) {
    writeJSONFile('./data', fileName, updatedData);
  }
}

run();