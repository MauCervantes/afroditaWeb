const { Router } = require('express');
const router = Router();
const { km, kmp } = require('../controllers/dataset');
const { listProduct, idProduct, newProduct, updateProduct, deleteProduct, existence } = require('../controllers/ProductController'); 
const { newProvider, listProvider, idProvider, updateProvider, deleteProvider } = require('../controllers/ProviderController'); 
const { newEmploye, updateEmploye, listEmploye, idEmploye, deleteEmploye } = require('../controllers/EmployeController'); 
const { newClient, listClient, idClient, deleteClient, updateClient} = require('../controllers/ClientController'); 

//*Esta no debe de existir. Solo es para pruebas
const { pool } = require('../db/db');

//?APIS K-Means
//?EndPoint se utilizan para el K-MEANS y Series de tiempo
//?Solo se podrán usar por el admin
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
router.put('/productExis/:id', existence);


//------------------------------------------------------//
//!Apis Inventario (Proveedor)
//new Provider
//http://localhost:3000/provider
router.post('/provider', newProvider);

//get provider list
//http://localhost:3000/provider
router.get('/provider', listProvider);

//get provider id
router.get('/provider/:id', idProvider);

//update provider
router.put('/provider/:id', updateProvider);

//delete provider
router.delete('/provider/:id', deleteProvider); 


//------------------------------------------------------//
//!Apis Inventario (Empleado)

//new employe
router.post('/employe', newEmploye);

//update employe
router.put('/employe/:id', updateEmploye); //!Error

//get employe id
router.get('/employe/:id', idEmploye );  

//get employe list
router.get('/employe', listEmploye );

//delete employe
router.delete('/employe/:id', deleteEmploye);


//!Apis inventario (Cliente)
//new client
router.post('/client', newClient);

//view client
router.get("/client", listClient);

//view client id
router.get("/client/:id", idClient);

//update client
router.put('/client/:id', updateClient);

//delete client
router.delete('/client/:id', deleteClient);

//!Apis inventario Admin
//new Admin

//update Admin

//view Admin    

//view Admin id

//delete Admin


module.exports = router;
