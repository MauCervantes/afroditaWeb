const { pool } = require('../db/db');


const listProduct = async (req,res)=>{
    prod = {};
    try{
        await pool.getConnection();
        prod = await pool.query('SELECT * from producto');
        res.json(prod);
    }catch(error){
        res.send(error);
    }
};

const idProduct = async (req,res)=>{
    const id = req.params.id;
    prod = {};
    try{
        await pool.getConnection();
        prod = await pool.query('SELECT * from producto where id_producto = ' + id);
        res.json(prod);
    }catch(error){
        res.send(error);
    }
};

const newProduct = async (req,res)=>{
    const { id_proveedor, nombre, precio, descripcion, uso, tipo, existencia } = req.body;
    prod = {};
    try{
        await pool.getConnection();
        prod = await pool.query('INSERT INTO producto VALUES (null, ?, ?, ?, ?, ?, ?, ?) RETURNING *', [
            id_proveedor, 
            nombre, 
            precio, 
            descripcion, 
            uso, 
            tipo, 
            existencia]
        );
        res.json(prod);
    }catch(error){
        res.send(error);
    };
};

const updateProduct = async (req,res)=>{
    const id = req.params.id;
    const {id_proveedor, nombre, precio, descripcion, uso, tipo, existencia } = req.body;
    try{
        await pool.getConnection();
        await pool.query('UPDATE producto SET id_proveedor = ?, nombre = ?, precio = ?, descripcion = ?, uso = ?, tipo = ?, existencia = ? WHERE id_producto = ?',
        [
            id_proveedor, 
            nombre, 
            precio, 
            descripcion, 
            uso, 
            tipo, 
            existencia,
            id
        ]
        );
        res.json(true);
    }catch(error){
        res.send(error);
    };
};

const deleteProduct = async(req,res)=>{
    // console.log('Eliminando Producto');
    const id = req.params.id;
    try{
        await pool.getConnection();
        await pool.query('DELETE FROM producto WHERE id_producto = ?',
        [
            id
        ]);
        res.json(true);
    }catch(error){
        res.send(error);
    };
};

module.exports = {
    listProduct, 
    idProduct, 
    newProduct,
    updateProduct,
    deleteProduct
};
