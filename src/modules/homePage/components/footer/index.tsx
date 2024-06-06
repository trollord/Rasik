import { Grid, Typography ,Box} from "@mui/material";
import { InstaGram, LinkedInIcon } from "../../../commonComponents/icons";
import styles from './styles.module.css';
import image from "./image.png"
function Footer() {
  return (
    <Grid container  flexDirection='column' height='294px' bgcolor='#F1E5D1' justifyContent='center' sx={{padding:'10px 70px'}}>
        <Grid container item justifyContent='space-evenly'>
         <Grid item > 
         <img className={styles.whatsappImage20240516At1Icon} src={image}  alt="logo" width={"70%"} height={"70%"}/>
         </Grid>
         
         <Grid item>
          <Typography variant="h5" className={styles.services}>Services</Typography>
          <Typography className={styles.servicesFont}>Print media release</Typography>
          <Typography className={styles.servicesFont}>Outdoor media</Typography>
          <Typography className={styles.servicesFont}>Creatives</Typography>
          <Typography className={styles.servicesFont}>Radio FM</Typography>
         </Grid>
         
         <Grid item paddingTop="45px">
          <Typography className={styles.servicesFont}>E-commerce solutions</Typography>
          <Typography className={styles.servicesFont}>Digital Marketing</Typography>
          <Typography className={styles.servicesFont}>Social Media Merketing</Typography>     
         </Grid>

         
         <Grid item>
          <Typography variant="h5" className={styles.company}>Company</Typography>
          <Typography className={styles.companyFont}>About us</Typography>
          <Typography className={styles.companyFont}>Clients</Typography>
          <Typography className={styles.companyFont}>Our work</Typography>
          <Typography className={styles.companyFont}>Contact us</Typography>
         </Grid>

         
         <Grid>
          <Typography variant="h5" className={styles.connect}>Connect</Typography>
          <Box style={{ marginTop: '10px' }}>
            <a href="https://www.instagram.com/rasik_communications?igsh=MWJvcTk3cTVyajRvcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <InstaGram />
            </a>
             
            <a href="https://www.linkedin.com/company/rasikcommunications/" target="_blank" rel="noopener noreferrer"style={{ marginLeft: '25px' }}>
              <LinkedInIcon/>
            </a>

          </Box>
         </Grid>
         <Grid>
         <div className={styles.rasikCommunicationsAllRighWrapper}>
            <div className={styles.rasikCommunicationsAll} >
              ©2024 Rasik Communications. All Rights Reserved
            </div>
          </div>
         </Grid>

        </Grid>
        {/* <Grid item  className={styles.rasikCommunicationsAll}> */}
                   {/* cjjdxxxxxxxxxxxxxxxxxxxxxxxxxx */}

            {/* <div className={styles.rasikCommunicationsAll}>
              ©2024 Rasik Communications. All Rights Reserved
            </div> */}
        {/* </Grid> */}

    </Grid>
  )
}

export default Footer;