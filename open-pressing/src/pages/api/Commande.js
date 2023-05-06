import { useEffect } from "react"
import envFile from "./envFile"
const saveCommande = (commande, setResult) => {
    if (commande != null) {
        fetch(envFile.serverURL + "/order", {
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
const getPressingCommande = async (setCommande, idPressing) => {
    const handleResult = (result) => {
        setCommande(result)
    }
    console.log(idPressing)
    if (typeof window !== 'undefined') {
        
       await fetch(envFile.serverURL +'/order/'+ idPressing,
            {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('token')
                },
            })
            .then(response => response ? response.json() : console.log('echec de chargement des commandes'))
            .then((result) => handleResult(result))
            .catch(error => console.log(error))


    }
}
const updateClientCommande = (body, id, setResult) => {
    const handleResult = (result) => {
        setResult(result)
    }
    fetch(envFile.serverURL + "/order/Client/" + id, {
        method: 'PUT',
        headers:
        {
            'Authorization': localStorage.getItem('token'),
            'content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(res => res.status === 204 ? handleResult('success') : handleResult('error'))
        .catch(error => console.log(error))

}

const getClientCommande = (setCommande) => {
    const handleResult = (result) => {
        setCommande(result)
    }
    if (typeof window !== 'undefined') {

        fetch(envFile.serverURL + '/order/Client/' + localStorage.getItem("userId"),
            {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.getItem('token')
                },
            })
            .then(response => response ? response.json() : console.log('echec de chargement des commandes'))
            .then((result) => handleResult(result))
            .catch(error => console.log(error))


    }
}
const updateStatus = (body, id, setResult) => {
    const handleResult = (result) => {
        setResult(result)
    }
    fetch(envFile.serverURL + "/order/status/" + id, {
        method: 'PUT',
        headers:
        {
            'Authorization': localStorage.getItem('token'),
            'content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response ? handleResult(response.json().message) : console.log('erreur:status'))
        .catch(error => console.log(error))

}
const updateVerifier = (body, id, setResult) => {
    const handleResult = (result) => {
        setResult(result)
    }
    fetch(envFile.serverURL + "/order/valider/" + id, {
        method: 'PUT',
        headers:
        {
            'Authorization': localStorage.getItem('token'),
            'content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response ? handleResult(response.json().message) : console.log('erreur:status'))
        .catch(error => console.log(error))

}
const setCommande = (body, id, setResult) => {
    const handleResult = (result) => {
        setResult(result)
    }
    fetch(envFile.serverURL + "/order/info/" + id, {
        method: 'PUT',
        headers:
        {
            'Authorization': localStorage.getItem('token'),
            'content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response ? handleResult(response.json().message) : console.log('erreur:status'))
        .catch(error => console.log(error))

}
export default { saveCommande, getPressingCommande, getClientCommande,updateVerifier, updateClientCommande, updateStatus,setCommande }