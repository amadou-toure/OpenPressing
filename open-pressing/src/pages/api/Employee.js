import envFile from "./envFile";
const saveEmploeyee=(newEmployee,setResult)=>{
    const handleResult=(result)=>{
        setResult(result)
        console.log(result)
    }
    fetch(envFile.serverURL+"/owners/employee",{
        method:'POST',
        headers:{
        'Authorization':localStorage.getItem('token'),
        'content-Type':'application/json'
        },
        body:JSON.stringify(newEmployee)
    }
    )
    .then(response=> response ? response.json(): console.log('echec'))
    .then((res) => handleResult(res.message))
    .catch(error=>console.log(error)
    ) 
   

}
//  res.status === 204 ? handleResult('success') :handleResult('error')
export default {
    saveEmploeyee
}