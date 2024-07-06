


import { Grid, Typography, Box, Fade } from '@mui/material';
import { PrintMedia, RadioFM, DigitalMarketing, Ecommerce, Creative, SocialMarketing } from '../../../commonComponents/icons';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect } from 'react';

interface FadeInBoxProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'right';
}

const FadeInBox: React.FC<FadeInBoxProps> = ({ children, delay = 0, direction = 'left' }) => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const triggerHeight = window.innerHeight * 0.8;
    const element = document.getElementById(`fade-${direction}`);
    if (element) {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < triggerHeight) {
        setVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeStyles = {
    transition: `opacity 1s ease-out ${delay}ms, transform 1s ease-out ${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : direction === 'left' ? 'translateX(-100px)' : 'translateX(100px)',
  };

  return (
    <Box id={`fade-${direction}`} sx={{ ...fadeStyles }}>
      {children}
    </Box>
  );
};




function OurServices() {

  const isMobile = useMediaQuery('(max-width:600px)');

  const navigate = useNavigate();


  const handleClick = (service: string) => {
    navigate(`/services/${service}`)

  }






  return (
    <Grid container bgcolor='#FFF6E7' className='our-service' sx={{ height: { xs: 'auto', md: '100vh' }, padding: { md: '0 0 0', xs: '0' } }} width='100%' id='services' display='flex' justifyContent='space-evenly' color='#000'
    >

      <Grid item md={12} display='flex' flexDirection='column' justifyContent='center' sx={{ textAlign: { xs: 'center', md: 'center' }, padding: { xs: '20px', md: '0' } }} >
        <Typography sx={{ fontWeight: { xs: '700', md: '700' }, fontSize: { xs: '45px', md: '4.2vw' }, marginBottom: { xs: '8px', md: '5px' }, fontFamily: 'Playfair Display' }}>Our Services</Typography>
        {/* <Typography sx={{ fontSize: { xs: '15px', md: '1.4vw' } }}> Check out our diverse range of services!</Typography> */}
      </Grid>


      <Grid container item md={12} display='flex' justifyContent='center' alignItems='center' sx={{ marginBottom: { xs: '0', md: '60px' } }}>

        <Grid item md={7} xs={5} display='flex' justifyContent="center" flexDirection='column' alignItems='center' sx={{ flexDirection: { xs: 'column', md: 'row' } }} >
          <FadeInBox direction="left" delay={200}>
            <Box onClick={() => { handleClick('printMedia') }} sx={{ width: { xs: '140px', md: '11vw' }, marginBottom: { xs: '7vw', md: "0" }, marginRight: { xs: '0', md: '4vw' }, height: { xs: '140px', md: '11vw' }, cursor: 'pointer' }} bgcolor='#fff' color='#000' borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
              <Box sx={{ width: { xs: '65px', md: '5vw' }, height: { xs: '65px', md: '5vw' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><PrintMedia width={isMobile ? '40px' : "50px"} height={isMobile ? '40px' : "50px"} /></Box>
              <Typography sx={{
                fontSize: { xs: '14px', md: '1.1vw' },
                textAlign: 'center', margin: '5px',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                wordBreak: 'normal',
                // width: "65%",
              }} >Print media releases</Typography>
            </Box>
          </FadeInBox>
          <FadeInBox direction="left" delay={200}>
            <Box onClick={() => { handleClick('radioFm') }} sx={{ width: { xs: '140px', md: '11vw' }, marginBottom: { xs: '7vw', md: "0" }, marginRight: { xs: '0', md: '4vw' }, height: { xs: '140px', md: '11vw' }, cursor: 'pointer' }} bgcolor='#fff' color='#000' width='160px' height='160px' borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
              <Box sx={{ width: { xs: '65px', md: '5vw' }, height: { xs: '65px', md: '5vw' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><RadioFM width={isMobile ? '40px' : "50px"} height={isMobile ? '40px' : "50px"} /></Box>
              <Typography sx={{ fontSize: { xs: '14px', md: '1.1vw' }, textAlig: 'center',overflowWrap: 'break-word',wordWrap: 'break-word',
                wordBreak: 'normal'   }}>Outdoor Advertising</Typography>
            </Box>
          </FadeInBox>
          <FadeInBox direction="left" delay={200}>
            <Box onClick={() => { handleClick('digitalMarketing') }} sx={{ width: { xs: '140px', md: '11vw' }, marginBottom: { xs: '7vw', md: "0" }, height: { xs: '140px', md: '11vw' }, cursor: 'pointer' }} bgcolor='#fff' color='#000' width='160px' height='160px' borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
              <Box sx={{ width: { xs: '65px', md: '5vw' }, height: { xs: '65px', md: '5vw' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><DigitalMarketing width={isMobile ? '40px' : "50px"} height={isMobile ? '40px' : "50px"} /></Box>
              <Typography sx={{
                fontSize: { xs: '14px', md: '1.1vw' },
                textAlign: 'center', margin: '5px',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                wordBreak: 'normal',
              }}>Digital Marketing</Typography>
            </Box>
          </FadeInBox>
        </Grid>

        <Grid item md={7} xs={5} display='flex' justifyContent='center' flexDirection='column' alignItems='center' sx={{ flexDirection: { xs: 'column', md: 'row' } }} >
          <FadeInBox direction="right" delay={200}>
            <Box onClick={() => { handleClick('eCommerceSolution') }} sx={{ width: { xs: '140px', md: '11vw' }, marginBottom: { xs: '7vw', md: "0" }, marginRight: { xs: '0', md: '4vw' }, height: { xs: '140px', md: '11vw' }, cursor: 'pointer' }} bgcolor='#fff' color='#000' width='160px' height='160px' borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
              <Box sx={{ width: { xs: '65px', md: '5vw' }, height: { xs: '65px', md: '5vw' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Ecommerce width={isMobile ? '40px' : "50px"} height={isMobile ? '40px' : "50px"} /></Box>
              <Typography sx={{
                fontSize: { xs: '14px', md: '1.1vw' },
                textAlign: 'center', margin: '5px',
                width: "100%",
              }} >E-commerce Solution</Typography>
            </Box>
          </FadeInBox>
          <FadeInBox direction="right" delay={200}>
            <Box onClick={() => { handleClick('creative') }} sx={{ width: { xs: '140px', md: '11vw' }, marginBottom: { xs: '7vw', md: "0" }, marginRight: { xs: '0', md: '4vw' }, height: { xs: '140px', md: '11vw' }, cursor: 'pointer' }} bgcolor='#fff' color='#000' width='160px' height='160px' borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
              <Box sx={{ width: { xs: '65px', md: '5vw' }, height: { xs: '65px', md: '5vw' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><Creative width={isMobile ? '40px' : "50px"} height={isMobile ? '40px' : "50px"} /></Box>
              <Typography sx={{ fontSize: { xs: '14px', md: '1.1vw' } }}>Creatives</Typography>
            </Box>
          </FadeInBox>
          <FadeInBox direction="right" delay={200}>
            <Box onClick={() => { handleClick('socialMediaMarketing') }} sx={{ width: { xs: '140px', md: '11vw' }, marginBottom: { xs: '7vw', md: "0" }, height: { xs: '140px', md: '11vw' }, cursor: 'pointer' }} bgcolor='#fff' color='#000' width='160px' height='160px' borderRadius='10px' display='flex' flexDirection='column' justifyContent='center' alignItems='center' gap='4px'>
              <Box sx={{ width: { xs: '65px', md: '5vw' }, height: { xs: '65px', md: '5vw' }, backgroundColor: '#F1E5D1', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><SocialMarketing width={isMobile ? '40px' : "50px"} height={isMobile ? '40px' : "50px"} /></Box>
              <Typography sx={{ fontSize: { xs: '14px', md: '1.1vw' }, textAlign: 'center' }} >Social Media Marketing</Typography>
            </Box>
          </FadeInBox>
        </Grid>


      </Grid>

    </Grid>


  )
}

export default OurServices;



