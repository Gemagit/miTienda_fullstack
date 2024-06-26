require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');


const app = express();
const port = process.env.PORT || 5000;

const productsRouter = require('./routes/products.routes');
const fabricantesRouter= require('./routes/fabricantes.routes')
app.use(cors());

const loggerFormat = ':method :url :status :response-time ms - :res[content-length]'

app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));

app.use(express.json()); // Para habilitar recepción de datos JSON en una request

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/api",productsRouter);// API products
app.use("/api",fabricantesRouter);// API fabricantes

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})