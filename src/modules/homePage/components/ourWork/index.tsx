import { Grid, Typography ,Box} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-responsive-carousel';



const images = [
    {
      img1:'assets/logo.png',
      img2:'assets/logo.png'
     
    },
    {
      img1:'assets/logo.png',
      img2:'assets/logo.png'

    },
    {
      img1:'assets/logo.png',
      img2:'assets/logo.png'

    },
   
  ];


function OurWork() {
  
  return (
    <Grid height='700px' width='100%' container p={5} display='flex' alignItems='center'  flexDirection='column'  id='ourwork' gap='40px' bgcolor='#000' color='#fff'
   
    >
        <Grid item>
            <Typography variant='h3' style={{fontWeight:'700'}} textAlign='center'>Our Work</Typography>
            <Typography  textAlign='center'>Your Vision, Our Expertise</Typography>
        </Grid>
        <Grid container item >
            <Grid  item md={4}  display='flex' alignItems='center' flexDirection='column'>
                <Typography variant='h5' mb={2} style={{fontWeight:'600'}}>Print Clients</Typography>
                <Box   height='450px'  width='350px'  bgcolor='rgba(255,255,255,0.2)' p={3} sx={{borderRadius:'10px'}}
                 >
                <Carousel className='.carousel'  autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false}  showStatus={false}>
        {images.map((img,index) => (
        <Box key={index} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'20px'}}>
           
          <Box style={{height:'180px', width:'250px',backgroundColor:'#F1E5D1',borderRadius:'10px'}}>
            <img src={img.img1} style={{height:'120px', width:'120px',}}/>
          </Box>
          <Box style={{height:'180px', width:'250px',backgroundColor:'#F1E5D1',marginBottom:'50px',borderRadius:'10px'}}>
            <img src={img.img1} style={{height:'120px', width:'120px',}}/>
          </Box>
        </Box>
      ))}
              </Carousel></Box>     
            </Grid>
            <Grid  item md={4}  display='flex' alignItems='center' flexDirection='column'>
                <Typography variant='h5'mb={2} style={{fontWeight:'600'}}>Digital Clients</Typography>
                <Box height='450px'  width='350px'  bgcolor='rgba(255,255,255,0.2)' p={3} sx={{borderRadius:'10px'}}>
                <Carousel className='.carousel'  autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false}  showStatus={false}>
        {images.map((img,index) => (
        <Box key={index} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'20px'}}>
           
          <Box style={{height:'180px', width:'250px',backgroundColor:'#F1E5D1',borderRadius:'10px'}}>
            <img src={img.img1} style={{height:'120px', width:'120px',}}/>
          </Box>
          <Box style={{height:'180px', width:'250px',backgroundColor:'#F1E5D1',marginBottom:'50px',borderRadius:'10px'}}>
            <img src={img.img1} style={{height:'120px', width:'120px',}}/>
          </Box>
        </Box>
      ))}
              </Carousel></Box>
            </Grid>
            <Grid item md={4}  display='flex' alignItems='center' flexDirection='column'>
                <Typography variant='h5' mb={2} style={{fontWeight:'600'}}>Overseas Clients</Typography>
                <Box height='450px'  width='350px'  bgcolor='rgba(255,255,255,0.2)' p={3} sx={{borderRadius:'10px'}}>
                <Carousel className='.carousel'  autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false}  showStatus={false}>
        {images.map((img,index) => (
        <Box key={index} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'20px'}}>
           
          <Box style={{height:'180px', width:'250px',backgroundColor:'#F1E5D1',borderRadius:'10px'}}>
            <img src={img.img1} style={{height:'120px', width:'120px',}}/>
          </Box>
          <Box style={{height:'180px', width:'250px',backgroundColor:'#F1E5D1',marginBottom:'50px',borderRadius:'10px'}}>
            <img src={img.img1} style={{height:'120px', width:'120px',}}/>
          </Box>
        </Box>
      ))}
              </Carousel></Box>
            </Grid>
        </Grid>
        

    </Grid>
  )
}

export default OurWork;


{/* <Grid height='600px' width='100%'  border={2} container p={5} display='flex' alignItems='center'  flexDirection='column' gap='40px' id='ourwork'>
<Grid item>
    <Typography variant='h3'>Our Work</Typography>
    <Typography>Your Vision, Our Expertise</Typography>
</Grid>
<Grid container item >
    <Grid md={6} border={2} display='flex' alignItems='center' flexDirection='column'>
        <Typography>Retail Clients</Typography>
        <Box width='300px' height='300px' border={1}>ccccccccccccccccc</Box>
    </Grid>
    <Grid md={6} border={2} display='flex' alignItems='center' flexDirection='column'>
        <Typography>Overseas Clients</Typography>
        <Box width='300px' height='300px' border={1}>ccccccccccccccccc</Box>
    </Grid>
</Grid>


</Grid> */}