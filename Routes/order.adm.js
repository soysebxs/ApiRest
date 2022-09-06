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

// Lista todas las ordenes
orderRoutes.get('/admin/order', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });

module.exports = orderRoutes