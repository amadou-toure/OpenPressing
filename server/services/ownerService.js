const bCrypt = require('bcrypt');
const queries = require('../queries/Owner');
const pool = require('../database');
const jwt = require('jsonwebtoken');

const getOwner= (req,res)=>{
    pool.query(queries.findOwners,(error,results)=>{
        if (error){
            console.log(error)
        }else{
            res.json(results.rows)
        }
    })
}

const getOneOwner = (req,res)=>{
    console.log(req.params.id)
    pool.query(queries.findOneOwner,[req.params.id],(error,results)=>{
        if (error) throw error
        res.json(results.rows)
        console.log(results.rows)
    })
}

const signUpOwner = (req,res)=>{
    console.log(req.body)
    bCrypt.hash(req.body.mot_de_passe,10,(error,hash)=>{
         pool.query(queries.saveOwner,[req.body.nom,req.body.prenom,req.body.date_de_naissance,req.body.numero_telephone,req.body.adresse_email,hash,req.body.photo_profil],(error,results)=>{
             if (error) throw error
             res.status(200).json({message:'Responsable '+req.body.nom+' ajouter avec succes'});
         })
    })
 }
 
 const logInOwner = (req,res)=>{
     pool.query(queries.logIn,[req.body.adresse_email],(error,results)=>{
         if (!results.rows) {
             return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
         }
         bCrypt.compare(req.body.mot_de_passe, results.rows[0].mot_de_passe_responsable)
             .then(valid => {
                 if (!valid) {
                     return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                 }
                 res.status(200).json({
                    userId: results.rows[0].id_responsable,
                    token: jwt.sign(
                        { userId: results.rows[0].id_responsable },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                     )
                 });
             })
             .catch(error => res.status(500).json({ error }));
     })
 
 }
 
 module.exports={
   signUpOwner,logInOwner,getOwner,getOneOwner
}