import { useEffect, useState } from "react"

export default function PressingApi(){
    const[pressingList,setPressingList] = useState()
    
      if(typeof window !== 'undefined')
      {
        localStorage.getItem('token')
        localStorage.getItem('userId')
       
      }
      useEffect(()=> {
        fetch('http://localhost:3100/pressing/',{
            method: 'GET',
            headers: {
                'Authorization':localStorage.getItem('token')
            },
            })
          .then(response=> response ? response.json(): console.log('echec de chargement des pressings'))
          .then( (result) => setPressingList(result))
          .catch(error=>console.log(error))
        
        }, [])
        if (pressingList != undefined){
            return pressingList
        }
        
  }