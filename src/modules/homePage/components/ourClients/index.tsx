
import { Box, Grid, Typography } from '@mui/material';

function OurClients() {
  return (
  
        <Grid container  display='flex' alignItems='center'  justifyContent='center' flexDirection='column' m='40px auto'>
            <Box textAlign='center' mb={3}>
                <Typography variant="h3" style={{fontWeight:'600'}}>Our Clients</Typography>
                <Typography>Retail and Overseas  clients</Typography>
            </Box>

            <Grid item m={2} display='flex' justifyContent='space-evenly'  width='100%' >
                <img src='/assets/Adenwal jewellers.png'  width='180px' height='80px'/>
                <img src='/assets/Digi-1.png' width='180px' height='80px'/>
                <img src='/assets/LG Hing.png' width='180px' height='80px'/>
                <img src='/assets/Milan.png' width='180px' height='80px'/>
                <img src='/assets/Roopkala.png'  width='180px' height='80px'/>
                 
            </Grid>
            <Grid  m={2} item width='100%' display='flex' justifyContent='space-evenly'>
            <img src='/assets/Roopmilan.png' width='180px' height='80px'/>
            <img src='/assets/Saucy Affair.png' width='180px' height='80px'/>
            <img src='/assets/Somaiya.png' width='180px' height='80px'/>
            <img src='/assets/Tit Bit.png' width='180px' height='80px'/>

            </Grid>
        </Grid>
   
  )
}

export default OurClients;


