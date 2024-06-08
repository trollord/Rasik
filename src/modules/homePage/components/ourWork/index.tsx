import { Grid, Typography, Box } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const images = [
  {
    img1: 'assets/logo.png',
    img2: 'assets/logo.png'

  },
  {
    img1: 'assets/logo.png',
    img2: 'assets/logo.png'

  },
  {
    img1: 'assets/logo.png',
    img2: 'assets/logo.png'

  },

];


function OurWork() {

  return (
    <Grid height='85vh' width='100%' container id='ourwork' bgcolor='#000' color='#fff'

    >
      <Grid item height="18%" display="flex" alignItems="center" justifyContent="flex-start" pt={2} flexDirection="column" width="100%">
        <Typography variant='h4' style={{ fontWeight: '700' }} textAlign='center'>Our Work</Typography>
        <Typography textAlign='center' fontSize="16px" >Your Vision, Our Expertise</Typography>
      </Grid>
      <Grid container item height="82%">
      <Grid item md={4} display='flex' alignItems='center' flexDirection='column'>
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Print Clients</Typography>
          <Box width='70%' bgcolor='rgba(255,255,255,0.2)' pt={2} pb={1} sx={{ borderRadius: '10px' }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
              {images.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: "50vh" }}>

                  <Box style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', borderRadius: '10px' }}>
                    <img src={img.img1} style={{ height: '100%', width: '120px', }} />
                  </Box>
                  <Box style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px' }}>
                    <img src={img.img1} style={{ height: '100%', width: '120px', }} />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Grid>
        <Grid item md={4} display='flex' alignItems='center' flexDirection='column'>
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Print Clients</Typography>
          <Box width='70%' bgcolor='rgba(255,255,255,0.2)' pt={2} pb={1} sx={{ borderRadius: '10px' }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
              {images.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: "50vh" }}>

                  <Box style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', borderRadius: '10px' }}>
                    <img src={img.img1} style={{ height: '100%', width: '120px', }} />
                  </Box>
                  <Box style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px' }}>
                    <img src={img.img1} style={{ height: '100%', width: '120px', }} />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Grid>

        <Grid item md={4} display='flex' alignItems='center' flexDirection='column'>
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Print Clients</Typography>
          <Box width='70%' bgcolor='rgba(255,255,255,0.2)' pt={2} pb={1} sx={{ borderRadius: '10px' }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
              {images.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: "50vh" }}>

                  <Box style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', borderRadius: '10px' }}>
                    <img src={img.img1} style={{ height: '100%', width: '120px', }} />
                  </Box>
                  <Box style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px' }}>
                    <img src={img.img1} style={{ height: '100%', width: '120px', }} />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
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