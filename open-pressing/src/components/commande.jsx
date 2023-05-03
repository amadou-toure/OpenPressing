import { React, useState } from "react"
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { StaticDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Commande from '../pages/api/Commande.js';
import { Alert, AlertTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Toast from './Toast.jsx';

import {
    Card,
    CardContent,
    Stack,
    TextField,
    Button,
    Box,
    Typography,
} from "@mui/material";
import { Router } from "next/router.js";
const saveCommande = Commande.saveCommande;
const CommandeCard = (props) => {
    const [date, setDate] = useState()
    const [result, setResult] = useState(null)
    const [alert, setAlert] = useState(false)
    const handleSubmit = (event) => {

        event.preventDefault();
        const id = parseInt(localStorage.getItem('userId'));

        const data = new FormData(event.currentTarget);
        const newCommande = ({
            id_Client: id,
            id_pressing: props.pressing.id,
            date_recuperation: date,
            lieu_recuperation: data.get('lieu'),
        })
        saveCommande(newCommande, setResult);
        console.log(date);
        setAlert(true)


    }
    const handleClose = () => {
        props.setOpenCard(false)
    }
    return (
        <>

            {result === null ?
                <Card sx={{
                    width: '100%',
                    position: "relative",
                }} component='form' onSubmit={handleSubmit}>
                    <Box sx={{
                        width: '100%',
                        justifyContent: 'center'
                    }}
                        display="flex" alignItems="center">
                        <Typography variant="h4" sx={{
                            fontWeight: '600'
                        }}>{props.pressing.enseigne}</Typography>

                    </Box>
                    <CardContent>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <StaticDateTimePicker
                                ampm={false}
                                value={date}
                                onChange={(newValue) => setDate(newValue)}

                            />
                        </LocalizationProvider>
                        <Stack spacing={3}>
                            <Typography>entrer dans l'ordre les details du lieu de recuperation: quartier,infos supplementaires</Typography>
                            <TextField id="lieu" name="lieu" label="lieu de recuperation" variant="outlined" />
                        </Stack>
                    </CardContent>

                    <br />
                    <Button variant="contained" mt={2} type='submit'>
                        Enregistrer
                    </Button>
                </Card> : result === 'success' ?
                    <Alert sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: 'center'
                    }} onClose={handleClose} severity="success">
                        <AlertTitle>Commande effectuer</AlertTitle>
                        vous serez contacter pour la confirmation du rendez vous de collecte <br />
                        <br />
                        <strong>vous pouvez suivre l'evolution dans l'onglet "commandes"</strong>
                    </Alert> : <Alert onClose={handleClose} severity="error">
                        <AlertTitle>Une erreur s'est produite</AlertTitle>

                        <strong>veuilliez reessayer</strong>
                    </Alert>
            }

        </>

    );
};

export default CommandeCard;
