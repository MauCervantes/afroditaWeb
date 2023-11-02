const { Router } = require('express');
const router = Router();
const { km, kmp } = require('../controllers/dataset');
const { listProduct, idProduct, newProduct, updateProduct, deleteProduct } = require('../controllers/controller'); 

//APIS K-Means
router.get('/dataset/:id', km);
router.get('/datasetp/:id', kmp);

//Apis Inventario (Producto)
//GET para traer la lista de los productos
//http://localhost:3000/product
router.get('/product', listProduct);

//GETBYID trae un producto especifico de acuerdo al ID
//http://localhost:3000/product/1
router.get('/product/:id', idProduct);

//POST new product
//http://localhost:3000/product?Body
router.post('/product', newProduct);

//PUT update product
//http://localhost:3000/product?Body
router.put('/product/:id', updateProduct);

//DELETE delete product
//http://localhost:3000/product/id
router.delete('/product/:id', deleteProduct);


//------------------------------------------------------//
//Apis Inventario (Proveedor)

//new Proveedor

//update proveedor

//get proveedor list

//get proveedor id

//delete proveedor


//------------------------------------------------------//
//Apis Inventario (Empleado)

//new empleado

//update empleado

//get empleado id

//delete empleado

module.exports = router;