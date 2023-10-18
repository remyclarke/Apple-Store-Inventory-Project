# Apple Store Inventory Project

## Introduction

Welcome to the Apple Store Inventory Project! This is a command-line application that allows you to manage an inventory of Apple products. You can perform various CRUD (Create, Read, Update, Delete) operations on items, and even manage a cart.

## Features

- **List all items**: View all the Apple products in the inventory.
- **Add a new item**: Create a new item and add it to the inventory.
- **View an item**: See detailed information about a specific item.
- **Update an item**: Modify the details of an existing item.
- **Delete an item**: Remove an item from the inventory.
- **Add to Cart**: Add an item to your cart.
- **Remove from Cart**: Remove an item from your cart.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/remyclarke/Apple-Store-Inventory-Project
    ```
2. Navigate to the project directory:
    ```bash
    cd Apple-Store-Inventory-Project
    ```
3. Install the required packages:
    ```bash
    npm install
    ```

## How to Use

### List all items

To list all the items in the inventory, run:


npm run index -- index
```bash


# To list all items
npm run index -- index
```bash


# To create a new item
npm run index -- create "Item Name"
```bash

# To show details of an item by ID or name
npm run index -- show "Item ID or Name"
```bash

# To delete an item by ID or name
npm run index -- destroy "Item ID or Name"
```bash

# To update an item by ID or name
npm run index -- update "Item ID or Name" "New Item Name"
```bash

# To add an item to the cart by ID or name
npm run index -- add-to-cart "Item ID or Name" "Quantity"
```bash

# To remove an item from the cart by ID or name
npm run index -- remove-from-cart "Item ID or Name"
```bash