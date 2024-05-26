import Header from "../../../commonComponents/header";
import { Grid ,Typography, Button} from "@mui/material";
import {AboutUsImage} from '../../../commonComponents/icons'
export function AboutUs() {
    return <>
      <Header/>

      <Grid container mt={5}>

        <Grid item  md={7} >
        <Typography variant="h4" component="h2" mt={3}  sx={{ fontWeight: '700'}}>
             About us
       </Typography>
       <Typography sx={{ fontStyle: 'italic' }}>
        The legacy continues
       </Typography>

       <Typography sx={{marginTop:'25px'}}>
       With a legacy spanning over 6 decades of accomplishments and progress, we at Rasik are a proud lot. Our founding principles - namely integrity, service and commitment, are fundamental, distinguishing and intrinsic to us. By combining conventional wisdom and modern thinking with ethical conduct, we've gained an impeccable reputation-both among our clientele and associates. And with it, their unflinching trust and support. Reason why we have grown even when the going was tough. It's people like you with whom we've flourished and now look forward to many more milestones together in the years to come.

       </Typography>

       <Button  sx={{marginTop:'10px',backgroundColor:'#cf352E',color:"#fff",padding:'5px 15px',textTransform: 'capitalize' }}> Enquire now!</Button>

        </Grid>

        <Grid md={5} item border={5}>
     
        </Grid>

   

      </Grid>
      <AboutUsImage></AboutUsImage>
    </>
}