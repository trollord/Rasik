import { Box, Grid, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { QuotationMark } from "../../../commonComponents/icons";
import '../../../../App.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from 'react';
const testimonials = [
  {
    quote: "An agency with a heart of gold. That’s what sums it up for Rasik. We never expected an agency to be so transparent and deeply rooted in ethical conduct. This quality is further complemented by a professional approach especially when it comes to media releases.’’",
    author: "Somaiya Group",

  },
  {
    quote: "An agency with a heart of gold. That’s what sums it up for Rasik. We never expected an agency to be so transparent and deeply rooted in ethical conduct. This quality is further complemented by a professional approach especially when it comes to media releases",
    author: "Jane Smith",

  },
  {
    quote: "An agency with a heart of gold. That’s what sums it up for Rasik. We never expected an agency to be so transparent and deeply rooted in ethical conduct. This quality is further complemented by a professional approach especially when it comes to media releases",
    author: "Jane Smith",

  },
  {
    quote: "An agency with a heart of gold. That’s what sums it up for Rasik. We never expected an agency to be so transparent and deeply rooted in ethical conduct. This quality is further complemented by a professional approach especially when it comes to media releases",
    author: "Jane Smith",

  },
  {
    quote: "An agency with a heart of gold. That’s what sums it up for Rasik. We never expected an agency to be so transparent and deeply rooted in ethical conduct. This quality is further complemented by a professional approach especially when it comes to media releases.",
    author: "Bob Johnson",

  }
];

const Review: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)', { noSsr: true });
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:1100px)', { noSsr: true });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeStyles = (delay: number) => ({
    transition: `opacity 1s ease-out ${delay}ms, transform 1s ease-out ${delay}ms`,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
  });


  return (
    <Grid container sx={{ height: { xs: '500px', md: '85vh' } }} display='flex' flexDirection='column' alignItems='center' justifyContent='center' id='testimonials' >
      <Grid item><Typography sx={{ fontWeight: '900', fontSize: { xs: '23px', md: '40px' }, marginBottom: { xs: '20px', md: 'none' } }}>What our clients have to say</Typography></Grid>


      <Grid item sx={{ width: { xs: '90%', md: '90%' }, height: { sx: '220px', md: '300px' } }} >
        <Carousel autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ height: '320px', padding: { xs: 'none', md: '5px' } }}>
              <Box sx={{ textAlign: 'left', display: { xs: 'none', md: 'block' } }}><QuotationMark /></Box>

              <Typography sx={{ ...fadeStyles(0), fontSize: isMobile ? '15px' : isTablet ? '25px' : '32px', textAlign: 'left' }}>{testimonial.quote}</Typography>
              <Typography sx={{ ...fadeStyles(200), fontWeight: '700', fontSize: { xs: '18px', md: '28px' }, textAlign: 'left', marginTop: '10px' }}>
                {testimonial.author}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Grid>



    </Grid>
  )
}

export default Review;