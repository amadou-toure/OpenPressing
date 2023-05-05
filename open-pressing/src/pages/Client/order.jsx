import { useEffect, useState } from "react";
import Commande from "../api/Commande";
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
    const getCommande = Commande.getClientCommande;
    const updateCommande = Commande.updateClientCommande;
    const [result, setResult] = useState('');
    const [date, setDate] = useState(null);
    const [commandes, setCommandes] = useState([])
    const [place, setPlace] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [defaultVal,setDefault]=useState('')
    const [id, setId] = useState('rien')

    const handleChange =(Commande)=>{
        setId(Commande.id_commande)
        setDefault(Commande.lieu_recuperation)
        openForm()
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
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
    useEffect(() => {
        getCommande(setCommandes)
    }, [])
    console.log(result)


    return (
        <>
             {isOpen?
                                <Grid component='form' >
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <StaticDateTimePicker
                                            ampm={false}
                                            value={date}
                                            onChange={(newValue) => setDate(newValue)}

                                        />
                                    </LocalizationProvider>
                                    <br />
                                    <Stack>
                                        <TextField id="lieu" label="Lieu" variant="outlined" name="lieu" defaultValue={defaultVal} onChange={()=>setPlace(event.target.value)} />
                                    </Stack>
                                    <br />
                                    <Button variant="contained" mt={2} onClick={handleSubmit}>
                                        Enregistrer
                                    </Button>
                                </Grid>:null}
            {commandes != '' ? commandes.map((commande) => (
                <BaseCard title={"Commande numero " + commande.id_commande} >
                    <ProgressBar value={commande.status * 20} />
                    {commande.status === 5 ?
                        <>
                            <br />
                            <Alert severity="info" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: "center"
                            }}>
                                <AlertTitle>Votre commande est prete</AlertTitle>

                                <Button onClick={()=>handleChange(commande)}><strong>veuilliez entrer le lieu de livraison desirer</strong></Button>
                                <br />
                            </Alert>
                        </> : null}
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
                                        pressing
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        emplacement
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
                                        {commande.enseigne}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {commande.locaisation_pressing}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="h6">
                                        {commande.contact_pressing}
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
                                        ></Chip> : <Chip
                                            sx={{
                                                pl: "4px",
                                                pr: "4px",
                                                backgroundColor: "error.main",
                                                color: "#fff",
                                            }}
                                            size="small"
                                            label="en Attente"
                                        ></Chip>}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </BaseCard>
            )) : <h1>rien</h1>}

        </>

    )

}