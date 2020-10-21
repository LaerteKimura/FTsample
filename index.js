const express = require('express')
const app = express()
require('dotenv').config();

const bodyparser = require('body-parser');
const roteador = require('./rotas');
 
app.use(bodyparser.urlencoded({ extended:true }));
app.use(bodyparser.json())

app.use('/token', roteador);

app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`Server running in ${process.env.PORT  } `)
} ) ;
