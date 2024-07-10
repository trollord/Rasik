import { Grid, Typography, Box } from "@mui/material";
import { InstaGram, LinkedInIcon } from "../../../commonComponents/icons";
import styles from './styles.module.css';
import image from "./image.png"
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, scroller } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import { stateProvider } from "../../../../context";
import { Height } from "@mui/icons-material";

function Footer() {

  const { dispatch } = stateProvider();

  const handleClick = (service: string) => {
    navigate(`/services/${service}`)

  }
  const navigate = useNavigate();
  const navigateAndScroll = (path: string, section: string) => {

    navigate(path);
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        spy: true,
        offset: -100,
        duration: 500,
      });
    }, 100); // Adjust the timeout as needed
  };
  const isMobile = useMediaQuery('(max-width:600px)', { noSsr: true });
  const isTablet = useMediaQuery('(min-width:900px) and (max-width:1370px)', { noSsr: true });
  const isTabletPortrait = useMediaQuery('(min-width:600px) and (max-width:900px)', { noSsr: true });

  return (
    <Grid container >

    
    <Grid container  flexDirection='column' height={isTablet?'45vh': isTabletPortrait?'55vh':'35vh'} bgcolor='#F1E5D1' justifyContent='center' sx={{padding:'10px 0px'}}>
        <Grid container item className={styles.mainGrid} justifyContent='space-evenly'  gap={isTablet?"5px":"20px"} width={isTablet?"100vw":"90vw"} sx={{ marginLeft: isTablet?'0px':'50px' }}>
         <Grid item paddingTop="1vh"  > 
            <img className={styles.whatsappImage20240516At1Icon} src={image}  alt="logo" width={"70%"} height={"70%"}/>
         </Grid>
        
          <Grid item paddingTop="15px">
            <Typography variant="h5" className={styles.services} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600,fontSize:"4vh" }}>Services</Typography>
            <Box paddingTop="1vh" onClick={() => { handleClick('printMedia') }} >
              <Typography className={styles.servicesFont} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: "2.2vh" }}>Print Media Release</Typography>
            </Box>
            <Box onClick={() => { handleClick('digitalMarketing') }}>
              <Typography className={styles.servicesFont} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: "2.2vh" }}>Digital Marketing</Typography>
            </Box>
            <Box onClick={() => { handleClick('socialMediaMarketing') }}>
              <Typography className={styles.servicesFont} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: "2.2vh" }}>Social Media Marketing</Typography>
            </Box>
            <Box onClick={() => { handleClick('eCommerceSolution') }}>
              <Typography className={styles.servicesFont} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: "2.2vh" }}>E-commerce Solutions</Typography>
            </Box>
            <Box onClick={() => { handleClick('creative') }}>
              <Typography className={styles.servicesFont} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: "2.2vh" }}>Creatives</Typography>
            </Box>
            <Box onClick={() => { handleClick('radioFm') }}>
              <Typography className={styles.servicesFont} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: "2.2vh" }}>Outdoor Advertising</Typography>
            </Box>
            
            
            
          </Grid>


          <Grid item display='flex' flexDirection='column' paddingTop="14px">
            <Typography paddingBottom="10px" variant="h5" className={styles.company} sx={{ fontFamily: 'Inter, sans-serif', fontSize:"4vh",fontWeight: 600 }}>Company</Typography>

            <Link to="about"  onClick={() => navigateAndScroll('/', 'about')} spy={true} smooth={true} offset={-100} duration={500}  className={styles.companyFont} >
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize:"2.2vh" }}>About Us</Typography>
            </Link>
            <Link to="ourclientscarousel" onClick={() => navigateAndScroll('/', 'ourclientscarousel')} spy={true} smooth={true} offset={-100} duration={500} className={styles.companyFont}>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize:"2.2vh" }}>Clients</Typography>
            </Link>
            <Link to="ourwork" onClick={() => navigateAndScroll('/', 'ourwork')} spy={true} smooth={true} offset={-100} duration={500} className={styles.companyFont}>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize:"2.2vh" }}>Our Work</Typography>
            </Link>
            <Link to="contactUs" onClick={() => navigateAndScroll('/', 'contactUs')} spy={true} smooth={true} offset={-100} duration={500} className={styles.companyFont}>
              <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize:"2.2vh" }}>Contact Us</Typography>
            </Link>


          </Grid>

         
         <Grid paddingTop="15px" paddingLeft="40px" flexDirection="column">
          <Grid>
            <Typography variant="h5" className={styles.connect} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize:"4vh" }}>{isTabletPortrait ? "Connect" : "Connect With Us"}</Typography>
            <Box style={{ marginTop: '10px' }}>
              <a href="https://www.instagram.com/rasik_communications?igsh=MWJvcTk3cTVyajRvcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <InstaGram />
              </a>

              <a href="https://www.linkedin.com/company/rasikcommunications/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '25px' }}>
                <LinkedInIcon />
              </a>

            </Box>
          </Grid>
          <Grid>
            <Typography variant="h5" className={styles.connect} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize:"4vh" }}>Email</Typography>
            <Grid className={styles.prashantEmail}>
                <a className={styles.customeA}
                  href="mailto:prashant@rasikcommunications.com"
                  target="_blank"
                  >
            <Typography className={isTabletPortrait?styles.ellipses:''} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500,fontSize:"2.2vh",color:"black"}}>
              prashant@rasikcommunications.com
            </Typography>
            </a>
            </Grid>
            <Grid className={styles.rasikEmail} >


                <a
                  className={styles.customeA}
                  href="mailto:rasikads43@gmail.com"
                  target="_blank"
                >
            <Typography className={isTabletPortrait?styles.ellipses:''} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500,fontSize:"2.2vh", color:"black" }}>
              rasikads43@gmail.com
            </Typography>
            
            </a>
              </Grid>
          </Grid>
         </Grid>

         {/* {!isMobile && !isTablet && <Grid>
         <Box className={styles.rasikCommunicationsAllRighWrapper}>
            <Box className={styles.rasikCommunicationsAll} >
              ©2024 Rasik Communications. All Rights Reserved
            </Box>
          </Box>
         </Grid>} */}
          
        </Grid>
        
      </Grid>

      <Grid display="flex" justifyContent="center" direction={"column"}  width="100vw" >
            <Box className={styles.rasikCommunicationsAllRighWrapper2} height="5vh" display={"flex"} flexDirection={"column"} justifyContent="center" textAlign="center" >
                <Typography className={styles.rasikCommunicationsAll}   >

                  ©2024 Rasik Communications. All Rights Reserved 

                </Typography>
              </Box>
        </Grid>
      </Grid>
  )
}

export default Footer;