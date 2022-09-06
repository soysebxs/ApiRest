const express = require("express")
const productRoutes = express.Router();
const fs = require('fs');

const dataPath = './Details/products.json' 

// Funciones de utilidad
const saveProductData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getProductData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)    
}

module.exports = productRoutes