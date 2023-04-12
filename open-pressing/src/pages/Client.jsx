import NavBar from '../components/NavBar'
import { useState,useEffect } from 'react'
const Client = ()=>{
    const [data,setData] = useState()
    const handleResult=(result)=>{
        setData(result)
        
    }
   
        const idArray = document.cookie.split(' @ ')
        const id = idArray[1]
        const token = idArray[0]
        console.log(id,token)
        const url = "http://localhost:3100/clients/"+id
        const config = {
        method: 'GET',
        headers: {
            'Authorization':token
        }
        };
        useEffect(()=> {
            fetch(url,config)
            .then(response=> response ? response.json():console.log('erreur'))
            .then (result => handleResult(result[0]))
            }, [])
            console.log(data)
    
   

   
    return(
        <>
            <NavBar isLoggedIn={true} profile={data.photo_profil} />
        </>
    )

}
export default Client