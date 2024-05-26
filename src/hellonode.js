/*
    HelloWorld
    Estando dentro do diretório do projeto:
        npm init -y
        npm install express
        npm install express -g
        npm link express
        npm list [-g]
*/


//Hello World 1:
const express = require ('express');
//aqui declaramos uma variável que contem o módulo express, que estamos pegando na pasta node_modules
var app = express();
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});
app.get('/teste', function (req, res) {
    res.send('<h1>Hello World - teste</h1>');
});

app.get('/teste/:variavel/:variavel2?', function (req, res) {
    var var1 = req.params.variavel;
    var var2 = req.params.variavel2;
    var variav = "";
    var indefinido = req.query["nome"];
    if(var2){
        variav = var1 +" "+ var2;
    }else{
        variav = var1;
    }
    if(indefinido){
        variav = variav +" "+ indefinido;
    }
    res.send("<h3>Hello World - teste</h3>"+variav);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
// listen inicia um servidor, e colocamos ele para escutar a porta 3000. Ele responde com "Hello World!"

/*
//Hello World 2:
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
*/
/*
var calcula = require("./calculadora.js")

console.log(calcula.soma(4,9))
console.log(calcula.mult(4,2))
*/