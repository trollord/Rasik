import { Grid, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel} from 'react-responsive-carousel';
import { QuotationMark } from "../../../commonComponents/icons";

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
    <Grid container height='500px' display='flex' alignItems='center' justifyContent='center' id='testimonials' >
        <Grid><Typography variant="h4" style={{fontWeight:'700'}}>What our clients have to say</Typography></Grid>
        

        <Grid  height='300px' width='70%' >
        <Carousel autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showIndicators showStatus={false}>
        {testimonials.map((testimonial, index) => (
        <div key={index} style={{height:'320px',padding:'5px'}}>
           <div style={{textAlign:'left'}}><QuotationMark/></div>
          <p style={{fontSize:'35px'}}>{testimonial.quote}</p>
          <p style={{fontWeight:'700',fontSize:'30px'}}>
            <strong>{testimonial.author}</strong>
          </p>
        </div>
      ))}
              </Carousel>
        </Grid>

       

    </Grid>
  )
}

export default Review;