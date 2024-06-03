
import { Box, Grid, Typography } from '@mui/material';

function OurClients() {
  return (
  
        <Grid container alignItems='center' justifyContent='center' flexDirection='column' m='40px auto'>
            <Box textAlign='center'>
                <Typography variant="h3">Our Clients</Typography>
                <Typography>Overseas and Retail clients</Typography>
            </Box>

            <Grid item m={3}>
                <img src='/assets/logo.png'/>
                <img src='/assets/logo.png'/>
                <img src='/assets/logo.png'/>
                <img src='/assets/logo.png'/>
                <img src='/assets/logo.png'/>
                 
            </Grid>
            <Grid item>
            <img src='/assets/logo.png'/>
            <img src='/assets/logo.png'/>
            <img src='/assets/logo.png'/>
            <img src='/assets/logo.png'/>

            </Grid>
        </Grid>
   
  )
}

export default OurClients;


