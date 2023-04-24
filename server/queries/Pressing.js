
getAllPressing='SELECT * FROM pressing;';
getOnePressing= 'SELECT * From pressing WHERE "id_pressing" = $1 ';
createPressing='insert into pressing("id_enseigne","localisation","contact") values ($1,$2,$3)';
createEnseigne='insert into enseigne("id_proprietaire","nom_enseigne","logo") values($1,$2,$3)';
getEnseigne='select * from Enseigne where "id_proprietaire"=$1'
module.exports={
    getAllPressing,getOnePressing,createPressing, createEnseigne,getEnseigne
}