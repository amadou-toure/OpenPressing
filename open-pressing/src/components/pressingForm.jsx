import {
    Grid,
    Stack,
    TextField,
    Button,
  } from "@mui/material";
  import BaseCard from "./baseCard/BaseCard";
  import SavePressing from "@/pages/api/SavePressing";
  import getEnseigne from "@/pages/api/getEnseigne";
  import * as React from 'react'

  const PressingForm = () => {
    const [enseigne,setEnseigne]=React.useState({})
    getEnseigne(setEnseigne);
    const handleSubmit=(event)=>
    {
      event.preventDefault()
      const data = new FormData(event.currentTarget);
      if (enseigne!=='undefined'){
        const newPressing=({
        id_enseigne: enseigne.id_proprietaire,
        localisation:data.get('localisation'),
        contact:data.get('contact'),
        })
        SavePressing(newPressing);
        console.log(newPressing);
      }
      /*je met en commentaire ici pour ne pas oublier. plus tard, la page de creation des 
      enseignes sera visible uniquement si le proprietaire n'as pas d'enseigne en base de donnee
      apres connexion, au niveau de la gestion des pressings, son enseigne est display
      en haut dans une card, si il n'en a pas, un message s'affichera a cet endroit et l'invitant a 
      creeer une enseigne, il sera rediriger sur la page en question */
    }
  
    return (
      <Grid container spacing={0} component='form' onSubmit={handleSubmit}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Ajouter un pressing">
            <Stack spacing={3}>
              <TextField
                id="localisation"
                label="localisation"
                variant="outlined"
                name="localisation"
              />
              <TextField id="contact" label="contact" variant="outlined" name="contact" />
              
            </Stack>
            <br />
            <Button variant="contained" mt={2} type='submit'>
              Enregistrer
            </Button>
          </BaseCard>
        </Grid>
  
        {/* <Grid item xs={12} lg={12}>
          <BaseCard title="Form Design Type">
            <Stack spacing={3} direction="row">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Stack>
          </BaseCard>
        </Grid> */}
      </Grid>
    );
  };
  
  export default PressingForm;
  