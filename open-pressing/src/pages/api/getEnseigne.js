import { useEffect, useState } from "react"

export default function ()
{
  const[enseigne,setEnseigne] = useState({})
  const handleResult = (result) =>
  {
    setEnseigne(result)
    console.log(enseigne)
  }
  if(typeof window !== 'undefined')
  {
    localStorage.getItem('token')
    localStorage.getItem('userId')
    useEffect(()=> 
    {
      fetch('http://localhost:3001/pressing/enseigne/'+localStorage.getItem('userId'),
      {
        method: 'GET',
        headers: {
            'Authorization':localStorage.getItem('token')
        },
    })
    .then(response=> response ? response.json(): console.log('echec de chargement des enseignes'))
    .then( (result) => handleResult(result))
    .catch(error=>console.log(error))
    }, [])
  }
  return enseigne
}