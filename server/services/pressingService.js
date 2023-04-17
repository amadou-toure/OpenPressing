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
    console.log('nothing for the moment')
}

module.exports={
    getOnePressing,getPressings
}