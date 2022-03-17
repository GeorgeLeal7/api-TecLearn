/*
    Objetivo: 
    Autores: George Leal e Richard Matheus
    Data de alteração: 17/03/2022
*/

//require('dotenv') = é o tipo de arquivo.
//config({path:'variaveis.env'}) = é o caminho do arquivo.
require('dotenv').config({path:'variaveis.env'});
const express = require('express');

//O cors permite trabalhar com API's
//Nos da acesso a recursos de outro sites mesmo em dominios diferentes
const cors = require('cors');

//o body-parser é capas de converter um body ou requisição em vários formatos
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

//listen(process.env.PORT) = serve para ler o arquivo .env
// PORT é a variavel no arquivo .env
server.listen(process.env.PORT, ()=>{
    console.log('Servidor rodando em: http://localhost:${process.env.PORT}');
}) 