
import { Box, Grid, Typography } from '@mui/material';
import styles from "./styles.module.css"
function OurClients() {
  return (
  
        <Grid container height='85vh' className={styles.mainGrid} alignItems='center' justifyContent='center' flexDirection='column' m='40px auto'>
            <Box textAlign='center'>
                <Typography variant='h2' sx={{fontWeight:'600'}}>Our Clients</Typography>
                <Typography variant='h6'>Overseas and Retail clients</Typography>
            </Box>

            <Grid item m={3} className={styles.logoParent} >
                <img src='/assets/logo1.png' className={styles.logo}  />
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
        </Grid>
   
  )
}

export default OurClients;
