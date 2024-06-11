import { useState, MouseEvent } from 'react';
import { Button, Grid, Box, IconButton, Menu, MenuItem, MenuList } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';




export function DesktopHeader() {
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
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

    const openMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget)
    }

    const closeMenu = () => {
        setAnchorNav(null)
    }



    // to fixed the navbar :-  

    return (
        <Grid container height="15vh" alignItems={"center"} justifyContent="center" direction={"row"} display="flex" pl={5} pr={3} columnSpacing={8} bgcolor='#fff' position={'fixed'} top='0' left='0' zIndex={'100'}>

            <Grid item width={100} height={"82%"} md={2} sx={{ paddingLeft: "90px !important" }}>
                <img src="/image.png" alt="logo" width={"100%"} height={"100%"} />
            </Grid>


            <Grid item display='flex' justifyContent='space-around' alignItems='center' md={10} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Link to='services' onClick={() => navigateAndScroll('/', 'services')} spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}
                >
                    Services
                </Link>
                <Link to='ourwork' onClick={() => navigateAndScroll('/', 'ourwork')} spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}>
                    Our work
                </Link>
                <Link to='testimonials' onClick={() => navigateAndScroll('/', 'testimonials')} spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}>
                    Testimonials
                </Link>
                <Link to='about' onClick={() => navigateAndScroll('/', 'about')} spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}>
                    About us
                </Link>

                <Link to='contactUs' onClick={() => navigateAndScroll('/', 'contactUs')} spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}>

                    <Button sx={{
                        fontWeight: '600', fontFamily: 'inter', backgroundColor: '#EB3335', width: '169px', height: '48px', borderRadius: '10px', boxShadow: '0px 4px 4px 0px #00000040', fontSize: '22px', '&:hover': {
                            color: '#000',
                            backgroundColor: '#EB3335'
                        }, color: "#FFFFFF", textTransform: 'none'
                    }}>
                        Contact us
                    </Button>
                </Link>
            </Grid>



            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton size='large' edge='start' onClick={openMenu}>
                    <MenuIcon />
                </IconButton>


                <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <MenuList>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Our work</MenuItem>
                        <MenuItem>Testimonials</MenuItem>
                        <MenuItem>About us</MenuItem>
                        <MenuItem>Contact us</MenuItem>
                    </MenuList>

                </Menu>







            </Box>



        </Grid>
    );
}

export default DesktopHeader;

