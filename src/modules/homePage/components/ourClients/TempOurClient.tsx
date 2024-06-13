import { Box, Grid, Typography } from '@mui/material';
import '../../../../App.css'

function TempOurClient() {
    return (

        <Grid container display='flex' alignItems='center' justifyContent='center' flexDirection='column' m='40px 0' className='box' id='client'>
            <Box textAlign='center' mb={3}>
                <Typography variant="h3" style={{ fontWeight: '600' }}>Our Clients</Typography>
                <Typography>Retail and Overseas  clients</Typography>
            </Box>
            {/*  */}

            <Grid item m='30px 0' display='flex' justifyContent='space-evenly' width='100%' >
                <img src='/assets/Adenwal jewellers.png' className='our-image' />
                <img src='/assets/Digi-1.png' className='our-image' />
                <img src='/assets/LG Hing.png' className='our-image' />
                <img src='/assets/Milan.png' className='our-image' />
                <img src='/assets/Roopkala.png' className='our-image roop-kala-img' />

            </Grid>
            <Grid m='30px 0' item width='100%' display='flex' justifyContent='space-evenly'>
                <img src='/assets/Roopmilan.png' className='our-image roopmilan-img' />
                <img src='/assets/Saucy Affair.png' className='our-image' />
                <img src='/assets/Somaiya.png' className='our-image' />
                <img src='/assets/Tit Bit.png' className='our-image' />

            </Grid>
        </Grid >

    )
}

export default TempOurClient;

