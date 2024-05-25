import { useState ,MouseEvent} from 'react';
import { Button, Grid, Stack, Typography,Box, IconButton ,Menu ,MenuItem,MenuList} from '@mui/material';
import{ SVGComponent} from '../icons';
import MenuIcon from '@mui/icons-material/Menu';

export function Header() {
   const [anchorNav,setAnchorNav] = useState<null | HTMLElement>(null);

   const openMenu = (event:MouseEvent<HTMLElement>) =>{
      setAnchorNav(event.currentTarget)
   }

   const closeMenu = () =>{
   setAnchorNav(null)
   }
   
  return (
    <Grid container  height="15vh" >
        <Grid item xs={2}>
           <SVGComponent></SVGComponent>
        </Grid>
          
        <Grid item xs={10} alignItems="center" justifyContent="center">
        <Stack spacing={2} direction="row"  justifyContent="space-between" alignItems="center"  height="100%"  sx={{fontWeight:'700',fontSize:'24px',color:'#000',display:{xs:'none',md:'flex'}}}>
        <Typography>
           Services
           </Typography>
           <Typography>
           Our work
           </Typography>
           <Typography>
           Testimonials
           </Typography>
           <Typography>
           About us
           </Typography>
           <Button sx={{ backgroundColor:'#D9D9D9' ,width:'169px',height:'38px',borderRadius:'10px'}}>
              Contact Us
           </Button> 

        </Stack>
        <Box sx={{display:{xs:'flex',md:'none'},justifyContent: 'flex-end',alignItems: 'flex-end' }}>
         <IconButton size='large' edge='start' onClick={openMenu}>
            <MenuIcon/>
         </IconButton>

        
         <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{display:{xs:'flex',md:'none'}}}>
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
    </Grid>
  );
}

export default Header;
