import auth from "./Authentification";

export default function getUser(baseUrl)
{
    const [data,setData] = useState()
    const handleResult=(result)=>{
        setData(result)
        localStorage.setItem('profile',{result})
        
    }
    if(typeof window !== 'undefined')
    {
        const url = baseUrl+localStorage.getItem('userId')
        const config = 
        {
            method: 'GET',
            headers: 
            {
                'Authorization':localStorage.getItem('token')
            }  
        };

        useEffect( ()=> 
        {

            fetch(url,config)
            .then(response => response? response.status===(401) ? Router.push('./login') : response.json():console.log('erreur'))
            .then (result => handleResult(result[0]))
        },)   
    }
    return data;
}
    
       
        
