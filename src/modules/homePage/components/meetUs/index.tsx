import { Grid, Typography } from "@mui/material";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function MeetUs() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <Grid container display='flex'  alignItems='center' justifyContent='center' flexDirection='column' gap='40px'>

      <Typography variant="h3" style={{fontWeight:'700'}}>Meet Us</Typography>
        <Grid  columnSpacing={5} p={3} width='85%'  bgcolor='#EADBC8'  height='300px' ml='25px' container item display='flex' justifyContent='space-between' mb={5} boxShadow='0px 4px 4px 0px #00000040' borderRadius='10px'>

<Grid item md={5}  height='220px' border={2} bgcolor='#000' borderRadius='10px'>
<GoogleMapReact

    bootstrapURLKeys={{ key: "" }}
    defaultCenter={defaultProps.center}
    defaultZoom={defaultProps.zoom}
  >
    <AnyReactComponent
      lat={59.955413}
      lng={30.337844}
      text="My Marker"
    />
  </GoogleMapReact>
</Grid>
<Grid item md={3} >
    <div style={{marginBottom:'15px'}}>
        <Typography variant="h5" style={{fontWeight:'700'}}>Office</Typography>
        <Typography>109, Prime Plaza, J. V. Patel IT Compound,Opp. Prabhadevi Railway Station, Prabhadevi (W) 
             Mumbai- 400 013.</Typography>
    </div>
    <div>
        <Typography variant="h5" style={{fontWeight:'700'}}>E-mail</Typography>
        <Typography>rasikads43@gmail.com prashant@rasikcommunications.com</Typography></div>
</Grid>
<Grid item md={3}>

    <Typography variant="h5" style={{fontWeight:'700'}} >Contacts</Typography>

    <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
    <div>
         <Typography>Mr. Prashant Shah</Typography>
         <Typography> Cell : +91-9768128256</Typography>
  </div>
    <div>
         <Typography>Mr. Parth Shah</Typography>
         <Typography> Cell : +91-9821028256</Typography>
  </div>
    <div>
         <Typography>Mr. Twinkle shah</Typography>
         <Typography>Cell : +91-8898827588</Typography>
 </div>
    </div>
    










   

</Grid>

</Grid>
    </Grid>
  
  )
}

export default MeetUs;