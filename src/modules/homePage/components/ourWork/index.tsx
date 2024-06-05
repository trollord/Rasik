import { Grid, Typography ,Box} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-responsive-carousel';

function OurWork() {
  return (
    <Grid height='700px' width='100%' container p={5} display='flex' alignItems='center'  flexDirection='column'  id='ourwork' gap='40px'>
        <Grid item>
            <Typography variant='h3' style={{fontWeight:'700'}} textAlign='center'>Our Work</Typography>
            <Typography  textAlign='center'>Your Vision, Our Expertise</Typography>
        </Grid>
        <Grid container item >
            <Grid  item md={4}  display='flex' alignItems='center' flexDirection='column'>
                <Typography variant='h5' mb={2} style={{fontWeight:'600'}}>Print Clients</Typography>
                <Box width='250px' height='400px' border={1}></Box>     
            </Grid>
            <Grid  item md={4}  display='flex' alignItems='center' flexDirection='column'>
                <Typography variant='h5'mb={2} style={{fontWeight:'600'}}>Digital Clients</Typography>
                <Box width='250px' height='400px' border={1}></Box>
            </Grid>
            <Grid item md={4}  display='flex' alignItems='center' flexDirection='column'>
                <Typography variant='h5' mb={2} style={{fontWeight:'600'}}>Overseas Clients</Typography>
                <Box width='250px' height='400px' border={1}></Box>
            </Grid>
        </Grid>
        

    </Grid>
  )
}

export default OurWork;


{/* <Grid height='600px' width='100%'  border={2} container p={5} display='flex' alignItems='center'  flexDirection='column' gap='40px' id='ourwork'>
<Grid item>
    <Typography variant='h3'>Our Work</Typography>
    <Typography>Your Vision, Our Expertise</Typography>
</Grid>
<Grid container item >
    <Grid md={6} border={2} display='flex' alignItems='center' flexDirection='column'>
        <Typography>Retail Clients</Typography>
        <Box width='300px' height='300px' border={1}>ccccccccccccccccc</Box>
    </Grid>
    <Grid md={6} border={2} display='flex' alignItems='center' flexDirection='column'>
        <Typography>Overseas Clients</Typography>
        <Box width='300px' height='300px' border={1}>ccccccccccccccccc</Box>
    </Grid>
</Grid>


</Grid> */}