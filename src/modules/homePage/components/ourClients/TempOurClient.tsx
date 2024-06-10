import { Box, Grid, Typography } from '@mui/material';
import '../../../../App.css'

function TempOurClient() {
    return (

        <Grid container display='flex' alignItems='center' justifyContent='center' flexDirection='column' m='40px 0'>
            <Box textAlign='center' mb={3}>
                <Typography variant="h3" style={{ fontWeight: '600' }}>Our Clients</Typography>
                <Typography>Retail and Overseas  clients</Typography>
            </Box>
            {/* width='180px' height='80px' */}
            <Grid item m='30px 0' display='flex' justifyContent='space-evenly' width='100%' >
                <img src='/assets/Adenwal jewellers.png' className='ourClientImg' />
                <img src='/assets/Digi-1.png' className='ourClientImg' />
                <img src='/assets/LG Hing.png' className='ourClientImg' />
                <img src='/assets/Milan.png' className='ourClientImg' />
                <img src='/assets/Roopkala.png' className='ourClientImg' />

            </Grid>
            <Grid m='30px 0' item width='100%' display='flex' justifyContent='space-evenly'>
                <img src='/assets/Roopmilan.png' className='ourClientImg' />
                <img src='/assets/Saucy Affair.png' className='ourClientImg' />
                <img src='/assets/Somaiya.png' className='ourClientImg' />
                <img src='/assets/Tit Bit.png' className='ourClientImg' />

            </Grid>
        </Grid>

    )
}

export default TempOurClient;

