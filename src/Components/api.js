const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies with a larger size limit
app.use(bodyParser.json({ limit: '50mb' }));

// Parse URL-encoded bodies with a larger size limit
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'Siddu',
  password: 'Sidd@2124',
  database: 'products'
});

// Define routes using router
const router = express.Router();

router.get('/api', (req, res) => {
  pool.query('SELECT * FROM data', (error, results, fields) => {
    if (error) {
      console.error('Error retrieving products:', error); // Enhance error logging
      return res.status(500).json({ error: 'Error retrieving products' });
    }
    res.json(results);
  });
});

router.post('/api', (req, res) => {
  const {
    id,
    Name,
    Number,
    ImageURL,
    InsuranceDate,
    InsuranceDocument,
    AdharDocumentFront,
    AdharDocumentBack,
    InsurenceNo,
    AavuFront,
    AavuBack,
    AavuRight,
    AavuLeft

    

    
  } = req.body;

  // Validate required fields
  if (!id || !Name || !Number) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const sql = 'INSERT INTO data (id, Name, Number, ImageURL, InsuranceDate, InsuranceDocument, AdharDocumentFront, AdharDocumentBack, InsurenceNo, AavuFront, AavuBack, AavuRight, AavuLeft) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [id, Name, Number, ImageURL, InsuranceDate, InsuranceDocument, AdharDocumentFront, AdharDocumentBack, InsurenceNo, AavuFront, AavuBack, AavuRight, AavuLeft];

  // Log the request body
  console.log('Request Body:', req.body);

  pool.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error('Error inserting product:', error); // Enhance error logging
      return res.status(500).json({ error: 'Error inserting product' });
    }
    console.log('Product added successfully');

    // Return the inserted data to the client
    res.status(201).json({ message: 'Product added successfully', product: req.body });
  });
});

// Mount the router on the app
app.use('/', router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const port = process.env.PORT || 3020;
app.listen(port, (error) => {
  if (error) {
    console.error('Error starting server:', error);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
