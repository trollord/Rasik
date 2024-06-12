import { Grid, Typography ,Box} from "@mui/material";
import { InstaGram, LinkedInIcon } from "../../../commonComponents/icons";
import styles from './styles.module.css';
import image from "./image.png"
function FooterMobile() {
  return (
    // <Grid container  flexDirection='column' height='50vh' bgcolor='#F1E5D1' justifyContent='center' sx={{padding:'280px 100px'}}>
    //     <Grid container item  flexDirection="row" >
    //         <Box flexDirection="column" justifyContent='space-evenly' width="100vw" paddingLeft="0px" paddingTop="0px">
    //             <Grid item width={350} height={"60%"}  xs={4} paddingLeft="0px">
    //                 <img src="/imagenew.png" alt="logo" width={"120%"} height={"100%"} />
    //             </Grid>
    //             <Grid>
    //                 <Typography variant="h5" className={styles.connect} paddingLeft="10px">Connect</Typography>
    //                 <Box style={{ marginTop: '10px' }} paddingLeft="10px">
    //                     <a href="https://www.instagram.com/rasik_communications?igsh=MWJvcTk3cTVyajRvcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
    //                     <InstaGram />
    //                     </a>
    //                     <a href="https://www.linkedin.com/company/rasikcommunications/" target="_blank" rel="noopener noreferrer"style={{ marginLeft: '25px' }}>
    //                     <LinkedInIcon/>
    //                     </a>
    //                 </Box>
    //             </Grid>
    //         </Box>
    //         <Grid container>
    //             <Grid item>
    //             <Typography variant="h5" className={styles.services}>Services</Typography>
    //             <Typography className={styles.servicesFont}>Print media release</Typography>
    //             <Typography className={styles.servicesFont}>Outdoor media</Typography>
    //             <Typography className={styles.servicesFont}>Creatives</Typography>
    //             <Typography className={styles.servicesFont}>Radio FM</Typography>
    //             <Typography className={styles.servicesFont}>E-commerce solutions</Typography>
    //             <Typography className={styles.servicesFont}>Digital Marketing</Typography>
    //             <Typography className={styles.servicesFont}>Social Media Merketing</Typography>     
    //             </Grid>
    //         </Grid>
    //      <Grid item>
    //       <Typography variant="h5" className={styles.company}>Company</Typography>
    //       <Typography className={styles.companyFont}>About us</Typography>
    //       <Typography className={styles.companyFont}>Clients</Typography>
    //       <Typography className={styles.companyFont}>Our work</Typography>
    //       <Typography className={styles.companyFont}>Contact us</Typography>
    //      </Grid>
    //     </Grid>
    // </Grid>
    <Grid container  flexDirection='row' height='30vh' width="100vw" bgcolor='#F1E5D1' justifyContent='center' paddingTop="20px">
        <Grid container className={styles.firstGrid} flexDirection="row" width="30vw">
            <Box flexDirection="column">
                <Grid item width={350} height={"30%"}  xs={4} paddingLeft="0px">
                    <img src="/imagenew.png" alt="logo" width={"120%"} height={"100%"} />
                </Grid>
                <Grid paddingTop="10px">
                    <Typography variant="h5" className={styles.connect} paddingLeft="10px">Connect</Typography>
                    <Box style={{ marginTop: '10px' }} paddingLeft="10px">
                        <a href="https://www.instagram.com/rasik_communications?igsh=MWJvcTk3cTVyajRvcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <InstaGram />
                        </a>
                        <a href="https://www.linkedin.com/company/rasikcommunications/" target="_blank" rel="noopener noreferrer"style={{ marginLeft: '25px' }}>
                            <LinkedInIcon/>
                        </a>
                    </Box>
                </Grid>
            </Box>
        </Grid>
        <Grid container width="37vw" paddingLeft="30px">
        <Grid item>
             <Typography variant="h5" className={styles.services}>Services</Typography>
             <Typography className={styles.servicesFont}>Print media release</Typography>
             {/* <Typography className={styles.servicesFont}>Outdoor media</Typography> */}
             <Typography className={styles.servicesFont}>Creatives</Typography>
             <Typography className={styles.servicesFont}>Radio FM</Typography>
             <Typography className={styles.servicesFont}>E-commerce solutions</Typography>
             <Typography className={styles.servicesFont}>Digital Marketing</Typography>
             <Typography className={styles.servicesFont}>Social Media Merketing</Typography>     
             </Grid>
        </Grid>
        <Grid item width="33vw" paddingLeft="10px" >
            <Typography variant="h5" className={styles.company}>Company</Typography>
            <Typography className={styles.companyFont}>About us</Typography>
            <Typography className={styles.companyFont}>Clients</Typography>
            <Typography className={styles.companyFont}>Our work</Typography>
            <Typography className={styles.companyFont}>Contact us</Typography>
        </Grid>
    </Grid>
  )
}

export default FooterMobile;