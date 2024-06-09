import { useState, MouseEvent } from 'react';
import { Button, Grid, Box, IconButton, Menu, MenuItem, MenuList } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';


export function MobileHeader() {
    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    const openMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget)
    }

    const closeMenu = () => {
        setAnchorNav(null)
    }



    return (
        <Grid container height="8vh" alignItems={"center"} justifyContent="center" direction={"row"} display="flex"  columnSpacing={8} bgcolor='#fff' position={'fixed'} top='0' left='0' zIndex={'100'}>


            <Grid item md={2}>
            <Box>
                <IconButton size='large' edge='start' onClick={openMenu}>
                    <MenuIcon  sx={{fontSize: 28}}/>
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
            <Grid item width={150} height={"60%"} md={2} sx={{ paddingLeft: "20px !important" }}>
                <img src="/image.png" alt="logo" width={"100%"} height={"100%"} />
            </Grid>


            <Grid item md={8}>
                <Link to='contactUs' spy={true} smooth={true} offset={-100} duration={500} style={{ color: '#000', fontFamily: 'sans-serif', fontSize: '22px', fontWeight: '600', cursor: "pointer" }}>

                    <Button sx={{
                        fontWeight: '600', fontFamily: 'inter', backgroundColor: '#EB3335', width: '140px', height: '40px', borderRadius: '10px', boxShadow: '0px 4px 4px 0px #00000040', fontSize: '16px', '&:hover': {
                            color: '#000',
                            backgroundColor: '#EB3335'
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

