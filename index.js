const express = require('express')
const app = express()
require('dotenv').config();

const bodyparser = require('body-parser');
const roteador = require('./rotas');
 

app.use(bodyparser.json())

app.use('/token', roteador);

app.listen(process.env.NODE_PORT || 3000 , ()=>{
    console.log(`Server running in ${process.env.NODE_PORT} `)
} ) ;
