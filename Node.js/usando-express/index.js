const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/saiba-mais.html")

})

app.get("/blog", function(req, res){
    res.send("Bem vindo a minha pagina de blog")
})

app.get("/ola/:nome/:cargo/:idade", function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<p> voce tem " + req.params.idade + " anos</p> " + "<p>Sua profissão é " + req.params.cargo + "</p>")
})// funçâo send só pode ser chamada uma unica vez

app.listen(8081, function(){
console.log("Servidor Rodando!") // deve ser a ultima linha do meu código
})