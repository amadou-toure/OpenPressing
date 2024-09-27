
import { useEffect, useState } from "react";
import Commande from "../api/Commande";
import PressingApi from "../api/PressingApi";
import ProgressBar from '../../components/progressBar'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { StaticDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    TextField,
    Stack,
    Alert, AlertTitle,
    Button, CardContent, Grid
} from "@mui/material";
import { compareAsc } from "date-fns";
import BaseCard from "@/components/baseCard/BaseCard";
export default function () {
    const getCommande = Commande.getPressingCommande;
    const updateStatus = Commande.updateStatus;
    const getEmployee = PressingApi.getOneEmployee;
    const updateCommande = Commande.setCommande;
    const updateVerifier =Commande.updateVerifier
    const [result, setResult] = useState('');
    const [verifresult, setVerifResult] = useState('');
    const [date, setDate] = useState(null);
    const [commandes, setCommandes] = useState([])
    const [place, setPlace] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [defaultVal,setDefault]=useState('')
    const [id, setId] = useState('rien')
    const [user,setUser]=useState({})

    // const handleChange =(Commande)=>{
    //     setId(Commande.id_commande)
    //     setDefault(Commande.lieu_recuperation)
    //     openForm()
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // }
    const openForm =()=>{
        if (isOpen){
            setIsOpen(false)
        }else{
            setIsOpen(true)
        }
    }
    const handleSubmit = () => {
        // const data = new FormData(event.currentTarget);
        const newBody=({
            lieu_depot:place,
            date_depot:date,
            })
        console.log(newBody)
        updateCommande(newBody,id,setResult)  
        console.log(result)
    } 
    const setValid=(id)=>{
        updateVerifier({valider:true,id_employee:localStorage.getItem('userId')},id,setVerifResult)
        console.log(verifresult)
    }
    const dataLoading=()=>{
       
    useEffect(()=>{
        getEmployee(setUser) 
            if (user != {}){
            getCommande(setCommandes,user.id_pressing) 
          }
    })
           
    
       
        
    }
    dataLoading()
    

    
   
   
   
    


    return (
        <>
            {commandes != '' ? commandes.map((commande) => (
                <BaseCard title={"Commande numero " + commande.id_commande} >
                   
                    <Table
                        aria-label="simple table"
                        sx={{
                            mt: 3,
                            whiteSpace: "nowrap",
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        id_commande
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        client
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        contact
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        lieu de recuperation
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography color="textSecondary" variant="h6">
                                        date de recuperation
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography color="textSecondary" variant="h6">
                                        valider?
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {commande.id_commande}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {commande.nom_client + " " + commande.prenom_client}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        {commande.contact_client}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {commande.lieu_recuperation}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography align="right"
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {commande.date_recuperation}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    {commande.verifier ?
                                        <Chip
                                            sx={{
                                                pl: "4px",
                                                pr: "4px",
                                                backgroundColor: "success.main",
                                                color: "#fff",
                                            }}
                                            size="small"
                                            label="valider"
                                        ></Chip> :<Button onClick={()=>setValid(commande.id_commande)}><Chip
                                            sx={{
                                                pl: "4px",
                                                pr: "4px",
                                                backgroundColor: "error.main",
                                                color: "#fff",
                                            }}
                                            size="small"
                                            label="cliquer pour accepter la commande"
                                        ></Chip></Button>}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </BaseCard>
            )) : <h1> Aucune Commande</h1>}

        </>

    )

}