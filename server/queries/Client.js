
const findOneClient = 'SELECT  * from client where "id_client" = $1';
const saveClient = 'insert into client("nom_client","prenom_client","date_de_naissance","numero_telephone_client","adresse_email_client","mot_de_passe_client","photo_profil") values ($1,$2,$3,$4,$5,$6,$7)';
const findClients = 'SELECT * FROM client';
const deleteClient = 'delete from client where "id_client" = $1';
const logIn = 'select * from client where  "adresse_email_client" = $1';

module.exports = {
    findOneClient,saveClient,findClients,deleteClient,logIn
}