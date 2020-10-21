const { json } = require('body-parser');
const { response } = require('express')

const roteador = require('express').Router()

roteador.use('/', (req, res)=>{
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Content-Type", "application/json");
    
    console.log(req.body)
    
    const {usuario, senha, email} = req.body;
    if (usuario =="ELLOSINTEGRA.FIN" && senha === "SENACGTI" && email =="" ){
        res.status(200).send(('{"codigo": 1,"mensagem": "sucesso","token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMyMDIsImdpZCI6WzEsMTQxLDUxMiwyMjFdLCJuYW1lIjoiRUxMT1MgIElOVEVHUkEgRklOIiwiZXhwIjo2MzczODkwOTc5NzU2NDUxMjEsImlhdCI6MH0.A9R_sIM_wQiRP7xjQO2GaG9Prte_ZBiOdRdyXCi98EU"}'))
    }
    else{
        res.status(200).send(`{
            "codigo": -1,
            "mensagem": "Usuário ou Senha inválida",
            "token": ""
        }`)
    }
})

module.exports = roteador;