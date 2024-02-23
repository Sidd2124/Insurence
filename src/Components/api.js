const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS for all routes
app.use(cors());
// Parse JSON bodies
app.use(bodyParser.json());

// Define your routes
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  // Extract data from request body
  const { name, price } = req.body;
  
  // Example logic: add the new product to the products array
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  
  // Respond with a success message and the newly added product
  res.status(201).json({ message: 'Product added successfully', product: newProduct });
});

// Start the server
const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
