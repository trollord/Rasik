// LogoCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './LogoCarousel.module.css';

interface LogoCarouselProps {
  logos: string[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.logoSlide}>
            <img src={logo} alt={`Logo ${index}`} className={styles.logoImage} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoCarousel;
