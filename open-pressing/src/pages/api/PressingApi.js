import { useEffect, useState } from "react"

  const savePressing=(pressing)=>{
    fetch("http://localhost:3001/pressing/",{
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
const getYourPressings=(setPressings)=>{
  const handleResult = (result) =>
  {
    setPressings(result)
  }
  if(typeof window !== 'undefined')
  {
    
      fetch('http://localhost:3001/pressing/'+localStorage.getItem('userId'),
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
export default 
{getPressing,savePressing,getYourPressings}