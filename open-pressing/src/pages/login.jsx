
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '@/components/Copyright';
import { redirect } from 'next/navigation'; 
import { useRouter } from 'next/router';
import RadioGroup from '@mui/material/RadioGroup';
import {Radio} from '@mui/material';
import Auth from './api/Authentification';
import envFile from './api/envFile';

import { useState } from 'react';
import auth from './api/Authentification';


const theme = createTheme();



export default function SignInSide() {
  const router = useRouter();
  const [user,setUser] = useState('Client')

  const handleUserStatus = (event) => {
    setUser(event.target.value);
  };
  console.log(user)
  const CheckLogin = (event)=>{
     event.preventDefault();
    const data = new FormData(event.currentTarget);
    const logindata=({
      adresse_email: data.get('email'),
      mot_de_passe: data.get('password'),
    });
    if (user==='Client'){
     auth(envFile.serverURL+"/clients/login",logindata)
     if(typeof window !== 'undefined')
      {
        if (localStorage.getItem('token'))
        {
          localStorage.setItem('role',"Client")
          router.push('./Client')
        }else{
          console.log('token non definis')
        }
      }
      
    }
    else if (user==='Owner')
    {
      auth(envFile.serverURL+"/owners/login",logindata)
      if(typeof window !== 'undefined')
      {
        if (localStorage.getItem('token'))
        {
          localStorage.setItem('role',"Proprietaire")
          router.push('./admin')
        }
       
      }
    
    } else if (user==='Employee')
    {
      auth(envFile.serverURL+"/pressing/employee",logindata)
      if(typeof window !== 'undefined')
      {
        if (localStorage.getItem('token')!="undefined")
        {
          localStorage.setItem('role',"employer")
          router.push('./employee')
        }
       
      }
    
    }
    else{console.log('user does not exist')}
    
      
     
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.expresspressing.fr/wp-content/uploads/2020/04/linge-poid.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <img  src="https://upcdn.io/W142hJk/image/demo/4mZFNstdCR.png?w=600&h=600&fit=max&q=70" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Grid item xs={12}>
                <Typography component='body2' variant='h6'> Vous etes :</Typography>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={user}
                  onChange={handleUserStatus}
                  sx={{
                    display:'flex',
                    flexDirection: 'row',
                  }}
                >
                  <FormControlLabel value="Client" control={<Radio />} label="Client" />
                  <FormControlLabel value="Employee" control={<Radio />} label="Employe" />
                  <FormControlLabel value="Owner" control={<Radio />} label="Proprietaire de pressing" />
                </RadioGroup>
              </Grid>
            <Box component="form"  onSubmit={CheckLogin} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="signUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
  }