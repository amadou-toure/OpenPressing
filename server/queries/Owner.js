
const findOneOwner = 'SELECT  * from responsable_pressing where "id_responsable" = $1';
const saveOwner = 'insert into responsable_pressing("nom_responsable","prenom_responsable","date_naissance_responsable","numero_telephone_responsable","adresse_email_responsable","mot_de_passe_responsable","photo_profil") values ($1,$2,$3,$4,$5,$6,$7)';
const findOwners = 'SELECT * FROM responsable_pressing';
const deleteOwner = 'delete from responsable_pressing where "id_responsable" = $1';
const logIn = 'select * from responsable_pressing where  "adresse_email_responsable" = $1';
const saveEmployee = 'insert into employee ("id_pressing","adresse_email_employee","mot_de_passe_employee") values($1,$2,$3)'

module.exports = {
    findOneOwner,saveOwner,findOwners,deleteOwner,logIn,saveEmployee
}