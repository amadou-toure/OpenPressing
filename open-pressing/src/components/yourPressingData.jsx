import React, { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Stack,
  TextField,
  Chip,
  Button,
} from "@mui/material";
import BaseCard from "./baseCard/BaseCard";
import Employee from "@/pages/api/Employee";
import { Alert, AlertTitle } from '@mui/material';

const EmployeeForm = (props) => {
  const saveEmployee = Employee.saveEmploeyee
  const[result,setResult]=useState('')
 
  const handleClose = () => {
    setResult('')
    props.setOpenForm(false)
}
  const handleSubmit = (event) => {

      event.preventDefault();
      const id = localStorage.getItem('userId');

      const data = new FormData(event.currentTarget);
      const newEmployee = ({
          id_pressing:props.id_pressing,
          adresse_email_employee: data.get('email'),
          mot_de_passe_employee: data.get('password')
      })
      saveEmployee(newEmployee,setResult);
      console.log(newEmployee);


  }
  return (
    <>
     {
     result==='' ?
        <Grid container spacing={0} component='form' onSubmit={handleSubmit}>
        <Grid item xs={12} lg={12}>
            <BaseCard title="Nouvelle Employer">
                <Stack spacing={3}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Adresse Email"
                        variant="outlined"
                    />
                    <TextField id="password" name="password" label="Mot de passe" variant="outlined" />

                </Stack>
                <br />
                <Button variant="contained" mt={2} type='submit'>
                    Enregistrer
                </Button>
            </BaseCard>
        </Grid>
    </Grid>:result==='success'? <Alert sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: 'center'
                    }} onClose={handleClose} severity="success">
                        <AlertTitle>Employer enregister avec succes</AlertTitle>
                    </Alert> : result==='error'? <Alert onClose={handleClose} severity="error">
                        <AlertTitle>Une erreur s'est produite</AlertTitle>

                        <strong>veuilliez reessayer</strong>
                    </Alert>:null
  
  }
    </>
   
      
  );
};

const yourPressingData = (pressing) => {
  console.log(pressing.pressing)
  const [openForm,setOpenForm] = useState(false)
  const [id,setId]= useState(null)
  const handleEmployeee=(id_pressing)=>{
    setId(id_pressing)
    setOpenForm(true)
    
   
  }
 
  return (
    <>
    {openForm? <EmployeeForm id_pressing={id} setOpenForm={setOpenForm} />:null}
    <BaseCard title="Liste des Pressings">

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
                Id
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                localisation
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                contact
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Abonnement
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                note
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                etat
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                action
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pressing.pressing.map((pressing) => (
               <TableRow  key={pressing.id_pressing}>
              <TableCell >
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {pressing.id_pressing}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {pressing.localisation}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {pressing.contact}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {pressing.id_abonnement}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">{pressing.note} etoiles</Typography>
              </TableCell>
              <TableCell align="right">
                <Chip
                  sx={{
                    pl: "4px",
                    pr: "4px",
                    backgroundColor: "error.main",
                    color: "#fff",
                  }}
                  size="small"
                  label={pressing.verifier}
                ></Chip>
              </TableCell>
              <TableCell align="right">
              <Box>
                  <Button onClick={()=>handleEmployeee(pressing.id_pressing)}>Ajouter un employer</Button>
                  <Button>modifier</Button>
                  <Button>Supprimer</Button>
                  </Box>
                  </TableCell>
            </TableRow>
            
           
          ))}
        </TableBody>
      </Table>
    </BaseCard>
    </>
    
  );
};

export default yourPressingData;
