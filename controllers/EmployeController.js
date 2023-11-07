const { pool } = require('../db/db');

const newEmploye = async (req, res) => {
    const { name, middleName, lastName, cell, pass, rol} = req.body;
    emplo = {};
    try{
        await pool.getConnection();
        emplo = await pool.query('INSERT INTO employe VALUES (null, ?, ?, ?, ?, ?, ?) RETURNING *', 
        [
            name, 
            middleName,
            lastName, 
            cell,
            pass,
            rol
        ]
        );
        res.json(emplo);
    }catch(error){
        res.send(error);
    }
};

const updateEmploye = async (req,res)=>{
    const id = req.params.id;
    const {id_provider, name, price, description, uses, types, existence } = req.body;
    try{
        await pool.getConnection();
       emplo = await pool.query('UPDATE employe SET id_employe = ?, name = ?, middleName = ?, lastName = ?, cell = ?, pass = ?, rol = ? WHERE id_employe = ?',
        [
            id_employe, 
            name, 
            middleName,
            lastName,
            cell,
            pass,
            rol
        ]);
        res.json(emplo);
    }catch(error){
        res.send(error);
    }
} 

module.exports = {
    newEmploye,
    updateEmploye
};