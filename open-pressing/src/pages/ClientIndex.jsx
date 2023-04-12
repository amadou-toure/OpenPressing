import PressingCard from '../components/PressingCard';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import NavBar from '../components/NavBar'
import { useState } from 'react';
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
    
    fetch(url,config)
    .then(response=> response ? response.json():console.log('erreur'))
    .then (result => setClientData(result[0]))
    console.log(clientData)
    return(
        <> 
            <NavBar profile={clientData} />
            <Container>
                    <Grid container spacing={5}>
                        <PressingCard pressingLocation='2' pressingImage='https://th.bing.com/th/id/OIP.o8ZRDNFA9f4TdHi9pJaa1wAAAA?pid=ImgDet&rs=1' pressingName='American pressing' /> 
                    </Grid>
            </Container>
        </>
    )
}