import { Grid, Typography, Box } from '@mui/material';
import { PrintMedia, RadioFM, DigitalMarketing, Ecommerce, Creative, SocialMarketing } from '../../../commonComponents/icons';
import { useNavigate } from 'react-router-dom';
import { stateProvider } from "../../../../context";




function OurServices() {
  const { dispatch } = stateProvider();

  const navigate = useNavigate();


  const handleClick = (service: string) => {
    navigate(`/services/${service}`)

  }

  return (
    // height='85vh'

    <Grid container className='ourservice-container' sx={{ height: { xs: 'auto', md: '85vh' } }} width='100%' id='services' display='flex' justifyContent='space-evenly' bgcolor='#000' color='#fff'
    >

      <Grid item md={5} display='flex' flexDirection='column' justifyContent='center' sx={{ textAlign: { xs: 'center', md: 'left' }, padding: { xs: '20px', md: '40px' } }}>
        <Typography sx={{ fontWeight: { xs: '700', md: '700' }, fontSize: { xs: '40px', md: '60px' }, marginBottom: { xs: '8px', md: '24px' } }}>Our Services</Typography>
        <Typography sx={{ fontSize: { xs: '15px', md: '20px' } }}>At Rasik Communications, when you entrust your work to us, it’s all about building a bond. A bond of trust. A bond of goodwill. A bond of togetherness. A fact endorsed by our ever-growing list of clients. We believe that every client has come to us with the assurance that he will get only the best.</Typography>
      </Grid>
      <Grid container item md={5} display='flex' justifyContent='space-evenly' alignItems='center'>
        <Grid item md={3} xs={6} display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
          <Box onClick={() => { handleClick('printMedia') }} sx={{ width: { xs: '140px', md: '160px' }, height: { xs: '140px', md: '160px' } }} bgcolor='#fff' color='#000' m={3} border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box sx={{ width: { xs: '65px', md: '80px' }, height: { xs: '65px', md: '80px' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><PrintMedia width="50" height="50" /></Box>
            <Typography sx={{
              fontSize: { xs: '14px', md: '17px' },
              textAlign: 'center', margin: '5px',
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              wordBreak: 'normal',
              width: "65%",
            }} >Print media realeses</Typography>
          </Box>
          <Box onClick={() => { handleClick('radioFm') }} sx={{ width: { xs: '140px', md: '160px' }, height: { xs: '140px', md: '160px' } }} m={3} bgcolor='#fff' color='#000' width='160px' height='160px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box sx={{ width: { xs: '65px', md: '80px' }, height: { xs: '65px', md: '80px' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><RadioFM width="55" height="55" /></Box>
            <Typography sx={{ fontSize: { xs: '14px', md: '17px' } }}>Radio FM</Typography>
          </Box>
          <Box onClick={() => { handleClick('digitalMarketing') }} sx={{ width: { xs: '140px', md: '160px' }, height: { xs: '140px', md: '160px' } }} m={3} bgcolor='#fff' color='#000' width='160px' height='160px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box sx={{ width: { xs: '65px', md: '80px' }, height: { xs: '65px', md: '80px' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><DigitalMarketing width="50" height="50" /></Box>
            <Typography sx={{
              fontSize: { xs: '14px', md: '17px' },
              textAlign: 'center', margin: '5px',
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              wordBreak: 'normal',
              width: "65%",
            }}>Digital Marketing</Typography>
          </Box>
        </Grid>
        <Grid item md={3} xs={6} display='flex' justifyContent='center' flexDirection='column' alignItems='center' >
          <Box onClick={() => { handleClick('eCommerceSolution') }} sx={{ width: { xs: '140px', md: '160px' }, height: { xs: '140px', md: '160px' } }} m={3} bgcolor='#fff' color='#000' width='160px' height='160px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box sx={{ width: { xs: '65px', md: '80px' }, height: { xs: '65px', md: '80px' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Ecommerce width="50" height="50" /></Box>
            <Typography sx={{
              fontSize: { xs: '14px', md: '17px' },
              textAlign: 'center', margin: '5px',
              width: "100%",
            }} >E-commerce Solution</Typography>
          </Box>
          <Box onClick={() => { handleClick('creative') }} sx={{ width: { xs: '140px', md: '160px' }, height: { xs: '140px', md: '160px' } }} m={3} bgcolor='#fff' color='#000' width='160px' height='160px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box sx={{ width: { xs: '65px', md: '80px' }, height: { xs: '65px', md: '80px' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Creative width="50" height="50" /></Box>
            <Typography sx={{ fontSize: { xs: '14px', md: '17px' } }}>Creative</Typography>
          </Box>
          <Box onClick={() => { handleClick('socialMediaMarketing') }} sx={{ width: { xs: '140px', md: '160px' }, height: { xs: '140px', md: '160px' } }} m={3} bgcolor='#fff' color='#000' width='160px' height='160px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box sx={{ width: { xs: '65px', md: '80px' }, height: { xs: '65px', md: '80px' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><SocialMarketing width="50" height="50" /></Box>
            <Typography sx={{ fontSize: { xs: '14px', md: '17px' }, textAlign: 'center' }} >Social Media Marketing</Typography>
          </Box>

        </Grid>


      </Grid>
    </Grid>


  )
}

export default OurServices;


// <Grid item  width='100%' display='flex' justifyContent='space-evenly' >
// <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
//   <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
//   <span>Print media realeses</span>
// </Box>
// <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
// <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
//   <span>Outdoor Media</span>
// </Box>
// </Grid>
// <Grid item  width='100%' display='flex' justifyContent='space-evenly' mt={3}>
// <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
// <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
//   <span>E-commerce Solution</span>
// </Box>
// <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
// <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
//   <span>Radio FM</span>
// </Box>
// <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
// <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
//   <span>Creative</span>
// </Box>
// </Grid>
// <Grid item width='100%' display='flex' justifyContent='space-evenly' mt={3}>
// <Box  width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
// <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
//   <span>Digital Marketing</span>
// </Box>
// <Box   width='150px' height='150px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='3px'>
// <div style={{width:'60px',height:'60px',backgroundColor:'#F1E5D1',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}><PrintMedia/></div>
// <span style={{textAlign:'center'}}>Social Media Marketing</span>
// </Box>
// </Grid>