export default function(pressing){
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
        .then(data =>console.log(data))
        .catch(error=>console.log(error))
}
