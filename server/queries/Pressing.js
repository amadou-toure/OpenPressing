
getAllPressing=`SELECT
pressing.id_pressing AS id,
pressing.localisation AS localisation,
pressing.contact AS contact,
pressing.note AS note,
pressing."verifier?" AS actif,
enseigne.nom_enseigne AS enseigne,
enseigne.logo As logo
FROM pressing
JOIN enseigne ON pressing.id_enseigne=enseigne.id_enseigne`;
getOnePressing= 'SELECT * From pressing WHERE "id_pressing" = $1 ';
getProprietairePressings=`SELECT
pressing.*,
enseigne.id_proprietaire AS id_proprietaire 
FROM pressing
JOIN enseigne ON pressing.id_enseigne=enseigne.id_enseigne where id_proprietaire = $1 `;
createPressing='insert into pressing("id_enseigne","localisation","contact") values ($1,$2,$3)';
createEnseigne='insert into enseigne("id_proprietaire","nom_enseigne","logo") values($1,$2,$3)';
getEnseigne='select * from Enseigne where "id_proprietaire"=$1'
module.exports={
    getAllPressing,getOnePressing,createPressing, createEnseigne,getEnseigne,getProprietairePressings
}