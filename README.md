# Quotation App

A React-based quotation application built with Material-UI (MUI) that allows users to create and manage quotations with discount functionality.

## Features

### ✅ Completed Requirements

1. **MUI Integration**: Replaced Bootstrap with Material-UI components
2. **Pre-fill Data**: App loads sample data from `src/data.json` on startup
3. **Clear Functionality**: "Clear" button deletes all items in the table
4. **Discount System**: 
   - Individual discount per item
   - Discount applies to the whole lot (not multiplied by quantity)
   - Example: Product A, 100 Baht/Item, Qty 10, Discount 50 = 100 × 10 - 50 = 950
5. **Discount Column**: Shows discount for each row
6. **Total Discount**: Displays sum of all discounts in table footer
7. **Item Merging**: When adding items with same name and price, quantities and discounts are merged
8. **React.js + MUI**: Built with React.js and Material-UI components

### Key Features

- **Add Items**: Select product, set quantity, price, and discount
- **Merge Redundant Items**: Same product name + same price = merged automatically
- **Delete Individual Items**: Click trash icon to remove specific items
- **Clear All Items**: Click "Clear" button to remove all items
- **Real-time Calculations**: Automatic calculation of amounts and totals
- **Responsive Design**: Works on desktop and mobile devices

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Usage

1. **Adding Items**: Select a product from the dropdown, set quantity, price, and discount
2. **Merging**: Adding the same product with same price will merge quantities and discounts
3. **Deleting**: Click the trash icon next to any item to remove it
4. **Clearing**: Click the "Clear" button to remove all items
5. **Viewing Totals**: The table shows individual amounts, total discount, and final total

## Data Structure

The app pre-fills with sample data from `src/data.json`:

```json
{
  "sampleItems": [
    {
      "item": "Product A",
      "ppu": 100,
      "qty": 5,
      "discount": 50
    }
  ]
}
```

## Technologies Used

- React.js
- Material-UI (MUI)
- Vite
- React Icons
