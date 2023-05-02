saveOrder='INSERT INTO commande ("id_client","id_pressing","date_recuperation","lieu_recuperation") values($1,$2,$3,$4);'
getOrders='select * from commande;'

module.exports={saveOrder,getOrders}