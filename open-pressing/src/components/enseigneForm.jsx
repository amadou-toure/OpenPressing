import {
    Grid,
    Stack,
    TextField,
    Button,
  } from "@mui/material";
  import BaseCard from "./baseCard/BaseCard";
  import saveEnseigne from "@/pages/api/saveEnseigne";

  const enseigneForm = () => {

    const handleSubmit=(event)=>{

        event.preventDefault();
        const id = localStorage.getItem('userId');
     
      const data = new FormData(event.currentTarget);
        const newEnseigne=({
        id_proprietaire: id,
        nom_enseigne:data.get('nom'),
        logo:data.get('logo'),
      })
      saveEnseigne(newEnseigne);
      console.log(newEnseigne);
   
      
    }
    return (
      <Grid container spacing={0} component='form' onSubmit={handleSubmit}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Nouvelle Enseigne">
            <Stack spacing={3}>
              <TextField
              required
                id="nom"
                name="nom"
                label="Nom"
                variant="outlined"
              />
              <TextField id="logo" name="logo" label="logo" variant="outlined" />
              
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
  
  export default enseigneForm;