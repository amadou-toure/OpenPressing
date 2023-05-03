const saveCommande=(commande,setResult)=>{
     if (commande != null) {
        fetch("http://localhost:3001/order", {
            method: 'POST',
            headers:
            {
                'Authorization': localStorage.getItem('token'),
                'content-Type': 'application/json'
            },
            body: JSON.stringify(commande)
        })
            .then(res => res.status === 201 ? setResult('success') : setResult('error'))
            .catch(error => console.log(error))
    }

}
const getCommande=()=>{}
export default {saveCommande,getCommande}