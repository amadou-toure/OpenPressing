import PressingCard from '../components/PressingCard';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import NavBar from '../layouts/header/NavBar'

import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';



export default function(){
  
   const idArray = document.cookie.split(' @ ')
   const id = idArray[1]
   const token = idArray[0]
   const url = "http://localhost:3001/clients/"+id
   const [clientData, setClientData]=useState()
  
    const config = {
        method: 'GET',
        headers: {
            'Authorization':token
        }
        };
    
        useEffect(()=> {
            fetch(url,config)
    .then(response=> response ? response.json():console.log('erreur'))
    .then (result => setClientData(result))
    console.log(clientData)
            }, [])
    
    return(
        <> 
            <NavBar  />
            <Container>
                    <Grid container spacing={5}>
                        <PressingCard pressingLocation='2' pressingImage='https://th.bing.com/th/id/OIP.o8ZRDNFA9f4TdHi9pJaa1wAAAA?pid=ImgDet&rs=1' pressingName='American pressing' /> 

                    </Grid>
            </Container>
        </>
    )
}