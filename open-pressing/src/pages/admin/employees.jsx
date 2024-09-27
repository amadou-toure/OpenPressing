import {
    Grid,
    Stack,
    TextField,
    Button,
} from "@mui/material";
import BaseCard from "./baseCard/BaseCard";
import saveEnseigne from "@/pages/api/saveEnseigne";
const EmployeeForm = (id_pressing) => {
    const handleSubmit = (event) => {

        event.preventDefault();
        const id = localStorage.getItem('userId');

        const data = new FormData(event.currentTarget);
        const newEmployee = ({
            id_pressing:id_pressing,
            adresse_email_employee: data.get('email'),
            mot_de_passe_employee: data.get('password')
        })
        saveEnseigne(newEnseigne);
        console.log(newEnseigne);


    }
    return (
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
        </Grid>
    );
};
