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

const updateStatus=(req,res)=>{
    pool.query(queries.updateStatus,[req.body.status,req.params.id],(error)=>{
        if (error){
            res.json({message:'error'})
            console.log(error)
        }else{
            res.json({message:'success'})
            console.log("ok")
        }
    })
}

const updateValider = (req,res)=>{
    pool.query(queries.updateValider,[req.body.valider,req.body.id_employee,req.params.id],(error)=>{
        if (error){
            res.json({message:'error'})
            console.log(error)
        }else{
            res.json({message:'success'})
            console.log("ok")
        }
    })
}

const setcommande=(req,res)=>{
    pool.query(queries.setcommande,[req.body.nombre_linge,req.body.detail,req.params.id],(error)=>{
        if (error){
            res.json({message:'error'})
            console.log(error)
        }else{
            res.json({message:'success'})
            console.log("ok")
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
    saveOrder,getPressingOrder,getYourOrder,setinfoDepot,updateStatus,updateValider,setcommande
}