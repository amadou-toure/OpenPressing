const queries = require('../queries/Order');
const pool = require('../database');


const saveOrder = (req,res)=>{
    pool.query(queries.saveOrder,[req.body.id_Client,req.body.id_pressing,req.body.date_recuperation,req.body.lieu_recuperation],(error,results)=>{
        if (error) throw error
        res.status(201).json({message:'commande effectuer'});
    })
}

const getPressingOrder= (req,res)=>{
    pool.query(queries.getPressingOrders,[req.params.id],(error,results)=>{
        if (error){
            console.log(error)
        }else{
            res.json(results.rows)
        }
    })
}

const getYourOrder= (req,res)=>{
    pool.query(queries.getYourOrders,[req.params.id],(error,results)=>{
        if (error){
            console.log(error)
        }else{
            res.json(results.rows)
        }
    })
}

const setinfoDepot= (req,res)=>{
    pool.query(queries.updateLieuDepot,[req.body.lieu_depot,req.body.date_depot,req.params.id],(error)=>{
        if (error){
            console.log(error)
        }else{
            res.status(204)
            console.log("ok")
        }
    })
}

module.exports={
    saveOrder,getPressingOrder,getYourOrder,setinfoDepot
}