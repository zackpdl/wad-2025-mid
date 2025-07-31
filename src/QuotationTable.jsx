/*
TODO remove bootstrap and replace with MUI.
*/

import { 
  Container, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Typography,
  Box,
  IconButton
} from "@mui/material";
import { ShoppingCart, Clear, Delete } from "@mui/icons-material";

function QuotationTable({ data, deleteByIndex, clearAllItems }) {

  // Guard condition
  if (!data || data.length === 0) {
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Quotation
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <ShoppingCart />
          <Typography>No items</Typography>
        </Box>
      </Container>
    );
  }

  const total = data.reduce((acc, v) => acc + (v.qty * v.ppu - v.discount), 0);
  const totalDiscount = data.reduce((acc, v) => acc + v.discount, 0);

  const handleDelete = (index) => {
    deleteByIndex(index);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4">
          Quotation
        </Typography>
        <Button 
          variant="outlined" 
          startIcon={<Clear />}
          onClick={clearAllItems}
        >
          Clear
        </Button>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">Qty</TableCell>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Price/Unit</TableCell>
              <TableCell align="center">Discount</TableCell>
              <TableCell align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((v, i) => {
              let amount = v.qty * v.ppu - v.discount;
              return (
                <TableRow key={i}>
                  <TableCell align="center">
                    <IconButton 
                      color="error" 
                      size="small"
                      onClick={() => handleDelete(i)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">{v.qty}</TableCell>
                  <TableCell>{v.item}</TableCell>
                  <TableCell align="center">{v.ppu}</TableCell>
                  <TableCell align="center">{v.discount}</TableCell>
                  <TableCell align="right">{amount}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} align="right">
                <Typography variant="subtitle1" fontWeight="bold">
                  Total Discount
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1" fontWeight="bold">
                  {totalDiscount}
                </Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4} align="right">
                <Typography variant="h6" fontWeight="bold">
                  Total
                </Typography>
              </TableCell>
              <TableCell></TableCell>
              <TableCell align="right">
                <Typography variant="h6" fontWeight="bold">
                  {total}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default QuotationTable;
