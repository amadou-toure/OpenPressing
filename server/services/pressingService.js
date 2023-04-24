const queries=require('../queries/Pressing')
const pool = require('../database');

const getPressings= (req,res)=>{
    pool.query(queries.getAllPressing,(error,results)=>{
        if (error){
            console.log(error)
        }else{
            res.json(results.rows)
        }
    })
}

const getOnePressing = (req,res)=>{
    pool.query(queries.getOnePressing,[req.params.id],(error,results)=>{
        if (error) throw error
        res.json(results.rows)
    })
}

const createPressing=(req,res)=>{
    pool.query(queries.createPressing,[req.body.id_enseigne,req.body.localisation,req.body.contact],(error,results)=>{ 
         if (error){
        res.json(error).status(400)
        console.log(error)

    }else{
        res.status(201)

    }
    })
   
}
const createEnseigne=(req,res)=>{
    pool.query(queries.createEnseigne,[req.body.id_proprietaire,req.body.nom_enseigne,req.body.logo],(error,results)=>{
         if (error){
        res.json(error).status(400)
        console.log(error)

    }else{
        res.status(201)

    }
    })
   
}
const getEnseigne=(req,res)=>{
    pool.query(queries.getEnseigne,[req.params.id],(error,results)=>{
        if (error) throw error
        res.json(results.rows)
    })
}

module.exports={
    getOnePressing,getPressings,createPressing,createEnseigne,getEnseigne
}