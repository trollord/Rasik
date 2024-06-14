import '../../../../App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, useMediaQuery } from '@mui/material';


function Carasouel() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (


        <Grid mt='15vh' sx={{ height: { xs: 'auto', md: '85vh' }, marginTop: { xs: '8vh', md: '15vh' } }} id='carasouel'>

            <Carousel autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
                
                <Box>
                    <img src="/assets/rasik/1.png" height='100%' className="carousal-img-custom mobile-img" />
                </Box>

                <Box>
                    <img src="/assets/rasik/2.png" height='100%' className="carousal-img-custom mobile-img" />
                </Box>

                <Box>
                    <img src="/assets/rasik/3.png" height='100%' className="carousal-img-custom mobile-img" />
                </Box>
                
            </Carousel>


        </Grid>

    )
}

export default Carasouel;

