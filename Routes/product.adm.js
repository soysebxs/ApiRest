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

   //Agregar nuevo producto
  productRoutes.post('/product/add', (req, res) => {
    var existProducts = getProductData()
    const newProductSku = Math.floor(100000 + Math.random() * 900000)
   
    existProducts[newProductSku] = req.body
     
    console.log(existProducts);

<<<<<<< HEAD
// Lista de un producto
productRoutes.get('/admin/product/:sku', (req, res) => {
    const {sku} = req.params;
     res.json({
       sku,
       name: 'Tenis Running',
       precio: 300000,
       url: '/images/tenis-running.jpg',
       marca: 'Nike',
       iva: 0.19,
       inventario: 1
     });
   });
=======
    saveProductData(existProducts);
    res.send({success: true, msg: 'Producto creado con exito'})
})
>>>>>>> postweb/insertarproducto
   


module.exports = productRoutes