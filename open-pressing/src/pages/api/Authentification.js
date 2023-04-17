import { useState } from "react"

export default function auth(authUrl,logindata){
  const handleToken=(result)=>{
    if(typeof window !== 'undefined')
    {
      localStorage.setItem('token',result.token)
      localStorage.setItem('userId', result.userId)
    }
  }
 
  fetch(authUrl,{
    method:'POST',
    headers:{
      'content-Type':'application/json'
    },
    body:JSON.stringify(logindata)
  })
    .then(response=> response ? response.json(): console.log('echec de connexion'))
    .then( (result) => handleToken(result) )
    .catch(error=>console.log(error))
    console.log(localStorage.getItem('token'))
}