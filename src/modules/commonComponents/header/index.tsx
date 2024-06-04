import { useState ,MouseEvent} from 'react';
import { Button, Grid,Box, IconButton ,Menu ,MenuItem,MenuList} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-scroll';


export function Header() {
   const [anchorNav,setAnchorNav] = useState<null | HTMLElement>(null);

   const openMenu = (event:MouseEvent<HTMLElement>) =>{
      setAnchorNav(event.currentTarget)
   }

   const closeMenu = () =>{
   setAnchorNav(null)
   }
   
   // to fixed the navbar :-   position={'fixed'} top='0' left='0' zIndex={'1'}

  return (
    <Grid container  height="15vh" alignItems={"center"} justifyContent="space-between" direction={"row"}  display="flex" p={3} columnSpacing={8}>
       
         <Grid  item width={100}  height={50} md={2}>
           <img src="/image.png" alt="logo" width={"100%"} height={"100%"}/>

         </Grid>
                   

       <Grid item display='flex' justifyContent='space-between' alignItems='center' md={10}  sx={{display:{xs:'none',md:'flex'}}}>
           <Link  to='services'  spy={true} smooth={true}  offset={-100} duration={500}  style={{color:'#000',fontFamily:'inter',fontSize:'24px',fontWeight:'600'}}>
           Services
           </Link>
           <Link   to='ourwork'  spy={true} smooth={true}  offset={-100} duration={500} style={{color:'#000',fontFamily:'inter',fontSize:'24px',fontWeight:'600'}}>
           Our work
           </Link>
           <Link  to='testimonials'  spy={true} smooth={true}  offset={-100} duration={500} style={{color:'#000',fontFamily:'inter',fontSize:'24px',fontWeight:'600'}}>
           Testimonials
           </Link>
           <Link  to='about'   spy={true} smooth={true}  offset={-100} duration={500}style={{color:'#000',fontFamily:'inter',fontSize:'24px',fontWeight:'600'}}>
           About us
           </Link>
           <Button sx={{ backgroundColor:'#EB3335' ,width:'169px',height:'38px',borderRadius:'10px',boxShadow: '0px 4px 4px 0px #00000040', color:"#FFFFFF"}}>
              Contact Us
           </Button> 
       </Grid>
        

   
        <Box sx={{display:{xs:'flex',md:'none'}}}>
         <IconButton size='large' edge='start' onClick={openMenu}>
            <MenuIcon/>
         </IconButton>

       
         <Menu  open={Boolean(anchorNav)} onClose={closeMenu} sx={{display:{xs:'flex',md:'none'}}}>
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

