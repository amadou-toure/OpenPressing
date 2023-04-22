import NavBar from '../../components/NavBar'
import { useState,useEffect } from 'react'
import { Redirect } from 'next/dist/lib/load-custom-routes'
import Router from 'next/router'
import cookie from '../api/cookieSplitter'
import PressingCard from '../../components/PressingCard'
import { Container} from '@mui/system'
import { Grid } from '@mui/material'
import Pressing from '../api/PressingApi'
import Style from '../../styles/Client.module.css';
import getUser from '../api/getUser'
const  Client = ()=>{
    
    const [pressings,setPressings] = useState([])
    const user = getUser("http://localhost:3100/clients/")
    console.log(user)

    
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