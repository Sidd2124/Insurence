



const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(4500, () => {
    console.log("Server Started ");
});


app.get('/', (req, res) => {
    res.send([{ Name:"",ImageFile:"",InsurenceDocument:""}]);
});

app.post('/Post', (req, res) => {
    const requestData = req.body;

    console.log('Received data:', requestData);

    res.json({ message: 'Data received successfully!' });
});

