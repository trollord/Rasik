import { Grid, Typography, Box } from '@mui/material';
import Slider from 'react-infinite-logo-slider';
import '../../../../App.css';
import useMediaQuery from '@mui/material/useMediaQuery';


function ourClientsCarousel(){
  const isMobile = useMediaQuery('(max-width:600px)', { noSsr: true });
    
    return (
      <Grid height = {isMobile? "50vh":"60vh"} width = "100vw" >
        < Box height={isMobile?"20vh":"30vh"} textAlign='center' mb={3} paddingTop={isMobile? "5vh":"10vh"} paddingBottom="5vh">
          <Typography sx={{ fontWeight: '600', fontSize: { xs: '45px', md: '64px', fontFamily: 'Playfair Display' }, pb: "15vh" }}>Our Clients</Typography>
        </Box>
        <Box height="40vh">
        <Slider
            width="250px"
            duration={20}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src='/assets/Adenwal jewellers.png' alt="any" className='our-image' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/Digi-1.svg' alt="any2" className='our-image' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/LG Hing.svg' alt="any3" className='our-image' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/Milan fancy fabric.svg' alt="any3" className='our-image' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/Roopkala.png' alt="any3" className='our-image roop-kala-img' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/Roopmilan.svg' alt="any3" className='our-image roopmilan-img' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/Saucy Affair.svg' alt="any3" className='our-image' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/Somaiya.svg' alt="any3" className='our-image' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/Tit Bit.svg' alt="any3" className='our-image' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/ASMACS.svg' alt="any3" className='our-image' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/awwbaby.svg' alt="any3" className='our-image' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/tradesmen.svg' alt="any3" className='our-image' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/zepair.svg' alt="any3" className='our-image' />
            </Slider.Slide>
            <Slider.Slide>
                <img src='/assets/dhaid_travels.svg' alt="any3" className='our-image' />
            </Slider.Slide>
            
        </Slider>
        </Box>
        </Grid>
    )
}
export default ourClientsCarousel;