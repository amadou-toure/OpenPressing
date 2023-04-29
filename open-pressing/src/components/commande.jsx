import {React,useState}from "react"
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Chip,
} from "@mui/material";

const BaseCard = (props) => {
    const [birthdate,setbirthdate]=useState()
  console.log(props.props.enseigne)
  return (
    <Card  sx={{
        width:'100%'
      }}>
      <Box  sx={{
        width:'100%',
        justifyContent:'center'
      }}
      display="flex" alignItems="center">
        <Typography variant="h4" sx={{
        fontWeight:'600'
      }}>{props.props.enseigne}</Typography>
      </Box>
      <CardContent>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                  sx={{
                    width:'100%'
                  }}
                    required
                    label="Selectionner une date de collecte" 
                    id="birthdate"
                    name="birthdate" 
                    value={birthdate}
                    onChange={(newValue) => setbirthdate(newValue)}
                  /> 
                </LocalizationProvider></CardContent>
    </Card>
  );
};

export default BaseCard;
