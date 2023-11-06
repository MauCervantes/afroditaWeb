const { pool } = require('../db/db');

const newProvider = async (req, res) => {
    const { name, enterprise, contact} = req.body;
    prov = {};
    try{
        await pool.getConnection();
        prov = await pool.query('INSERT INTO provider VALUES (null, ?, ?, ?) RETURNING *', 
        [
            name, 
            enterprise,
            contact
        ]
        );
        res.json(prov);
    }catch(error){
        res.send(error);
    };
};

const listProvider = async (req,res)=>{
    prov = {};
    try{
        await pool.getConnection();
        prov = await pool.query('SELECT * from provider');
        res.json(prov);
    }catch(error){
        res.send(error);
    };
};

module.exports = {
    newProvider,
    listProvider
};
