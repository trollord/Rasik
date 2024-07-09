import '../../../../App.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, useMediaQuery } from '@mui/material';


function Carasouel() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (


        <Grid  sx={{ height: { xs: 'auto', lg: '77vh' , sm: "auto" }, marginTop: { xs: '8vh', lg: '5vh' , sm: "8vh" } }} id='carousel'>

            <Carousel autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
                
                <Box>
                    <img src="/assets/rasik/Web-Banner-1.jpg" height='100%' className="carousal-img-custom mobile-img" />
                </Box>

                <Box>
                    <img src="/assets/rasik/Web-Banner-2.jpg" height='100%' className="carousal-img-custom mobile-img" />
                </Box>

                <Box>
                    <img src="/assets/rasik/Web-Banner-3.jpg" height='100%' className="carousal-img-custom mobile-img" />
                </Box>
                <Box>
                    <img src="/assets/rasik/Web-Banner-4.jpg" height='100%' className="carousal-img-custom mobile-img" />
                </Box>
                
            </Carousel>


        </Grid>

    )
}

export default Carasouel;

