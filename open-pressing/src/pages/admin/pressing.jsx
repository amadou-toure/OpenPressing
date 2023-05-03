import Forms from '../../components/pressingForm'
import EnseigneForm from '../../components/enseigneForm';
import Tables from '@/components/table';
import NavBar from '../../layouts/header/NavBar'
import BaseCard from "../../components/baseCard/BaseCard";
import { useEffect, useState } from 'react';
import { Button,Grid } from '@mui/material';
import Card from '@/components/Card';
import getEnseigne from '../api/getEnseigne';
import PressingApi from '../api/PressingApi';
import YourPressingData from '../../components/yourPressingData';

export default function pressing(){
    const [openForm,setOpenForm] = useState(false)
    const [buttonValue,setButtonValue]=useState('Ajouter un pressing')
    const [enseigne,setEnseigne] = useState({})
    const [pressings,setPressings] = useState([])
    const getPressings=PressingApi.getYourPressings
    useEffect(()=>{
         getEnseigne(setEnseigne)
         getPressings(setPressings)
    },[])

    const handleClick=()=>{
        if(openForm){
            setOpenForm(false)
            setButtonValue('Ajouter un pressing')
            getPressings(setPressings)
        }else{
            setOpenForm(true)
            setButtonValue('Fermer le formulaire')
        }
          
    }
    return(
        <>  
        <Grid sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center"
        }}>
 <Card enseigne={enseigne} sx={{with:'100%'}} />
            <YourPressingData pressing={pressings}/>
            <Button variant="contained" color="primary" onClick={handleClick}>
              {buttonValue}
            </Button>
            {openForm?<><Forms /></>: null}
        </Grid>
           
            
        </>
    )
    
}
