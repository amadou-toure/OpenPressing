import { useEffect } from "react"

export default function getEnseigne (setEnseigne)
{
  const handleResult = (result) =>
  {
    setEnseigne(result)
  }
  if (typeof window !== 'undefined')
  {
    
      fetch('http://localhost:3001/pressing/enseigne/',
      {
        method: 'GET',
    })
    .then(response=> response ? response.json(): console.log('echec de chargement des enseignes'))
    .then( (result) => handleResult(result))
    .catch(error=>console.log(error))
  }
}