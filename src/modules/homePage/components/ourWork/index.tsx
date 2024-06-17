import { Grid, Typography, Box, Modal } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../../../../App.css';


import { useState, useEffect } from 'react';

const overseasImages = [
  {
    img1: 'assets/overseas-1.png',
    img2: 'assets/overseas-2.png'

  },
  {
    img1: 'assets/overseas-3.png',
    img2: 'assets/overseas-4.png'

  },
  {
    img1: 'assets/overseas-5.png',
    img2: 'assets/overseas-6.png'

  },

];

const printClientImg = [
  {
    img1: 'assets/printwork-1.png',
    img2: 'assets/printwork-2.png'

  },
  {
    img1: 'assets/printwork-3.png',
    img2: 'assets/printwork-4.png'

  },
  {
    img1: 'assets/printwork-5.png',
    img2: 'assets/printwork-6.png'

  },

];



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50vw',
  height: '50vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: '10px'
};









function OurWork() {

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleFirst, setVisibleFirst] = useState(false);
  const [visibleSecond, setVisibleSecond] = useState(false);
  const [visibleThird, setVisibleThird] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);


  const handleOpen = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    const handleScroll = () => {
      const firstCarousel = document.getElementById('first-carousel');
      const secondCarousel = document.getElementById('second-carousel');
      const thirdCarousel = document.getElementById('third-carousel');

      if (firstCarousel) {
        const rect = firstCarousel.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {

          setVisibleFirst(true);
        }
      }

      if (secondCarousel) {
        const rect = secondCarousel.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {

          setVisibleSecond(true);
        }
      }

      if (thirdCarousel) {
        const rect = thirdCarousel.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {

          setVisibleThird(true);
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleScroll();


    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);




  return (
    <Grid className='our-work' sx={{ height: { xs: 'auto', md: '120vh' }, padding: { xs: '30px 10px 80px', md: '0' } }} width='100%' container id='ourwork' bgcolor='#000' color='#fff'  >


      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>

          {selectedImage && (
            <img src={selectedImage} alt="Modal Content" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          )}
        </Box>
      </Modal>
      {/* height of our work heading on desktop is 18% */}
      <Grid item sx={{ height: { xs: '5%', md: '18%' }, marginBottom: { xs: '5px', md: '0' }, paddingTop: { xs: '0', md: '10vh' } }} display="flex" alignItems="center" justifyContent="flex-start" flexDirection="column" width="100%" >
        <Typography sx={{ fontWeight: '600', fontSize: { xs: '45px', md: '64px' } }} textAlign='center'>Our Work</Typography>
        {/* <Typography textAlign='center' fontSize="16px" >Your Vision, Our Expertise</Typography> */}
      </Grid>
      {/* height of img carausl img grid  on desktop is 82% */}
      <Grid container item sx={{ height: { xs: '90%', md: '82%' }, paddingTop: { xs: '0', md: '15vh' } }} >

        <Grid item id="first-carousel" className={visibleFirst ? 'fade-in-left' : ''} md={4} sm={5} display='flex' alignItems='center' flexDirection='column' sx={{ margin: { xs: 'auto', md: '0' }, width: { xs: '85%' }, marginBottom: { xs: '20px', md: '0' } }} >
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Print Clients</Typography>

          <Box bgcolor='rgba(255,255,255,0.2)' pt={2} pb={1} sx={{ borderRadius: '10px', width: { xs: '95%', md: '70%' } }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false} interval={5000}>
              {printClientImg.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: { xs: '45vh', md: '50vh' } }}>

                  <Box onClick={() => handleOpen(img.img1)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img1} className='ourwork-img' style={{ height: '100%' }} />
                  </Box>
                  <Box onClick={() => handleOpen(img.img2)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img2} className='ourwork-img' style={{ height: '100%' }} />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>

        </Grid>


        {/* className={visibleSecond ? 'fade-in-bottom' : ''} */}
        <Grid item id="second-carousel" className={visibleSecond ? (isMobile ? 'fade-in-right' : 'fade-in-bottom') : ''} md={4} display='flex' alignItems='center' flexDirection='column' sx={{ margin: { xs: 'auto', md: '0' }, width: { xs: '85%' }, marginBottom: { xs: '20px', md: '0' } }}>
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Digital Clients</Typography>
          <Box bgcolor='rgba(255,255,255,0.2)' pt={2} pb={1} sx={{ borderRadius: '10px', width: { xs: '95%', md: '70%' } }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false} interval={5000}>
              {overseasImages.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: { xs: '45vh', md: '50vh' } }}>

                  <Box onClick={() => handleOpen(img.img1)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img1} className='ourwork-img' style={{ height: '100%' }} />
                  </Box>
                  <Box onClick={() => handleOpen(img.img2)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img2} className='ourwork-img' style={{ height: '100%' }} />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Grid>



        <Grid item className={visibleThird ? (isMobile ? 'fade-in-left' : 'fade-in-right') : ''} id="third-carousel" md={4} display='flex' alignItems='center' flexDirection='column' sx={{ margin: { xs: 'auto', md: '0' }, width: { xs: '85%' } }}  >
          <Typography variant='h6' mb={2} style={{ fontWeight: '600' }}>Overseas Clients</Typography>
          <Box bgcolor='rgba(255,255,255,0.2)' pt={2} pb={1} sx={{ borderRadius: '10px', width: { xs: '95%', md: '70%' } }}
          >
            <Carousel className='.carousel' autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false} interval={5000}>
              {overseasImages.map((img, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 2, height: { xs: '45vh', md: '50vh' } }}>

                  <Box onClick={() => handleOpen(img.img1)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img1} className='ourwork-img' style={{ height: '100%', }} />

                  </Box>
                  <Box onClick={() => handleOpen(img.img2)} sx={{ height: { xs: '42%', md: '50%' }, width: { xs: '79%', md: '77%' }, backgroundColor: '#F1E5D1', marginBottom: '50px', borderRadius: '10px', cursor: 'pointer' }}>
                    <img src={img.img2} className='ourwork-img' style={{ height: '100%' }} />
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Grid>

      </Grid >


    </Grid >
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