import Forms from '../../components/pressingForm'
import EnseigneForm from '../../components/enseigneForm';
import Tables from '@/components/table';
import NavBar from '../../components/NavBar'
import BaseCard from "../../components/baseCard/BaseCard";
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

export default function pressing(){
    const [openForm,setOpenForm] = useState(false)
    const [buttonValue,setButtonValue]=useState('Ajouter un pressing')
    const handleClick=()=>{
        if(openForm){
            setOpenForm(false)
            setButtonValue('Ajouter un pressing')
            
        }else{
            setOpenForm(true)
            setButtonValue('Fermer le formulaire')
        }
          
    }
    return(
        <>
            <Button variant="contained" color="primary" onClick={handleClick}>
              {buttonValue}
            </Button>
            {openForm?<><Forms /></>: <Tables />}
            
        </>
    )
    
}