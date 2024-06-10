import { Grid, Typography, Box, Modal } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { useState } from 'react';
import { Padding } from '@mui/icons-material';

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

const style = {
  position: 'absolute' as 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  height: '40vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: '10px'
};

function OurWork() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid sx={{ height: { xs: 'auto', md: '85vh' }, padding: { xs: '10px 10px 60px', md: '0' } }} width='100%' container id='ourwork' bgcolor='#000' color='#fff' border={2}>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      {/* height of our work heading on desktop is 18% */}
      <Grid item sx={{ height: { xs: '10%', md: '18%' }, marginBottom: { xs: '10px', md: '0' } }} display="flex" alignItems="center" justifyContent="flex-start" pt={2} flexDirection="column" width="100%">
        <Typography variant='h4' style={{ fontWeight: '700' }} textAlign='center'>Our Work</Typography>
        <Typography textAlign='center' fontSize="16px" >Your Vision, Our Expertise</Typography>
      </Grid>
      {/* height of img carausl img grid  on desktop is 82% */}
      <Grid container item sx={{ height: { xs: '90%', md: '82%' } }} >
        <Grid item md={4} xs={6} display='flex' alignItems='center' flexDirection='column' sx={{ marginBottom: '20px', md: '0' }} >
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Print Clients</Typography>
          <Box bgcolor='rgba(255,255,255,0.2)' pt={2} pb={1} sx={{ borderRadius: '10px', width: { xs: '90%', md: '70%' } }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
              {images.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: "50vh" }}>

                  <Box onClick={handleOpen} style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', borderRadius: '10px' }}>
                    <img src={img.img1} style={{ height: '100%', width: '120px', }} />
                  </Box>
                  <Box onClick={handleOpen} style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px' }}>
                    <img src={img.img1} style={{ height: '100%', width: '120px', }} />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Grid>
        <Grid item md={4} xs={6} display='flex' alignItems='center' flexDirection='column' sx={{ marginBottom: '20px', md: '0' }}>
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Print Clients</Typography>
          <Box bgcolor='rgba(255,255,255,0.2)' pt={2} pb={1} sx={{ borderRadius: '10px', width: { xs: '90%', md: '70%' } }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
              {images.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: "50vh" }}>

                  <Box onClick={handleOpen} style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', borderRadius: '10px' }}>
                    <img src={img.img1} style={{ height: '100%', width: '120px', }} />
                  </Box>
                  <Box onClick={handleOpen} style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px' }}>
                    <img src={img.img1} style={{ height: '100%', width: '120px', }} />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Grid>

        <Grid item md={4} xs={6} display='flex' alignItems='center' flexDirection='column' sx={{ margin: { xs: 'auto', md: '0' } }} >
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Print Clients</Typography>
          <Box bgcolor='rgba(255,255,255,0.2)' pt={2} pb={1} sx={{ borderRadius: '10px', width: { xs: '90%', md: '70%' } }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
              {images.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: "50vh" }}>

                  <Box onClick={handleOpen} style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', borderRadius: '10px' }}>
                    <img src={img.img1} style={{ height: '100%', width: '120px', }} />
                  </Box>
                  <Box onClick={handleOpen} style={{ height: '50%', width: '77%', backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px' }}>
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