import { Grid, Typography } from "@mui/material";

function MeetUs() {
  return (
   <Grid  spacing={2} p={2} width='80%'  bgcolor='#EADBC8'  height='300px' m='auto' container display='flex' justifyContent='space-evenly'>

    <Grid item md={6}  height='200px' m='auto 0' border={2} bgcolor='#000' borderRadius='10px'>Map</Grid>
    <Grid item md={3} >
        <div>
            <Typography variant="h5">Office</Typography>
            <Typography>109, Prime Plaza, J. V. Patel IT Compound,Opp. Prabhadevi Railway Station, Prabhadevi (W) 
                 Mumbai- 400 013.</Typography>
        </div>
        <div>
            <Typography variant="h5">Office</Typography>
            <Typography>109, Prime Plaza, J. V. Patel IT Compound,Opp. Prabhadevi Railway Station, Prabhadevi (W) 
                 Mumbai- 400 013.</Typography></div>
    </Grid>
    <Grid item md={3}>

        <Typography variant="h5">Contacts</Typography>

        <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
        <div>
             <Typography>Mr. Prashant Shah</Typography>
             <Typography> Cell : +91-9768128256</Typography>
      </div>
        <div>
             <Typography>Mr. Parth Shah</Typography>
             <Typography> Cell : +91-9821028256</Typography>
      </div>
        <div>
             <Typography>Mr. Twinkle shah</Typography>
             <Typography>Cell : +91-8898827588</Typography>
     </div>
        </div>
        










       

    </Grid>

   </Grid>
  )
}

export default MeetUs;