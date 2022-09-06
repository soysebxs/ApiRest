const express = require("express")
const orderRoutes = express.Router();
const fs = require('fs');

const dataPath = './Details/orders.json' 

// Funciones de utilidad
const saveOrderData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)    
}

module.exports = orderRoutes