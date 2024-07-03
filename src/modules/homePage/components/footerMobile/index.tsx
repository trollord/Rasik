// import { Grid, Typography, Box } from "@mui/material";
// import { InstaGram, LinkedInIcon } from "../../../commonComponents/icons";
// import styles from './styles.module.css';
// import image from "./image.png";
// import { Link, scroller } from "react-scroll";
// import { useNavigate } from 'react-router-dom';
// import { stateProvider } from "../../../../context";

// function FooterMobile() {
//     const navigate = useNavigate();

//     const handleClick = (service: string) => {
//         navigate(`/services/${service}`)
    
//       }
//     const navigateAndScroll = (path: string, section: string) => {

//         navigate(path);
//         setTimeout(() => {
//             scroller.scrollTo(section, {
//                 smooth: true,
//                 spy: true,
//                 offset: -100,
//                 duration: 500,
//             });
//         }, 100); // Adjust the timeout as needed
//     };
//     return (
//         <Grid>
//         <Grid container flexDirection='column' height='60vh' width="100vw" bgcolor='#F1E5D1' justifyContent='center' >
//             <Grid container  height="26vh" flexDirection="row" width="100vw" paddingTop="2.25vh">
//                 {/* <Box flexDirection="column">
//                     <Grid item width={350} height={"30%"} xs={4} paddingLeft="0px">
//                         <img src="/imagenew.png" alt="logo" width={"120%"} height={"100%"} />
//                     </Grid>
//                     <Grid paddingTop="10px">
//                         <Typography variant="h5" className={styles.connect} paddingLeft="10px">Connect</Typography>
//                         <Box style={{ marginTop: '10px' }} paddingLeft="10px">
//                             <a href="https://www.instagram.com/rasik_communications?igsh=MWJvcTk3cTVyajRvcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
//                                 <InstaGram />
//                             </a>

//                             <a href="https://www.linkedin.com/company/rasikcommunications/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '25px' }}>
//                                 <LinkedInIcon />
//                             </a>

//                         </Box>
//                     </Grid>
//                 </Box> */}
//                 <Grid container width="50vw" height="" paddingLeft="9vw" flexDirection='column'>
//                     <Grid item>
//                         <Typography variant="h5"  sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize:"3vh" }}>Services</Typography>
//                         <Box onClick={() => { handleClick('printMedia') }}>
//                             <Typography className={styles.servicesFont}>Print Media </Typography>
//                         </Box>
//                         <Box onClick={() => { handleClick('digitalMarketing') }}>
//                             <Typography className={styles.servicesFont}>Digital Marketing</Typography>
//                         </Box>
//                         <Box onClick={() => { handleClick('socialMediaMarketing') }}>
//                             <Typography className={styles.servicesFont}>Social Media Marketing</Typography>
//                         </Box>
//                         <Box onClick={() => { handleClick('eCommerceSolution') }}>
//                             <Typography className={styles.servicesFont}>E-Commerce </Typography>              
//                         </Box>
//                         <Box onClick={() => { handleClick('creative') }}>
//                             <Typography className={styles.servicesFont}>Creatives</Typography>
//                         </Box>
//                         <Box onClick={() => { handleClick('radioFm') }}>
//                             <Typography className={styles.servicesFont}>Radio FM</Typography>
//                         </Box>
//                     </Grid>
//                 </Grid>
//                 <Grid item width="50vw" paddingLeft="55px" display='flex' flexDirection='column' >  
//                     <Typography variant="h5"  sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize:"3vh" }}>Company</Typography>
//                     <Link to="about" onClick={() => navigateAndScroll('/', 'about')} spy={true} smooth={true} offset={-100} duration={500} >
//                         <Typography className={styles.servicesFont}>About Us</Typography>
//                     </Link>
//                     <Link to="client" onClick={() => navigateAndScroll('/', 'client')} spy={true} smooth={true} offset={-100} duration={500} >
//                         <Typography className={styles.servicesFont}>Clients</Typography>
//                     </Link>
//                     <Link to="ourwork" onClick={() => navigateAndScroll('/', 'ourwork')} spy={true} smooth={true} offset={-100} duration={500} >
//                         <Typography className={styles.servicesFont}>Our Work</Typography>
//                     </Link>
//                     <Link to="contactUs" onClick={() => navigateAndScroll('/', 'contactUs')} spy={true} smooth={true} offset={-100} duration={500} >
//                         <Typography className={styles.servicesFont}>
//                         Contact Us
//                         </Typography>
//                     </Link>
//                 </Grid>

//             </Grid>
//             <Grid height="30vw" container width="100vw"  paddingLeft="9vw" flexDirection='row' paddingTop="3vh">
//                 <Grid width="40vw">
//                     <Typography variant="h5" className={styles.connect} sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize:"3vh" }}>Email</Typography>
//                     <Grid className={styles.prashantEmail}>
//                 <a className={styles.customeA}
//                   href="mailto:prashant@rasikcommunications.com"
//                   target="_blank"
//                   >
//                     <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500,fontSize:"1.45vh", color:"black" }}>
//                     prashant@rasikcommunications.com
//                     </Typography>
//                     </a>
//               </Grid>
//               <Grid className={styles.rasikEmail} height="4vh" width="40vw">


