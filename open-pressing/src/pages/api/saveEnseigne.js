export default function(enseigne){
    fetch("http://localhost:3001/pressing/enseigne/",{
        method:'POST',
        headers:
        {
            'Authorization':localStorage.getItem('token'),
            'content-Type':'application/json'
        },
        body:JSON.stringify(enseigne)
      })
        .then(res=> res.status===201? console.log('creeer avec succes') : console.log(`echec d'ajout de pressing`))
        .then(data =>console.log(data))
        .catch(error=>console.log(error))
}
