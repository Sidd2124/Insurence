const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies with increased payload limit (e.g., 50MB)
app.use(bodyParser.json({ limit: '50mb' }));

const products = [
  {id:"",
    Name:"",
    Number:"",
    ImageURL:"",
    InsurenceDocument:"",
    InsurenceDate:"",
    AdharDocumentFront:"",
    AdharDocumentBack:"",
    InsurenceNo:"",
    AavuFront:"",
    AavuBack:"",
    AavuRight:"",
    AavuLeft:""
  },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const {id, Name, Number, ImageURL, InsurenceDocument, InsurenceDate, AdharDocumentFront, AdharDocumentBack, InsurenceNo, AavuFront, AavuBack, AavuRight, AavuLeft } = req.body;
  
  const newProduct = { id, Name, Number, ImageURL, InsurenceDocument, InsurenceDate, AdharDocumentFront, AdharDocumentBack, InsurenceNo, AavuFront, AavuBack, AavuRight, AavuLeft };
  products.push(newProduct);
  
  res.status(201).json({ message: 'Product added successfully', product: newProduct });
});

const PORT = 3004;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
