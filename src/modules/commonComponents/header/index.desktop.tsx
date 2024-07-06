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

import { useState, useEffect, MouseEvent } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Grid, Box, Typography, Menu, MenuItem, MenuList } from '@mui/material';
import { Link, scroller, Events } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { InstaGram, LinkedInIcon } from '../icons';
import '../../../App.css';
import DotGrid from './DotGrid';

export function DesktopHeader() {
    const [activeLink, setActiveLink] = useState('');
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
    console.log(anchorNav);

    const navigate = useNavigate();
    // const sections = ['services', 'about', 'ourwork', 'testimonials', 'contactUs'];
    const sections = ['ourwork', 'contactUs'];

    const openMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorNav(null)
    }


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
        <Grid container sx={{ height: { sm: '8vh', md: '15vh' } }} alignItems="center" justifyContent="space-between" direction="row" display="flex" pl={5} columnSpacing={8} bgcolor="#fff" position="fixed" top="0" left="0" zIndex="100">
            <Grid item md={2} >
                <Typography sx={{ fontSize: '20px', color: '#737373' }}>Advertising Agency</Typography>
            </Grid>
            <Grid item height="82%" md={2} display="flex" justifyContent="center" alignItems="center" sx={{ paddingLeft: "10px !important" }} >
                {/* <img src="/image.png" alt="logo" width="100%" height="100%" /> */}
                <img src="/assets/rasik_logo.svg" alt="logo" width="100%" height={"90%"} />
            </Grid>
            <Grid item display="flex" justifyContent="space-around" alignItems="center" md={3}   >

                {[{ label: 'Work', id: 'ourwork' }, { label: 'Contact', id: 'contactUs' }].map((section) => (
                    <Link
                        key={section.id}
                        to={section.id}
                        onClick={() => navigateAndScroll('/', section.id)}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className={`underline-link ${activeLink === section.id ? 'active' : ''}`}
                        style={{ fontFamily: 'sans-serif', fontSize: '1.6vw', fontWeight: '500', cursor: "pointer", color: '#737373' }}
                    >
                        {section.label.charAt(0).toUpperCase() + section.label.slice(1).replace(/([A-Z])/g, ' $1')}
                    </Link>
                ))}

                <Box>
                    <IconButton size='large' edge='start' onClick={openMenu}>
                        <MenuIcon sx={{ fontSize: 28, color: '#EB3335' }} />
                    </IconButton>


                    <Menu anchorEl={anchorNav} open={Boolean(anchorNav)} onClose={handleClose} sx={{
                        width: '100vw', height: '100vh', display: 'flex', top: 0, left: 0, position: 'fixed',
                        '& .MuiPaper-root': {
                            width: '100vw',
                            // height: '100vh',
                            margin: 0,
                            borderRadius: 0,

                        }
                    }}
                        anchorOrigin={{
                            vertical: 'top',  // 50px from the top
                            horizontal: 'left',  // 100px from the left
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}



                    >
                        <IconButton size='large' edge='start' onClick={handleClose} sx={{ position: 'absolute', top: '0', right: '5px' }}>
                            <CloseIcon sx={{ fontSize: 30, color: '#EB3335' }} />
                        </IconButton>
                        <MenuList sx={{
                            position: 'relative', width: '90%', marginLeft: '30px', display: 'flex', overflowY: 'hidden', height: '93vh',

                        }}>

                            <Box width='60%'>
                                <Link to='services' onClick={() => navigateAndScroll('/', 'services')} spy={true} smooth={true} duration={500}><MenuItem onClick={handleClose} sx={{ fontSize: '28px', fontWeight: '600', color: '#000', marginBottom: '10px' }}>Services</MenuItem></Link>
                                <Link to='ourwork' onClick={() => navigateAndScroll('/', 'ourwork')} spy={true} smooth={true} duration={500}><MenuItem onClick={handleClose} sx={{ fontSize: '28px', fontWeight: '600', color: '#000', marginBottom: '10px' }}>Work</MenuItem></Link>
                                <Link to='about' onClick={() => navigateAndScroll('/', 'about')} spy={true} smooth={true} duration={500}> <MenuItem onClick={handleClose} sx={{ fontSize: '28px', fontWeight: '600', color: '#000', marginBottom: '10px' }}>About Us</MenuItem></Link>
                                <Link to='testimonials' onClick={() => navigateAndScroll('/', 'testimonials')} spy={true} smooth={true} duration={500}> <MenuItem onClick={handleClose} sx={{ fontSize: '28px', fontWeight: '600', color: '#000', marginBottom: '10px' }}>Testimonials</MenuItem></Link>
                                <Link to='contactUs' onClick={() => navigateAndScroll('/', 'contactUs')} spy={true} smooth={true} duration={500}> <MenuItem onClick={handleClose} sx={{ fontSize: '28px', fontWeight: '600', color: '#000', marginBottom: '10px' }}>Get in touch</MenuItem></Link>
                                <Box sx={{ marginLeft: '1vw', marginTop: '3vw' }}>
                                    <a href="https://www.instagram.com/rasik_communications?igsh=MWJvcTk3cTVyajRvcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                                        <InstaGram width='40px' height='40px' />
                                    </a>
                                    <a href="https://www.linkedin.com/company/rasikcommunications/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '2vw' }}>
                                        <LinkedInIcon width='40px' height='40px' />
                                    </a>
                                </Box>
                            </Box>

                            <Box width='40%' height='94vh' sx={{ overflowY: 'hidden' }}>
                                <DotGrid rows={19} columns={9} dotSize={8} spacing={5} />
                            </Box>

                        </MenuList>



                    </Menu>

                </Box>
            </Grid>
        </Grid >
    );
}

export default DesktopHeader;
