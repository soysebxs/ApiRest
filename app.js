const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');

// Crear app de express
const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
const routes = require('./Routes/Route')
app.use('/', routes)

//Arranque servidor
app.listen(3000, ()=>{
    console.log("Escuchando por el puerto :3000")
}) 