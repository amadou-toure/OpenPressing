import { React, useState } from "react"
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { StaticDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import saveCommande from '../pages/api/Commande.js';
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

const CommandeCard = (props) => {
    const [date, setDate] = useState()
    const [result, setResult] = useState(null)
    const [alert,setAlert]=useState(false)
    const handleSubmit = (event) => {

        event.preventDefault();
        const id = parseInt(localStorage.getItem('userId'));

        const data = new FormData(event.currentTarget);
        const newCommande = ({
            id_Client: id,
            id_pressing: props.props.id,
            date_recuperation: date,
            lieu_recuperation: data.get('lieu'),
        })
        saveCommande(newCommande, setResult);
        console.log(date);
        setAlert(true)


    }
    return (
        <>  
             {/* <Toast setOpen='true' severity='succes' title='commande effectuer' message='Vous serez bientot contacter pour confirmer le rendez vous !' /> */}
            {/* {result != null ? result ?
                <Toast setOpen={setAlert} severity='succes' title='commande effectuer' message='Vous serez bientot contacter pour confirmer le rendez vous !' />
                :
                <Toast setOpen={setAlert} severity='succes' title='Erreur' message=' Veuilliez reesayer !' />
                :
                <Toast setOpen={setAlert} severity='commande' title='Erreur' message='rempliseez tout les champs !' />
                    
            } */}
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
                    }}>{props.props.enseigne}</Typography>

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
            </Card>
        </>

    );
};

export default CommandeCard;
