import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import '../../../../App.css';

import "slick-carousel/slick/slick-theme.css";
import styles from './LogoCarousel.module.css';
import { Grid, Box, Typography } from '@mui/material';

const LogoSlider = () => {
  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30,
  };

  const logos = [
    { id: 1, src: '/assets/Adenwal jewellers.png', alt: 'Logo 1', className: `${styles.our_image} ${styles.adenwal_img}` },
    { id: 2, src: '/assets/Digi-1.svg', alt: 'Logo 2', className: `${styles.our_image} ${styles.digi1_img}` },
    { id: 3, src: 'assets/LG Hing.svg', alt: 'Logo 3', className: `${styles.our_image} ${styles.lg_img}` },
    { id: 4, src: '/assets/Milan fancy fabric.svg', alt: 'Logo 4', className: styles.our_image },
    { id: 5, src: '/assets/Roopkala.png', alt: 'Logo 5', className: `${styles.our_image} ${styles.roopkala_img}` },
    { id: 6, src: '/assets/Roopmilan.svg', alt: 'Logo 6', className: `${styles.our_image} ${styles.roopmilan_img}` },
    { id: 7, src: '/assets/Saucy Affair.svg', alt: 'Logo 7', className: `${styles.our_image} ${styles.saucy_img}`},
    { id: 8, src: '/assets/Somaiya.svg', alt: 'Logo 8', className: `${styles.our_image} ${styles.somaiya_img}` },
    { id: 9, src: '/assets/Tit Bit.svg', alt: 'Logo 9', className: `${styles.our_image} ${styles.titbit_img}` },
    { id: 9, src: '/assets/ASMACS.svg', alt: 'Logo 10', className: `${styles.our_image} ${styles.ASMACS_img}` },
    { id: 9, src: '/assets/awwbaby.svg', alt: 'Logo 11', className: `${styles.our_image} ${styles.awwbaby_img}` },
    { id: 9, src: '/assets/tradesmen.svg', alt: 'Logo 12', className: `${styles.our_image} ${styles.tradesmen_img}` },
    { id: 9, src: '/assets/zepair.svg', alt: 'Logo 12', className: `${styles.our_image} ${styles.zepair_img}` },
    // { id: 9, src: '/assets/dhaid_travels.svg', alt: 'Logo 12', className: `${styles.our_image} ${styles.dhaid_travels_img}` },
  ];

  return (
    <Grid className="slider-container" container direction="column" alignItems="center" justifyContent="center">
      <Box height="20vh" textAlign='center' mb={3} paddingTop="5vh" paddingBottom="0vh">
      <Typography sx={{ fontWeight: '600', fontSize: { xs: '45px', md: '64px', fontFamily: 'Playfair Display' }, pb: "15vh" }}>Our Clients</Typography>
      </Box>
      <Grid item height="75vh" paddingLeft="0vw">
      <Slider {...settings} >
        {logos.map(logo => (
          <div key={logo.id} className={styles.slide}>
            <img src={logo.src} alt={logo.alt} className={logo.className}/>
          </div>
        ))}
      </Slider>
      </Grid>
    </Grid>
  );
};

export default LogoSlider;
