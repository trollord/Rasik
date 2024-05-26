import { useState ,MouseEvent} from 'react';
import { Button, Grid, Typography,Box, IconButton ,Menu ,MenuItem,MenuList} from '@mui/material';
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
    <Grid container  height="15vh" alignItems={"center"} justifyContent="space-evenly" direction={"row"} border={1} display="flex">
       
         <Box width={100}  height={ 50}>
           <img src="/image.png" alt="logo" width={"100%"} height={"100%"}/>

         </Box>
           {/* <SVGComponent></SVGComponent> */}

       
        <Typography fontWeight={600} fontSize={24} fontFamily="Inter">
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
           <Button sx={{ backgroundColor:'#EB3335' ,width:'169px',height:'38px',borderRadius:'10px',boxShadow: '0px 4px 4px 0px #00000040', color:"#FFFFFF"}}>
              Contact Us
           </Button> 

   
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
  );
}

export default Header;
