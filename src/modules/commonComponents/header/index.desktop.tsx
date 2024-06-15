// import { useState, useEffect, useContext } from 'react';
// import { Button, Grid, Box, IconButton, Menu, MenuItem, MenuList } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// import { Link, scroller, Events } from 'react-scroll';
// import { useNavigate } from 'react-router-dom';
// import '../../../App.css'





// export function DesktopHeader() {
//     // const [activeLink, setActiveLink] = useState('');
//     const navigate = useNavigate();


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

//     // const handleSetActive = (text: string) => {
//     //     setActiveLink(text);
//     // };




//     return (
//         <Grid container height="15vh" alignItems={"center"} justifyContent="center" direction={"row"} display="flex" pl={5} pr={3} columnSpacing={8} bgcolor='#fff' position={'fixed'} top='0' left='0' zIndex={'100'}>

//             <Grid item width={100} height={"82%"} md={2} sx={{ paddingLeft: "90px !important" }}>
//                 <img src="/image.png" alt="logo" width={"100%"} height={"100%"} />
//                 {/* <HeaderLogo width={"100%"} height={"100%"}></HeaderLogo> */}
//             </Grid>


//             {/* className={`underline-link ${activeLink === 'services' ? 'active' : ''}`} */}
//             {/* className={`underline-link ${activeLink === 'ourwork' ? 'active' : ''}`} */}
//             {/* className={`underline-link ${activeLink === 'testimonials' ? 'active' : ''}`} */}
//             {/* className={`underline-link ${activeLink === 'about' ? 'active' : ''}`} */}
//             <Grid item display='flex' justifyContent='space-around' alignItems='center' md={10} sx={{ display: { xs: 'none', md: 'flex' } }}>
//                 <Link to='services'

//                     onClick={() => {

//                         navigateAndScroll('/', 'services')
//                         // handleSetActive('services')
//                     }} spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}
//                 >
//                     Services
//                 </Link>
//                 <Link to='ourwork'

//                     onClick={() => {
//                         navigateAndScroll('/', 'ourwork')
//                         // handleSetActive('ourwork')
//                     }} spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}>
//                     Our work
//                 </Link>
//                 <Link to='testimonials'

//                     onClick={() => {

//                         navigateAndScroll('/', 'testimonials')
//                         // handleSetActive('testimonials')
//                     }} spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}>
//                     Testimonials
//                 </Link>
//                 <Link to='about'

//                     onClick={() => {

//                         navigateAndScroll('/', 'about')
//                         // handleSetActive('about')
//                     }} spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}>
//                     About us
//                 </Link>

//                 <Link to='contactUs' onClick={() => navigateAndScroll('/', 'contactUs')} spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}>

//                     <Button sx={{
//                         fontWeight: '600', fontFamily: 'inter', backgroundColor: '#EB3335', width: '169px', height: '48px', borderRadius: '10px', boxShadow: '0px 4px 4px 0px #00000040', fontSize: '22px',
//                         '&:hover': {
//                             color: '#000',
//                             backgroundColor: '#EB3335'
//                         }, color: "#FFFFFF", textTransform: 'none'
//                     }}>
//                         Contact us
//                     </Button>
//                 </Link>
//             </Grid>
//         </Grid>
//     );
// }

// export default DesktopHeader;

import { useState, useEffect } from 'react';
import { Button, Grid, Box } from '@mui/material';
import { Link, scroller, Events } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import '../../../App.css';

export function DesktopHeader() {
    const [activeLink, setActiveLink] = useState('');
    const navigate = useNavigate();
    const sections = ['services', 'ourwork', 'testimonials', 'about', 'contactUs'];

    const navigateAndScroll = (path: string, section: string) => {
        // console.log("yes");
        navigate(path);
        setTimeout(() => {
            scroller.scrollTo(section, {
                smooth: true,
                offset: -100,
                duration: 500,
            });
            setActiveLink(section);
        }, 100);
    };
    const handleScroll = () => {
        let foundActive = false;

        for (let section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    setActiveLink(section);
                    foundActive = true;
                    break;
                }
            }
        }

        if (!foundActive) {
            setActiveLink('');
        }
    };

    useEffect(() => {
        Events.scrollEvent.register('begin', handleScroll);
        Events.scrollEvent.register('end', handleScroll);
        window.addEventListener('scroll', handleScroll);

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Grid container sx={{height: {sm:'8vh',lg:'15vh'}}} alignItems="center" justifyContent="center" direction="row" display="flex" pl={5} pr={3} columnSpacing={8} bgcolor="#fff" position="fixed" top="0" left="0" zIndex="100">
            <Grid item  height="82%" lg={2} sm={3} sx={{ paddingLeft: "40px !important" }}>
                {/* <img src="/image.png" alt="logo" width="100%" height="100%" /> */}
                <img src="/ras1-removebg-preview.svg" alt="logo" width="100%" height={"90%"} />
            </Grid>
            <Grid item display="flex" justifyContent="space-around" alignItems="center" lg={10} sm ={9} sx={{ display: { xs: 'none', lg: 'flex', sm: 'flex' } }} >
                {['services', 'ourwork', 'testimonials', 'about'].map((section) => (
                    <Link
                        key={section}
                        to={section}
                        onClick={() => navigateAndScroll('/', section)}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={`underline-link ${activeLink === section ? 'active' : ''}`}
                        style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '1.6vw', fontWeight: '600', cursor: "pointer" }}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
                    </Link>
                ))}
                <Box>
                    
                <Link
                    to="contactUs" onClick={() => navigateAndScroll('/', 'contactUs')}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}

                    style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}
                >
                    <Button
                        sx={{
                            fontWeight: '600',
                            fontFamily: 'inter',
                            backgroundColor: '#EB3335',
                            width: {
                                sm: '12.5vw',
                                lg: '11vw',
                            },
                            height: {
                                sm: '3.5vh',
                                lg: '7vh',
                            },
                            borderRadius: '10px',
                            boxShadow: '0px 4px 4px 0px #00000040',
                            fontSize: '1.6vw',
                            '&:hover': {
                                color: '#000',
                                backgroundColor: '#EB3335'
                            },
                            color: "#FFFFFF",
                            textTransform: 'none'
                        }}
                    >
                        Contact us
                    </Button>
                </Link>
                
                </Box>
            </Grid>
        </Grid>
    );
}

export default DesktopHeader;
