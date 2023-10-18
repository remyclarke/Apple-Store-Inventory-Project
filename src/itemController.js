const chalk = require('chalk');

const inform = console.log;


function create(items, itemName, priceInCents, inStock, category) {
    const nextId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const item = { id: nextId, name: itemName, priceInCents, inStock, category };
    items.push(item);
    inform(chalk.green('Item successfully added to inventory'));
    return items;
  }
  
function index(items) {
  return items.map((item, index) => `${index + 1}. ${item.name} - $${item.priceInCents / 100}`).join('\n');
}

function show(items, itemId) {
  const item = items.find(item => item.id === parseInt(itemId));
  if (item) {
    return `${item.name} - $${item.priceInCents / 100} - In stock: ${item.inStock}`;
  } else {
    inform(chalk.red('Item not found.'));
    return items;
  }
}

function destroy(items, itemId) {
  const index = items.findIndex(item => item.id === parseInt(itemId));
  if (index !== -1) {
    items.splice(index, 1);
    inform(chalk.green('Item successfully removed from inventory'));
    return items;
  } else {
    inform(chalk.red('Item not found. No action taken'));
    return items;
  }
}

function update(items, itemId, updatedItem) {
  const index = items.findIndex(item => item.id === parseInt(itemId));
  if (index !== -1) {
    items[index] = { ...items[index], ...updatedItem };
    inform(chalk.green('Item successfully updated'));
    return items;
  } else {
    inform(chalk.red('Item not found. No action taken'));
    return items;
  }
}

module.exports = {
  create,
  index,
  show,
  destroy,
  update
};