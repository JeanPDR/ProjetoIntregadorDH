const { request, response } = require("express");
const express = require ("express");

const app = express();

const usuario = {
    nome: "Jean",
    sobrenome: "Reis"
};

app.post('/usuarios', (request,response) => {
    console.log(request);

    
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