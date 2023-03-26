const bCrypt = require('bcrypt');
const queries = require('../queries/Client');
const pool = require('../database');
const jwt = require('jsonwebtoken');

const getclients= (req,res)=>{
    pool.query(queries.findClients,(error,results)=>{
        if (error){
            console.log(error)
        }else{
            res.json(results.rows)
        }
    })
}

const getOneClient = (req,res)=>{
    pool.query(queries.findOneClient,[req.body.id],(error,results)=>{
        if (error){
            console.log(error)
        }else{
            res.json(results.rows)
        }
    })
}

const signUpClient = (req,res)=>{
   bCrypt.hash(req.body.mot_de_passe,10,(error,hash)=>{
        pool.query(queries.saveClient,[req.body.nom,req.body.prenom,req.body.date_de_naissance,req.body.numero_telephone,req.body.adresse_email,hash,req.body.photo_profil],(error,results)=>{
            if (error) throw error
            res.status(200).json({message:'client '+req.body.nom+' ajouter avec succes'});
            console.log(req.body.nom)
        })
   })
}

const logInClient = (req,res)=>{
    pool.query(queries.logIn,[req.body.adresse_email],(error,results)=>{
        if (!results.rows) {
            return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
        }
        console.log(results.rows)
        bCrypt.compare(req.body.mot_de_passe, results.rows[0].mot_de_passe_client)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                }
                res.status(200).json({
                    result:results.rows
                    // userId: results.rows[0].id_client,
                    // token: jwt.sign(
                    //     { userId: results.rows[0].id_client },
                    //     'RANDOM_TOKEN_SECRET',
                    //     { expiresIn: '24h' }
                    // )
                });
            })
            .catch(error => res.status(500).json({ error }));
    })

}

const deleteClient = (req,res)=>{
    pool.query(queries.deleteClient,[req.params.id],(error,results)=>{
        if (error)
        throw error
        
        res.status(200).json({message:'deleted successfully'})
    })
}

module.exports={
    getOneClient,getclients,signUpClient,deleteClient,logInClient
}