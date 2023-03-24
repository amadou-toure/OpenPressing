const queries = require('../queries/Client');
const pool = require('../database');

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
    pool.query(queries.findOneClient,[req.body.adresse_email_client],(error,results)=>{
        if (error){
            console.log(error)
        }else{
            res.json(results.rows)
        }
    })
}

const addClient = (req,res)=>{
    pool.query(queries.saveClient,[req.body.nom,req.body.prenom,req.body.date_de_naissance,req.body.numero_telephone,req.body.adresse_email,req.body.mot_de_passe,req.body.photo_profil],(error,results)=>{
        if (error) throw error
        res.status(200).json({message:'client '+req.body.nom+' ajouter avec succes'});
    })
}

module.exports={
    getOneClient,getclients,addClient
}