getAllPressing='SELECT * FROM pressing;';
getOnePressing= 'SELECT * From pressing WHERE "id_pressing" = $1 '
module.exports={
    getAllPressing,getOnePressing
}