import Header from '../../../commonComponents/header';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-responsive-carousel';
import { Grid } from '@mui/material';

function Carasouel() {
    return (
      <Grid m='auto' height='496px'>  

          <Carousel autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false}>
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
  
  