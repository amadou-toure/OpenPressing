import NavBar from '../components/NavBar'
import { useState,useEffect } from 'react'
import cookie from './api/cookieSplitter'
const Client = ()=>{
    const [data,setData] = useState()
    const handleResult=(result)=>{
        setData(result)
        
    }
    if(typeof window !== 'undefined')
    {
        console.log(localStorage.getItem('token'))
        const url = "http://localhost:3001/clients/"+localStorage.getItem('userId')
        const config = {
        method: 'GET',
        headers: {
            'Authorization':localStorage.getItem('token')
        }
        };
        useEffect(()=> {
            fetch(url,config)
            .then(response=> response ? response.json():console.log('erreur'))
            .then (result => handleResult(result))
            }, [])
            console.log(data)
    }
    
       
    
   

   
    return(
        <>
            <NavBar isLoggedIn={true} />
        </>
    )

}
export default Client