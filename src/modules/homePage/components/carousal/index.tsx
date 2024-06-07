
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-responsive-carousel';
import { Grid } from '@mui/material';

function Carasouel() {
    return (
      <Grid mt='15vh' height='85vh' >  

          <Carousel  autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
                  <div>
                      <img src="/assets/cookie.jpg" height='490px'/>
                    
                  </div>
                  <div>
                      <img src="/assets/cookie.jpg" height='490px'/>
                      
                  </div>
                  <div>
                      <img src="/assets/cookie.jpg" height='490px'/>
                    
                  </div>
              </Carousel>
              
          
      </Grid>
    )
  }
  
  export default Carasouel;
  
  