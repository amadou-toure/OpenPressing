saveOrder='INSERT INTO commande ("id_client","id_pressing","date_recuperation","lieu_recuperation") values($1,$2,$3,$4);'
getPressingOrders=`SELECT
commande.*,
client.nom_client as nom_client,
client.prenom_client as prenom_client,
client.numero_telephone_client as contact_client,
client.adresse_email_client as email_client,
pressing.localisation AS locaisation_pressing,
pressing.contact AS contact_pressing,
pressing.note AS note
FROM commande
JOIN pressing on commande.id_pressing=pressing.id_pressing join client on commande.id_client=client.id_client where pressing.id_pressing=$1`
getYourOrders=`SELECT
commande.nombre_linge,
commande.id_commande,
commande.detail,
commande.lieu_recuperation,
commande.date_recuperation,
commande.commande_validee_,
commande.status,
pressing.id_pressing,
pressing.id_enseigne,
pressing.localisation AS locaisation_pressing,
pressing.contact AS contact_pressing,
pressing.note AS note,
enseigne.nom_enseigne AS enseigne,
enseigne.logo As logo
FROM commande 
JOIN pressing on commande.id_pressing=pressing.id_pressing join enseigne on pressing.id_enseigne=enseigne.id_enseigne where commande.id_client=$1`;
updateLieuDepot=`UPDATE commande
SET lieu_depot = $1, date_livraison_souhaiter=$2
WHERE id_commande=$3;`
updateStatus=`UPDATE commande
SET status = $1
WHERE id_commande=$2;`
updateValider=`UPDATE commande
SET commande_validee_ = $1, id_employee =$2
WHERE id_commande=$3;`
setcommande=`UPDATE commande
SET nombre_linge = $1, detail= $2
WHERE id_commande=$3;`

module.exports={saveOrder,getPressingOrders,getYourOrders,updateLieuDepot,updateStatus,updateValider,setcommande}