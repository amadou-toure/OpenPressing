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
        const url = "http://localhost:3001/clients/"+id
        const config = {
        method: 'GET',
        headers: {
            'Authorization':token
        }
        };
        useEffect(()=> {
            fetch(url,config)
            .then(response=> response ? console.log(response.json()):console.log('erreur'))
            .then (result => handleResult(result))
            }, [])
            console.log(data)
    
   

   
    return(
        <>
            <NavBar />
        </>
    )

}
export default Client