const queries = require('../queries/Order');
const pool = require('../database');


const saveOrder = (req,res)=>{
    pool.query(queries.saveOrder,[req.body.id_Client,req.body.id_pressing,req.body.date_recuperation,req.body.lieu_recuperation],(error,results)=>{
        if (error) throw error
        res.status(201).json({message:'commande effectuer'});
    })
}

module.exports={
    saveOrder
}