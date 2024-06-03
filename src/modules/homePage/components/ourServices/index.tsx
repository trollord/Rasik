import { Grid, Typography,Box } from '@mui/material';
import { PrintMedia} from '../../../commonComponents/icons';



function OurServices() {
  return (
   <Grid container height='600px' width='100%'  p={5} id='services'>
    
    <Grid item  md={4} display='flex' flexDirection='column' justifyContent='center'>
      <Typography variant='h4' mb={3}>Our Services</Typography>
      <Typography>At Rasik Communications, when you entrust your work to us, it’s all about building a bond. A bond of trust. A bond of goodwill. A bond of togetherness. A fact endorsed by our ever-growing list of clients. We believe that every client has come to us with the assurance that he will get only the best.</Typography>
    </Grid>
    <Grid container item  md={8}> 
    
    <Grid item  width='100%' display='flex' justifyContent='space-evenly' >
      <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
        <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
        <span>Print media realeses</span>
      </Box>
      <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
      <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
        <span>Outdoor Media</span>
      </Box>
    </Grid>
    <Grid item  width='100%' display='flex' justifyContent='space-evenly' mt={3}>
    <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
      <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
        <span>E-commerce Solution</span>
      </Box>
      <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
      <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
        <span>Radio FM</span>
      </Box>
      <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
      <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
        <span>Creative</span>
      </Box>
    </Grid>
    <Grid item width='100%' display='flex' justifyContent='space-evenly' mt={3}>
    <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
      <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
        <span>Digital Marketing</span>
      </Box>
      <Box   width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
      <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
      <span style={{textAlign:'center'}}>Social Media Marketing</span>
      </Box>
    </Grid>
    
    </Grid>


    

   </Grid>
  )
}

export default OurServices;


