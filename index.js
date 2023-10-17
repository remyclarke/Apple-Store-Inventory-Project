const chalk = require('chalk');
const { readJSONFile, writeJSONFile } = require('./src/helpers');
const { create, index, show, destroy, update } = require('./src/itemController');

/* Didn't add features yet for the cartController to work 
const { addToCart, removeFromCart } = require('./src/cartController');
*/ 


// create an alias called inform to store the console.log function
const inform = console.log;
inform('Testing');

// Read the items data from the JSON file
const items = readJSONFile('./data', 'items.json');
const cart = readJSONFile('./data', 'cart.json');

function run() {
    const action = process.argv[2];
    const idOrName = process.argv[3];
    
    // Debugging: Print the action to see what it is
    console.log(`Action received: ${action}`);
    
    let writeToFile = false;
    let updatedData = [];
  
    switch (action) {
      case 'index':
        inform(chalk.blue('Listing all items:'));
        inform(index(items));
        break;
      case 'create':
        updatedData = create(items, idOrName);
        writeToFile = true;
        break;
      case 'show':
        inform(show(items, idOrName));
        break;
      case 'destroy':
        updatedData = destroy(items, idOrName);
        writeToFile = true;
        break;
      case 'update':
        updatedData = update(items, idOrName, process.argv[4]);
        writeToFile = true;
        break;
      case 'add-to-cart':
        updatedData = addToCart(cart, idOrName, process.argv[4]);
        writeToFile = true;
        break;
      case 'remove-from-cart':
        updatedData = removeFromCart(cart, idOrName);
        writeToFile = true;
        break;
      default:
        inform(chalk.red('Invalid action'));
    }
  
    if (writeToFile) {
      writeJSONFile('./data', 'items.json', updatedData);
    }
  }
  

run();