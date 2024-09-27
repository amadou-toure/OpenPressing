import { useEffect, useState } from "react"
import envFile from "./envFile"

  const savePressing=(pressing)=>{
    fetch(envFile.serverURL+"/pressing/",{
      method:'POST',
      headers:
      {
          'Authorization':localStorage.getItem('token'),
          'content-Type':'application/json'
      },
      body:JSON.stringify(pressing)
    })
      .then(res=> res.status===201? console.log('creeer avec succes') : console.log(`echec d'ajout de pressing`))
      .catch(error=>console.log(error))
  }
  const getPressing=(setPressingList)=>{
    const handleResult = (result) =>
  {
    setPressingList(result)
  }
  if(typeof window !== 'undefined')
  {
    localStorage.getItem('token')
    localStorage.getItem('userId')
    useEffect(()=> 
    {
      fetch(envFile.serverURL+'/pressing/',
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
const getYourPressings=(setPressings)=>{
  const handleResult = (result) =>
  {
    setPressings(result)
  }
  if(typeof window !== 'undefined')
  {
    
      fetch(envFile.serverURL+'/pressing/'+localStorage.getItem('userId'),
      {
        method: 'GET',
        headers: {
            'Authorization':localStorage.getItem('token')
        },
    })
    .then(response=> response ? response.json(): console.log('echec de chargement des pressings'))
    .then( (result) => handleResult(result))
    .catch(error=>console.log(error))

   
  } 
}
const getOneEmployee= async(setUser)=>{
  const handleResult = (result) =>
  {
    setUser(result)
  }
  if(typeof window !== 'undefined')
  {
   
      await fetch(envFile.serverURL+'/pressing/employee/'+localStorage.getItem('userId'),
      {
        method: 'POST',
        headers: {
            'Authorization':localStorage.getItem('token')
        },
    })
    .then(response=> response ? response.json(): console.log('echec de chargement de employee'))
    .then((result) => handleResult(result))
    .catch(error=>console.log(error))
   
     

   
  } 
}
export default 
{getPressing,savePressing,getYourPressings,getOneEmployee}