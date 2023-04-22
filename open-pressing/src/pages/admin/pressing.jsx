import Forms from '../../components/forms'
import Tables from '@/components/table';
import NavBar from '../../components/NavBar'
import BaseCard from "../../components/baseCard/BaseCard";
import { useState } from 'react';
import Button from '@/components/buttons';

export default function pressing(){
    const [openForm,setOpenForm] = useState(false)
    const handleClick=()=>{
        openForm?setOpenForm(false):setOpenForm(true)
    }
    return(
        <>
            <Button value='Ajouter un Pressing' onClick={handleClick()}/>
            {openForm?<><Tables /><Forms /></>: <Tables />}
            
        </>
    )
    
}