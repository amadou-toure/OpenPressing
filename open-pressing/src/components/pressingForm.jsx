import {
    Grid,
    Stack,
    TextField,
    Button,
  } from "@mui/material";
  import BaseCard from "./baseCard/BaseCard";

  const PressingForm = (props) => {
    const handleSave=()=>{

    }
    return (
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <BaseCard title="Form Layout">
            <Stack spacing={3}>
              <TextField
                id="localisation"
                label="localisation"
                variant="outlined"
              />
              <TextField id="contact" label="contact" variant="outlined" />
              
            </Stack>
            <br />
            <Button variant="contained" mt={2} onClick={handleSave}>
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
  