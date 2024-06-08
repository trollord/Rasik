import { Grid, Typography, Box } from '@mui/material';
import { PrintMedia, RadioFM, DigitalMarketing, Ecommerce, Creative, SocialMarketing } from '../../../commonComponents/icons';
import { useNavigate } from 'react-router-dom';


function OurServices() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/services')
  }

  return (

    <Grid container height='85vh' width='100%' id='services' display='flex' justifyContent='space-evenly' bgcolor='#000' color='#fff'
    >

      <Grid item md={5} display='flex' flexDirection='column' justifyContent='center' p={5}>
        <Typography variant='h2' mb={3} style={{ fontWeight: '700' }}>Our Services</Typography>
        <Typography variant='h6'>At Rasik Communications, when you entrust your work to us, it’s all about building a bond. A bond of trust. A bond of goodwill. A bond of togetherness. A fact endorsed by our ever-growing list of clients. We believe that every client has come to us with the assurance that he will get only the best.</Typography>
      </Grid>
      <Grid container item md={5} display='flex' justifyContent='space-evenly' alignItems='center'>
        <Grid item md={3} >
          <Box onClick={handleClick} width='160px' height='160px' bgcolor='#fff' color='#000' m={3} border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box style={{ width: '80px', height: '80px', backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><PrintMedia /></Box>
            <Typography sx={{
              textAlign: 'center', margin: '5px',
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              wordBreak: 'normal',
              width: "65%",
            }} >Print media realeses</Typography>
          </Box>
          <Box onClick={handleClick} m={3} bgcolor='#fff' color='#000' width='160px' height='160px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box style={{ width: '80px', height: '80px', backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><RadioFM /></Box>
            <Typography >Radio FM</Typography>
          </Box>
          <Box onClick={handleClick} m={3} bgcolor='#fff' color='#000' width='160px' height='160px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box style={{ width: '80px', height: '80px', backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><DigitalMarketing /></Box>
            <Typography sx={{
              textAlign: 'center', margin: '5px',
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              wordBreak: 'normal',
              width: "65%",
            }}>Digital Marketing</Typography>
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box onClick={handleClick} m={3} bgcolor='#fff' color='#000' width='160px' height='160px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box style={{ width: '80px', height: '80px', backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Ecommerce /></Box>
            <Typography sx={{
              textAlign: 'center', margin: '5px',
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              wordBreak: 'normal',
              width: "65%",
            }} >E-commerce Solution</Typography>
          </Box>
          <Box onClick={handleClick} m={3} bgcolor='#fff' color='#000' width='160px' height='160px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box style={{ width: '80px', height: '80px', backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Creative /></Box>
            <Typography >Creative</Typography>
          </Box>
          <Box onClick={handleClick} m={3} bgcolor='#fff' color='#000' width='160px' height='160px' border={1} borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
            <Box style={{ width: '80px', height: '80px', backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><SocialMarketing /></Box>
            <Typography style={{ textAlign: 'center' }} >Social Media Marketing</Typography>
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