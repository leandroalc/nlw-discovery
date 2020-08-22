const express = require('express');  //Chamar servidor
const server = express(); //configuração do servidor

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages');

//configurar nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
});

server
//receber dados do req.body
.use(express.urlencoded({ extended: true }))
//configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
//rotas do aplicativo
.get("/", pageLanding)// (req, res) => é um arrow function, um função curta.
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500) //liberando a porta 5500 do computador.