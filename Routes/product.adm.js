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

// Actualizar (Metodo Put)
productRoutes.put('/product/:sku', (req, res) => {
    var existProducts = getProductData()
    fs.readFile(dataPath, 'utf8', (err, data) => {
     const productSku = req.params['sku'];
     existProducts[productSku] = req.body;
 
     saveProductData(existProducts);
     res.send(`El producto de id (${productSku}) se actualizó correctamente`)
   }, true);
 });
 
   

module.exports = productRoutes