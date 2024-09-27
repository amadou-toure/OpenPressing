const queries=require('../queries/Pressing')
const employeeQueries = require('../queries/employee')
const pool = require('../database');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getPressings= (req,res)=>{
    pool.query(queries.getAllPressing,(error,results)=>{
        if (error){
            console.log(error)
        }else{
            res.json(results.rows)
        }
    })
}
const getOneEmployee=(req,res)=>{
    pool.query(employeeQueries.getOneEmployee,[req.params.id],(error,results)=>{
        if (error) throw error
        console.log (req.params.id)     
          res.json(results.rows[0])
    })
}
const login =(req,res)=>{
    console.log(req.body)
    pool.query(employeeQueries.logIn,[req.body.adresse_email],(error,results)=>{
        console.log(results.rows)
        if (!results.rows) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
        }
        bCrypt.compare(req.body.mot_de_passe, results.rows[0].mot_de_passe_employee)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                }
                res.status(200).json({
                   
                    userId: results.rows[0].id_employee,
                    token: jwt.sign(
                        { userId: results.rows[0].id_employee },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                });
            })
            .catch(error => res.status(500).json({ erreur:error }));
    })
}
const getProprietairePressings=(req,res)=>{
    
    pool.query(queries.getProprietairePressings,[req.params.id],(error,results)=>{
        if (error) throw error
        console.log (req.params.id)     
          res.json(results.rows)
    })
}

const getOnePressing = (req,res)=>{
    pool.query(queries.getOnePressing,[req.params.id],(error,results)=>{
        if (error) throw error
        res.json(results.rows)
    })
}

const createPressing=(req,res)=>{
    try{
         pool.query(queries.createPressing,[req.body.id_enseigne,req.body.localisation,req.body.contact],(error,results)=>{ 
         if (error){
        res.json(error).status(400)
        console.log(error)

    }else{
        res.status(201).json({succes:"pressing enregister!"})

    }
    })
    }catch(error){
        res.json(error).status(401)
    }
   
   
}
const createEnseigne=(req,res)=>{
    pool.query(queries.createEnseigne,[req.body.id_proprietaire,req.body.nom_enseigne,req.body.logo],(error,results)=>{
         if (error){
        res.json(error).status(400)
        console.log(error)

    }else{
        res.status(201).json({succes:"enseigne enregistrer avec succes"})

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
    getOnePressing,getPressings,createPressing,createEnseigne,getEnseigne,getOneEmployee,getProprietairePressings,login
}