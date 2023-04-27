import { useEffect, useState } from "react"

export default function PressingApi(setPressingList)
{
  const handleResult = (result) =>
  {
    setPressingList(result)
    console.log(pressingList)
  }
  if(typeof window !== 'undefined')
  {
    localStorage.getItem('token')
    localStorage.getItem('userId')
    useEffect(()=> 
    {
      fetch('http://localhost:3001/pressing/',
      {
        method: 'GET',
        headers: {
            'Authorization':localStorage.getItem('token')
        },
    })
    .then(response=> response ? response.json(): console.log('echec de chargement des pressings'))
    .then( (result) => handleResult(result))
    .catch(error=>console.log(error))
    },[])
  
        

   
  }
}