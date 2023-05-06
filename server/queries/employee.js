logIn = `select * from employee where "adresse_email_employee" = $1;`
getOneEmployee= `select * from employee where "id_employee" = $1;`
updateProfil = `UPDATE employee
SET nom_employee = $1, prenom_employee=$2,date_naissance_employee=$3,numero_telephone_employee=$4,photo_profil=$5
WHERE id_employee=$6;`
module.exports={logIn,updateProfil,getOneEmployee}