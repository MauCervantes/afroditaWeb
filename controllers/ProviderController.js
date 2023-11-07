const { pool } = require('../db/db');

const newProvider = async (req, res) => {
    const { nombre, empresa, contacto} = req.body;
    prov = {};
    try{
        await pool.getConnection();
        prov = await pool.query('INSERT INTO proveedor VALUES (null, ?, ?, ?) RETURNING *', 
        [
            nombre, 
            empresa,
            contacto
        ]);
        res.json(prov);
    }catch(error){
        res.send(error);
    }
};

const listProvider = async (req,res)=>{
    prov = {};
    try{
        await pool.getConnection();
        prov = await pool.query('SELECT * from proveedor');
        res.json(prov);
    }catch(error){
        res.send(error);
    }
};

module.exports = {
    newProvider,
    listProvider
};