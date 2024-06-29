import { Grid, Typography } from '@mui/material';
import Slider from 'react-infinite-logo-slider';
import '../../../../App.css';

function ourClientsCarousel(){
    
    return (
      <Grid height = "70vh" width = "100vw">
        <Grid >
          <Typography variant="h1" sx={{textAlign:'center'}}>
            Our Clients
          </Typography>
        </Grid>
        <Grid paddingTop="20vh">

        
        <Slider
            width="250px"
            duration={40}
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
            
        </Slider>
        </Grid>
        </Grid>
    )
}
export default ourClientsCarousel;