import { Box, Grid, Typography } from '@mui/material';
import '../../../../App.css';


function OurClients() {
    return (

        <Grid container display='flex' alignItems='center' flexDirection='column' m='40px 0' sx={{ height: { xs: '50vh', md: '85vh' }, justifyContent: { xs: 'start', md: 'center' } }} className='box' id='client'>
            <Box textAlign='center' mb={3} >
                <Typography sx={{ fontWeight: '600', fontSize: { xs: '40px', md: '55px' } }}>Our Clients</Typography>
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

export default OurClients;




{/* <Grid container height='85vh' className={styles.mainGrid} alignItems='center' justifyContent='center' flexDirection='column' id="client" m='40px auto'>
<Box textAlign='center'>
    <Typography variant='h2' sx={{ fontWeight: '600' }}>Our Clients</Typography>
    <Typography variant='h6'>Overseas and Retail clients</Typography>
</Box>

<Grid item m={3} className={styles.logoParent} >
    <img src='/assets/logo1.png' className={styles.logo} />
    <img src='/assets/logo2.png' className={styles.logo} />
    <img src='/assets/logo3.png' className={styles.logo} />
    <img src='/assets/logo4.png' className={styles.logo} />
    <img src='/assets/logo5.png' className={styles.logo} />
</Grid>
<Grid item className={styles.logoGroup} >
    <img src='/assets/logo6.png' className={styles.logo} />
    <img src='/assets/logo7.png' className={styles.logo} />
    <img src='/assets/logo8.png' className={styles.logo} />
    <img src='/assets/logo9.png' className={styles.logo} />

</Grid>
</Grid> */}