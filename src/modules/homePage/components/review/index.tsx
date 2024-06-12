import { Box, Grid, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { QuotationMark } from "../../../commonComponents/icons";
import '../../../../App.css'

const testimonials = [
  {
    quote: "An agency with a heart of gold. That’s what sums it up for Rasik. We never expected an agency to be so transparent and deeply rooted in ethical conduct. This quality is further complemented by a professional approach especially when it comes to media releases.’’",
    author: "Somaiya Group",

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
    <Grid container sx={{ height: { xs: '500px', md: '85vh' } }} display='flex' flexDirection='column' alignItems='center' justifyContent='center' id='testimonials'  >
      <Grid item><Typography sx={{ fontWeight: '900', fontSize: { xs: '23px', md: '40px' }, marginBottom: { xs: '20px', md: 'none' } }}>What our clients have to say</Typography></Grid>


      <Grid item sx={{ width: { xs: '90%', md: '70%' }, height: { sx: '220px', md: '300px' } }}>
        <Carousel autoPlay infiniteLoop swipeable showThumbs={false} emulateTouch showArrows={false} showStatus={false}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ height: '320px', padding: { xs: 'none', md: '5px' } }}>
              <Box sx={{ textAlign: 'left', display: { xs: 'none', md: 'block' } }}><QuotationMark /></Box>

              <Typography sx={{ fontSize: { xs: '15px', md: '32px' }, textAlign: 'left' }}>{testimonial.quote}</Typography>
              <Typography sx={{ fontWeight: '700', fontSize: { xs: '18px', md: '28px' }, textAlign: 'left', marginTop: '10px' }}>
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