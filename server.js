const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

app.get('/hello', (req, res) => {
    res.json({ 
        "message": "Hello from node js!", 
        "name": "dave", 
        "age": "22", 
        "height": "12" 
    });
});

app.get('/bye', (req, res) => {
    res.json({ "message": "Goodbye from node js!" });
});

const port = 3213;

app.listen(port);