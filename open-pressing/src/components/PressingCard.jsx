import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Styles from '../styles/PressingCard.module.css'
import{Grid,Box} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Rating from '@mui/material/Rating';
import { Paper } from '@mui/material';
import { width } from '@mui/system';

export default function MediaCard(props) {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src={props.pressingImage} className={Styles.image}/>
        <Box paddingx={1} marginLeft={2}>
           <Typography component="h2" variant='subtitle1'>{props.pressingName}</Typography>
        </Box>
        <Box sx={{
            display: "flex",
            alignItems: "center"

        }}
        marginLeft={2}>
          <Typography variant='body2' component="p">
              <ArrowOutwardIcon sx={{width: 19}} /> {props.pressingLocation} km from you
          </Typography>
        </Box>
       <Box sx={{
        display:'flex',
        alignItems:'center'
       }} marginTop={3} marginLeft={2}>
        <Rating name='read-only' value={props.note} readOnly precision={0.5} size='small' />
        <Typography variant="body2" component="p" marginLeft={0.5}>3.5</Typography>
        <Typography variant="body3" component="p" marginLeft={1.5} sx={{backgroundColor:'grey',fontSize:11}}>({props.nomber_avis})</Typography>
       </Box>
       <Box marginLeft={2}
       marginBottom={1}>
        <Typography variant="h6" component="h6" marginTop={0}>A partir de {props.tarification}</Typography>
       </Box>
      </Paper>
    </Grid>
   
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     sx={{ height: 140 }}
    //     image={props.pressingImage}
    //     title="green iguana"
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {props.pressingName}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {props.pressingDescription}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Voir l'emplacement sur la carte</Button>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
  );
}