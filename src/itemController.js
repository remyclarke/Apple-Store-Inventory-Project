const inform = console.log;

function create(items, itemName, priceInCents, inStock) {
  const item = { name: itemName, priceInCents, inStock };
  items.push(item);
  inform('Item successfully added to inventory');
  return items;
}

function index(items) {
  return items.map((item, index) => `${index + 1}. ${item.name} - $${item.priceInCents / 100}`).join('\n');
}

function show(items, itemId) {
  const item = items[itemId - 1];
  if (item) {
    return `${item.name} - $${item.priceInCents / 100} - In stock: ${item.inStock}`;
  } else {
    inform('Item not found.');
    return items;
  }
}

function destroy(items, itemId) {
  if (items[itemId - 1]) {
    items.splice(itemId - 1, 1);
    inform('Item successfully removed from inventory');
    return items;
  } else {
    inform('Item not found. No action taken');
    return items;
  }
}

function update(items, itemId, updatedItem) {
  if (items[itemId - 1]) {
    items[itemId - 1] = updatedItem;
    inform('Item successfully updated');
    return items;
  } else {
    inform('Item not found. No action taken');
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