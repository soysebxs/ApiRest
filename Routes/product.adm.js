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

// Borrar (Metodo Delete)
productRoutes.delete('/product/delete/:sku', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
     var existProducts = getProductData()
 
     const productSku = req.params['sku'];
 
     delete existProducts[productSku];  
     saveProductData(existProducts);
     res.send(`El producto de SKU (${productSku}) ha sido eliminado`)
   }, true);
 })
 
   

module.exports = productRoutes