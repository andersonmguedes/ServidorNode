//const http =require('http');

//http.createServer((req,res)=>{
  //  res.end('Helo Word!!!! Doug Funny');
//}).listen(3000)

//console.log('Servidor rodando em http://localhost:3000')


const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello World Express!');
});
 
app.listen(3000);

