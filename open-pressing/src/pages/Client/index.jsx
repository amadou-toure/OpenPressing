import NavBar from '../../layouts/header/NavBar'
import { useState,useEffect } from 'react'
import { Redirect } from 'next/dist/lib/load-custom-routes'
import Router from 'next/router'
import cookie from '../api/cookieSplitter'
import PressingCard from '../../components/PressingCard'
import { Container} from '@mui/system'
import { Grid } from '@mui/material'
import Pressing from '../api/PressingApi'
import Style from '../../styles/Client.module.css'
const  Client = ()=>{
    const [data,setData] = useState()
    const [pressings,setPressings] = useState([])
    const handleResult=(result)=>{
        setData(result)
        
    }
    if(typeof window !== 'undefined')
    {
        const url = "http://localhost:3100/clients/"+localStorage.getItem('userId')
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
       
        

    return(
        <>
           <Container className={Style.PressingContainer}>
           {Pressing().map((pressings) => 
                (
                    <Grid container spacing={5}>
                        <PressingCard tarification='pas encore' pressingImage={pressings.logo} pressingLocation={pressings.localisation} pressingName={pressings.enseigne} nomber_avis='0' note={pressings.note} />
                    </Grid>
                ))
            }
                
                
           </Container>
           
            
        </>
    )

}
export default Client