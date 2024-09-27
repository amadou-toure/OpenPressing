import { useEffect } from "react"
import envFile from "./envFile"

export default function getEnseigne (setEnseigne)
{
  const handleResult = (result) =>
  {
    setEnseigne(result[0])
  }
  if (typeof window !== 'undefined')
  {
    
      fetch(envFile.serverURL+'/pressing/enseigne/'+localStorage.getItem('userId'),
      {
        method: 'GET',
        headers: {
            'Authorization':localStorage.getItem('token')
        },
    })
    .then(response=> response ? response.json(): console.log('echec de chargement des enseignes'))
    .then( (result) => handleResult(result))
    .catch(error=>console.log(error))
  }
}