//                 <a
//                 className={styles.customeA}
//                 href="mailto:rasikads43@gmail.com"
//                 target="_blank"
//                 >
//                     <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 500,fontSize:"1.45vh", color:"black" }}>
//                     rasikads43@gmail.com
//                     </Typography>
//                     </a>
//               </Grid>
                    

//                 </Grid>
//                 <Grid width="50vw" paddingLeft="14vw">
//                         <Typography variant="h5" className={styles.connect} paddingLeft="10px" sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize:"3vh" }}>Connect</Typography>
//                         <Box style={{ marginTop: '10px' }} paddingLeft="10px">
//                             <a href="https://www.instagram.com/rasik_communications?igsh=MWJvcTk3cTVyajRvcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
//                                 <InstaGram />
//                             </a>

//                             <a href="https://www.linkedin.com/company/rasikcommunications/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '3vw' }}>
//                                 <LinkedInIcon />
//                             </a>

//                         </Box>
//                 </Grid>
//             </Grid>
//             <Grid container width="100vw" height = "12vh" paddingLeft="31vw">
//                 <Grid item width="10vw" height={"80%"} xs={4} >
//                             <img src="/imagenew.png" alt="logo" width={"180%"} height={"100%"} />
//                         </Grid>
//                 </Grid>

            
//         </Grid>
//         <Grid display="flex" justifyContent="center" direction={"column"}  width="100vw" >
//             <Box className={styles.rasikCommunicationsAllRighWrapper2} height="5vh" display={"flex"} flexDirection={"column"} justifyContent="center" textAlign="center" >
//                 <Typography className={styles.rasikCommunicationsAll}   >

//                 ©2024 Rasik Communications. All Rights Reserved 

//                 </Typography>
//             </Box>
//         </Grid>
//         </Grid>
//     )
// }

// export default FooterMobile;

import { Grid, Typography, Box } from "@mui/material";
import { InstaGram, LinkedInIcon } from "../../../commonComponents/icons";
import styles from './styles.module.css';
import image from "./image.png";
import { Link, scroller } from "react-scroll";
import { useNavigate } from 'react-router-dom';
function FooterMobile() {
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
        <Grid>

        
        <Grid container flexDirection='row' height='30vh' width="100vw" bgcolor='#F1E5D1' justifyContent='center' paddingTop="20px">
            <Grid container className={styles.firstGrid} flexDirection="row" width="30vw">
                <Box flexDirection="column">
                    <Grid item width={350} height={"30%"} xs={4} paddingLeft="0px">
                        <img src="/imagenew.png" alt="logo" width={"120%"} height={"100%"} />
                    </Grid>
                    <Grid paddingTop="10px">
                        <Typography variant="h5" className={styles.connect} paddingLeft="10px">Connect</Typography>
                        <Box style={{ marginTop: '10px' }} paddingLeft="10px">
                            <a href="https://www.instagram.com/rasik_communications?igsh=MWJvcTk3cTVyajRvcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                                <InstaGram />
                            </a>

                            <a href="https://www.linkedin.com/company/rasikcommunications/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '25px' }}>
                                <LinkedInIcon />
                            </a>

                        </Box>
                    </Grid>
                </Box>

            </Grid>
            <Grid container width="37vw" paddingLeft="30px">
                <Grid item>
                    <Typography variant="h5" className={styles.services}>Services</Typography>
                    <Typography className={styles.servicesFont}>Print media </Typography>
                    <Typography className={styles.servicesFont}>E-Commerce</Typography>
                    <Typography className={styles.servicesFont}>Radio FM</Typography>
                    <Typography className={styles.servicesFont}>Creatives</Typography>
                    <Typography className={styles.servicesFont}>Digital Marketing</Typography>
                    <Typography className={styles.servicesFont}>Social Media Marketing</Typography>
                </Grid>
            </Grid>

            <Grid item width="33vw" paddingLeft="10px" display='flex' flexDirection='column' >
                <Typography variant="h5" className={styles.company}>Company</Typography>
                <Link to="about" onClick={() => navigateAndScroll('/', 'about')} spy={true} smooth={true} offset={-100} duration={500} className={styles.companyFont}>About us</Link>
                <Link to="client" onClick={() => navigateAndScroll('/', 'client')} spy={true} smooth={true} offset={-100} duration={500} className={styles.companyFont}>Clients</Link>
                <Link to="ourwork" onClick={() => navigateAndScroll('/', 'ourwork')} spy={true} smooth={true} offset={-100} duration={500} className={styles.companyFont}>Our work</Link>
                <Link to="contactUs" onClick={() => navigateAndScroll('/', 'contactUs')} spy={true} smooth={true} offset={-100} duration={500} className={styles.companyFont}>Contact us</Link>
                {/* <Typography className={styles.companyFont}>About us</Typography>
            <Typography className={styles.companyFont}>Clients</Typography>
            <Typography className={styles.companyFont}>Our work</Typography>
            <Typography className={styles.companyFont}>Contact us</Typography> */}
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

export default FooterMobile;