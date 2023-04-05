import PressingCard from '../components/PressingCard';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import NavBar from '../components/NavBar'

export default function(){
    // const config = {
    //     method: 'GET',
    //     headers: {
    //         'Authorization':document.cookie
    //     }
    //     };
    // fetch("http://localhost:3001/clients/",config)
    // .then(response=> response ? console.log(response.json()):console.log('erreur'))

    // console.log(document.cookie)
    return(
        <> <NavBar />
            <Container>
             
                    <Grid container spacing={5}>
                           <PressingCard pressingLocation='2' pressingImage='https://th.bing.com/th/id/OIP.o8ZRDNFA9f4TdHi9pJaa1wAAAA?pid=ImgDet&rs=1' pressingName='American pressing' />
                           <PressingCard pressingLocation='5' pressingImage='https://th.bing.com/th/id/OIP.o8ZRDNFA9f4TdHi9pJaa1wAAAA?pid=ImgDet&rs=1' pressingName='American pressing' />
                           <PressingCard pressingLocation='9' pressingImage='https://th.bing.com/th/id/R.f6077dc4c705fa9dc9239006ab6a365d?rik=89Z8S4KK1Fnhmw&pid=ImgRaw&r=0' pressingName='American pressing' />
                           <PressingCard pressingLocation='8' pressingImage='' pressingName='American pressing' />
                           <PressingCard pressingLocation='6' pressingImage='' pressingName='American pressing' />
                           
                    </Grid>
                 
            
                
               
            </Container>
        </>
    )
}