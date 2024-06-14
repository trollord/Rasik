import { useState, MouseEvent } from 'react';
import { Button, Grid, Box, IconButton, Menu, MenuItem, MenuList } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';


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
        <Grid container height="8vh" alignItems={"center"} justifyContent="center" direction={"row"} display="flex" columnSpacing={3.5} bgcolor='#fff' position={'fixed'} top='0' left='0' zIndex={'100'} pl={2} pr={2}>


            <Grid item xs={2}>
                <Box>
                    <IconButton size='large' edge='start' onClick={openMenu}>
                        <MenuIcon sx={{ fontSize: 28 }} />
                    </IconButton>


                    <Menu open={Boolean(anchorNav)} onClose={handleClose} sx={{ display: { xs: 'flex', md: 'none' }, '& .MuiMenu-list': { width: '180px' } }}
                        anchorOrigin={{
                            vertical: 20,  // 50px from the top
                            horizontal: 20,  // 100px from the left
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}>
                        <MenuList>
                            <Link to='services' onClick={() => navigateAndScroll('/', 'services')} spy={true} smooth={true} duration={500}><MenuItem onClick={handleClose}>Services</MenuItem></Link>
                            <Link to='ourwork' onClick={() => navigateAndScroll('/', 'ourwork')} spy={true} smooth={true} duration={500}><MenuItem onClick={handleClose}>Our work</MenuItem></Link>
                            <Link to='testimonials' onClick={() => navigateAndScroll('/', 'testimonials')} spy={true} smooth={true} duration={500}> <MenuItem onClick={handleClose}>Testimonials</MenuItem></Link>
                            <Link to='about' onClick={() => navigateAndScroll('/', 'about')} spy={true} smooth={true} duration={500}> <MenuItem onClick={handleClose}>About us</MenuItem></Link>

                        </MenuList>

                    </Menu>

                </Box>

            </Grid>
            <Grid item width={140} height={"60%"} xs={4} sx={{ paddingLeft: "10px !important" }}>
                <img src="/ras1-removebg-preview.svg" alt="logo" width={"100%"} height={"100%"} />
            </Grid>


            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
            </Grid>



        </Grid>
    );
}

export default MobileHeader;

