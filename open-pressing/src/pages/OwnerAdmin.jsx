import { Grid,Typography,Box,Button } from "@mui/material"
const OwnerAdmin =()=>{
    
    return(
    <>
        <Grid container>
            <Grid item sm={12}>
                    <Typography variant="body2" component='body2'>
                        <Button sx={{ p: 2, border: '2px dashed blue',borderRadius: '20%' }}>
                            + Ajouter un pressing
                        </Button>
                        
                    </Typography>
            </Grid>
            <Grid item sm={12}>
                    <Typography variant="body2" component='body2'>
                        <Button sx={{ p: 2, border: '2px dashed blue',borderRadius: '20%' }}>
                            + Ajouter un pressing
                        </Button>
                        
                    </Typography>
            </Grid>
            <Grid item xs={9} >
                    <Typography variant="body2" component='body2'>
                        <Button sx={{ p: 2, border: '2px dashed blue',borderRadius: '20%' }}>
                            + Ajouter un pressing
                        </Button>
                        
                    </Typography>
            </Grid>
        </Grid>
    </>
    )
}

export default OwnerAdmin