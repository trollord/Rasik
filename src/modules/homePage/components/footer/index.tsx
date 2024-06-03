import { Grid, Typography ,Box} from "@mui/material";
import { InstaGram, LinkedInIcon } from "../../../commonComponents/icons";


function Footer() {
  return (
    <Grid container flexDirection='column' height='200px' bgcolor='#F1E5D1' justifyContent='center' sx={{padding:'10px 70px'}}>
        <Grid container item justifyContent='space-evenly'>
         <Grid item>
         <img src="/image.png" alt="logo" width={"70%"} height={"70%"}/>
         </Grid>
         <Grid item>
          <Typography variant="h5">Services</Typography>
          <Typography>Print media release</Typography>
          <Typography>Outdoor media</Typography>
          <Typography>Creatives</Typography>
          <Typography>Radio FM</Typography>
         </Grid>
         <Grid item>
          <Typography>E-commerce solutions</Typography>
          <Typography>Digital Marketing</Typography>
          <Typography>Social Media Merketing</Typography>     
         </Grid>
         <Grid item>
          <Typography variant="h5">Company</Typography>
          <Typography>About us</Typography>
          <Typography>Clients</Typography>
          <Typography>Our work</Typography>
          <Typography>Contact us</Typography>
         </Grid>
         <Grid>
          <Typography variant="h5">Connect</Typography>
          <Box>
            <span>
             <InstaGram/>
            </span>
            <span>
              <LinkedInIcon/>
            </span>

          </Box>
         </Grid>

        </Grid>
        <Grid item>
                   cjjdxxxxxxxxxxxxxxxxxxxxxxxxxx
        </Grid>

    </Grid>
  )
}

export default Footer;