import '../../../../App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, useMediaQuery } from '@mui/material';


function Carasouel() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (


        <Grid  sx={{ height: { xs: 'auto', lg: '85vh' , sm: "auto" }, marginTop: { xs: '8vh', lg: '15vh' , sm: "8vh" } }} id='carasouel'>

            <Carousel autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
                
                <Box>
                    <img src="/assets/rasik/banner1.svg" height='100%' className="carousal-img-custom mobile-img" />
                </Box>

                <Box>
                    <img src="/assets/rasik/banner2.svg" height='100%' className="carousal-img-custom mobile-img" />
                </Box>

                <Box>
                    <img src="/assets/rasik/banner3.svg" height='100%' className="carousal-img-custom mobile-img" />
                </Box>
                <Box>
                    <img src="/assets/rasik/banner4.svg" height='100%' className="carousal-img-custom mobile-img" />
                </Box>
                
            </Carousel>


        </Grid>

    )
}

export default Carasouel;

