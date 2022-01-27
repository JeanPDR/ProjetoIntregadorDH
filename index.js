const { request, response } = require("express");
const express = require ("express");

const app = express();

const usuario = {
    nome: "Jean",
    sobrenome: "Reis",
    idade: "23",
    altura: "1.68",
    id: "001"
};

app.post('/usuario', (request,response) => {
    response.json({usuario})
});

app.get('/usuarios', (request, response)=> {
    response.json({usuarios: []})
});
app.get('/produtos', (request, response)=> {
    response.json({produtos: []})
});



app.listen(3000, () => {
    console.log("Servidor Iniciado")
})