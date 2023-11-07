const { Router } = require('express');
const router = Router();
const { km, kmp } = require('../controllers/dataset');
const { listProduct, idProduct, newProduct, updateProduct, deleteProduct, existencia } = require('../controllers/ProductController'); 
const { newProvider, listProvider } = require('../controllers/ProviderController'); 
<<<<<<< HEAD

//*Esta no debe de existir. Solo es para pruebas
const { pool } = require('../db/db');

//?APIS K-Means
//?EndPoint se utilizan para el K-MEANS y Series de tiempo
//?Solo se podrán usar por el admin
=======
//Holiiiis
//Holiwiiis

const { pool } = require('../db/db');
//Hola
//APIS K-Means
>>>>>>> ed6cf98e5651b089c74b5944a558e102dc3f6736
router.get('/dataset/:id', km);
router.get('/datasetp/:id', kmp);


//!Apis Inventario (Producto)
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
//http://localhost:3000/product/id
router.put('/product/:id', updateProduct);

//DELETE delete product
//http://localhost:3000/product/id
router.delete('/product/:id', deleteProduct);

//Update existencia Product
//http://localhost:3000/productExis/ID
router.put('/productExis/:id', existencia);


//------------------------------------------------------//
//!Apis Inventario (Proveedor)
//new Provider
//http://localhost:3000/provider
router.post('/provider', newProvider);

//get provider list
//http://localhost:3000/provider
router.get('/provider', listProvider);

//get provider id

//update provider

//delete provider


//------------------------------------------------------//
//!Apis Inventario (Empleado)

//new employe

//update employe

//get employe id

//get employe

//delete employe


//!Apis inventario (Cliente)
//new client

//view client

//view client id

//update client

//delete client

//!Apis inventario Admin
//new Admin

//update Admin

//view Admin

//view Admin id

//delete Admin

module.exports = router;
