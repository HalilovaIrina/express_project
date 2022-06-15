import express from 'express'
import path from 'path'
import fs from "fs";

const __dirname=path.resolve()
const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.static(path.join(__dirname, "static")));

app.get("/", function(req, res){
    
         // response.send("<h1>Главная страницаfffff</h1>");
        res.sendFile(path.resolve(__dirname,'static','index.html'))
 });

 
app.listen(PORT,()=>{
    console.log(`Server has been started on port ${PORT}`)
})

// const express = require("express");
 
// const app = express();
// app.get("/", function(request, response){
     
//     response.send("<h1>Главная страница</h1>");
// });
// app.get("/about", function(request, response){
     
//     response.send("<h1>О сайте</h1>");
// });
// app.get("/contact", function(request, response){
     
//     response.send("<h1>Контакты</h1>");
// });
// app.listen(3000);