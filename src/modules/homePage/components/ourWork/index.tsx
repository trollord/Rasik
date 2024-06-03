import { Grid, Typography ,Box} from '@mui/material';


function OurWork() {
  return (
    <Grid height='600px' width='100%'  border={2} container p={5} display='flex' alignItems='center'  flexDirection='column' gap='40px'>
        <Grid item>
            <Typography variant='h3'>Our Work</Typography>
            <Typography>Your Vision, Our Expertise</Typography>
        </Grid>
        <Grid container item border={3}>
            <Grid md={6} border={2} display='flex' alignItems='center' flexDirection='column'>
                <Typography>Retail Clients</Typography>
                <Box width='300px' height='300px' border={1}>ccccccccccccccccc</Box>
            </Grid>
            <Grid md={6} border={2} display='flex' alignItems='center' flexDirection='column'>
                <Typography>Overseas Clients</Typography>
                <Box width='300px' height='300px' border={1}>ccccccccccccccccc</Box>
            </Grid>
        </Grid>
        

    </Grid>
  )
}

export default OurWork;