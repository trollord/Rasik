import { useState, MouseEvent } from 'react';
import { Button, Grid, Box, IconButton, Menu, MenuItem, MenuList } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { InstaGram, LinkedInIcon } from '../icons';
import DotGrid from './DotGrid';


export function MobileHeader() {
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const openMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget)
    }



    const handleClose = () => {
        setAnchorNav(null)
    }


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
        <Grid container height="8vh" alignItems={"center"} justifyContent="space-between" direction={"row"} display="flex" columnSpacing={3.5} bgcolor='#fff' position={'fixed'} top='0' left='0' zIndex={'100'} pl={2} pr={2}>


            <Grid item width={140} height={"70%"} ml={2} xs={4} sx={{ paddingLeft: "10px !important" }}>
                <img src="/ras1-removebg-preview.svg" alt="logo" width={"100%"} height={"100%"} />
            </Grid>

            <Grid item xs={2}>
                <Box>
                    <IconButton size='large' edge='start' onClick={openMenu}>
                        <MenuIcon sx={{ fontSize: 28, color: '#EB3335' }} />
                    </IconButton>


                    <Menu open={Boolean(anchorNav)} onClose={handleClose} sx={{

                        width: '100vw', height: '95vh', display: 'flex', top: 0, left: 0, position: 'fixed', '& .MuiPaper-root': {
                            width: '100vw',
                            // height: '90vh',
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
                        }}>

                        <IconButton size='large' edge='start' onClick={handleClose} sx={{ position: 'absolute', top: '0', right: '1vw' }}>
                            <CloseIcon sx={{ fontSize: 30, color: '#EB3335' }} />
                        </IconButton>
                        <MenuList sx={{ position: 'relative', width: '80%', height: '60%' }}>

                            <Box width='100%'>
                                <Link to='services' onClick={() => navigateAndScroll('/', 'services')} spy={true} smooth={true} duration={500}><MenuItem onClick={handleClose} sx={{ fontSize: '28px', fontWeight: '600', color: '#000', marginBottom: '1.5vw' }}>Services</MenuItem></Link>
                                <Link to='ourwork' onClick={() => navigateAndScroll('/', 'ourwork')} spy={true} smooth={true} duration={500}><MenuItem onClick={handleClose} sx={{ fontSize: '28px', fontWeight: '600', color: '#000', marginBottom: '5px' }}>Work</MenuItem></Link>
                                <Link to='about' onClick={() => navigateAndScroll('/', 'about')} spy={true} smooth={true} duration={500}> <MenuItem onClick={handleClose} sx={{ fontSize: '28px', fontWeight: '600', color: '#000', marginBottom: '5px' }}>About Us</MenuItem></Link>
                                <Link to='testimonials' onClick={() => navigateAndScroll('/', 'testimonials')} spy={true} smooth={true} duration={500}> <MenuItem onClick={handleClose} sx={{ fontSize: '28px', fontWeight: '600', color: '#000', marginBottom: '5px' }}>Testimonials</MenuItem></Link>
                                <Link to='contactUs' onClick={() => navigateAndScroll('/', 'contactUs')} spy={true} smooth={true} duration={500}> <MenuItem onClick={handleClose} sx={{ fontSize: '28px', fontWeight: '600', color: '#000', marginBottom: '5px' }}>Get in touch</MenuItem></Link>
                                <Box sx={{ marginLeft: '5vw', marginTop: '11vw' }}>
                                    <a href="https://www.instagram.com/rasik_communications?igsh=MWJvcTk3cTVyajRvcQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                                        <InstaGram width='40px' height='40px' />
                                    </a>
                                    <a href="https://www.linkedin.com/company/rasikcommunications/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10vw' }}>
                                        <LinkedInIcon width='40px' height='40px' />
                                    </a>
                                </Box>
                            </Box>




                        </MenuList>
                        <Box width='100%' sx={{ overflowY: 'hidden', overflow: 'hidden', marginTop: '33vw', marginLeft: '4vw' }} height='40%' >
                            <DotGrid rows={8} columns={5} dotSize={8} spacing={5} />
                        </Box>

                    </Menu>

                </Box>

            </Grid>



            {/* <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to='contactUs' onClick={() => navigateAndScroll('/', 'contactUs')} spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}>

                    <Button sx={{
                        fontWeight: '500', fontFamily: 'inter', backgroundColor: '#EB3335', width: '110px', height: '35px', borderRadius: '10px', boxShadow: '0px 4px 4px 0px #00000040', fontSize: '16px', '&:hover': {
                            color: '#000',
                            backgroundColor: '#EB3335',

                        }, color: "#FFFFFF", textTransform: 'none'
                    }}>
                        Contact us
                    </Button>
                </Link>
            </Grid> */}



        </Grid>
    );
}

export default MobileHeader;

