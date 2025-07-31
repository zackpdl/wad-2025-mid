/*
TODO remove bootstrap and replace with MUI.
*/

import { useState, useEffect } from "react";
import { 
  Container, 
  Grid, 
  Button, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Paper,
  Typography,
  Box
} from "@mui/material";
import QuotationTable from "./QuotationTable";
import sampleData from "./data.json";

const products = [
  { code: "p001", name: "Product A", price: 100 },
  { code: "p002", name: "Product B", price: 200 },
  { code: "p003", name: "Product C", price: 150 },
  { code: "p004", name: "Product D", price: 250 },
];

function App() {
  const [dataItems, setDataItems] = useState([]);
  const [ppu, setPpu] = useState(products[0].price);
  const [selectedProduct, setSelectedProduct] = useState(products[0].code);
  const [qty, setQty] = useState(1);
  const [discount, setDiscount] = useState(0);

  // Pre-fill with sample data on component mount
  useEffect(() => {
    setDataItems(sampleData.sampleItems);
  }, []);

  const addItem = () => {
    let item = products.find((v) => selectedProduct === v.code);

    const newItem = {
      item: item.name,
      ppu: parseFloat(ppu),
      qty: parseInt(qty),
      discount: parseFloat(discount) || 0,
    };

    // Check for redundant items (same name and price)
    const existingItemIndex = dataItems.findIndex(
      existing => existing.item === newItem.item && existing.ppu === newItem.ppu
    );

    if (existingItemIndex !== -1) {
      // Merge with existing item
      const updatedItems = [...dataItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        qty: updatedItems[existingItemIndex].qty + newItem.qty,
        discount: updatedItems[existingItemIndex].discount + newItem.discount
      };
      setDataItems(updatedItems);
    } else {
      // Add new item
      setDataItems([...dataItems, newItem]);
    }

    // Reset discount field
    setDiscount(0);
  };

  const deleteByIndex = (index) => {
    let newDataItems = [...dataItems];
    newDataItems.splice(index, 1);
    setDataItems(newDataItems);
  };

  const clearAllItems = () => {
    setDataItems([]);
  };

  const productChange = (event) => {
    const selectedCode = event.target.value;
    setSelectedProduct(selectedCode);
    let item = products.find((v) => selectedCode === v.code);
    setPpu(item.price);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, backgroundColor: "#f5f5f5" }}>
            <Typography variant="h6" gutterBottom>
              Add Item
            </Typography>
            
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Item</InputLabel>
              <Select
                value={selectedProduct}
                label="Item"
                onChange={productChange}
              >
                {products.map((p) => (
                  <MenuItem key={p.code} value={p.code}>
                    {p.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Price Per Unit"
              type="number"
              value={ppu}
              onChange={(e) => setPpu(parseFloat(e.target.value) || 0)}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Quantity"
              type="number"
              value={qty}
              onChange={(e) => setQty(parseInt(e.target.value) || 1)}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Discount"
              type="number"
              value={discount}
              onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
              placeholder="0"
              sx={{ mb: 2 }}
            />

            <Button 
              variant="contained" 
              fullWidth 
              onClick={addItem}
              sx={{ mb: 2 }}
            >
              Add
            </Button>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <QuotationTable
            data={dataItems}
            deleteByIndex={deleteByIndex}
            clearAllItems={clearAllItems}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
