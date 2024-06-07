import { Box, Grid, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-responsive-carousel';
import { QuotationMark } from "../../../commonComponents/icons";
import '../../../../App.css'

const testimonials = [
    {
      quote: "An agency with a heart of gold. That’s what sums it up for Rasik. We never expected an agency to be so transparent and deeply rooted in ethical conduct. This quality is further complemented by a professional approach especially when it comes to media releases.’’",
      author: "somaiya Group",
     
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

function Review() {
  return (
    <Grid container height='500px' display='flex' flexDirection='column' alignItems='center' justifyContent='center' id='testimonials' >
        <Grid item><Typography variant="h4" style={{fontWeight:'700'}}>What our clients have to say</Typography></Grid>
        

        <Grid  item height='300px' width='70%' >
        <Carousel autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false}  showStatus={false}>
        {testimonials.map((testimonial, index) => (
        <Box key={index} style={{height:'320px',padding:'5px'}}>
           <Box style={{textAlign:'left'}}><QuotationMark/></Box>
          <Typography style={{fontSize:'32px',textAlign:'left'}}>{testimonial.quote}</Typography>
          <Typography style={{fontWeight:'700',fontSize:'28px',textAlign:'left',marginTop:'10px'}}>
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