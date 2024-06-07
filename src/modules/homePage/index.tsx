import { Grid } from "@mui/material";
import Header from "../commonComponents/header";
import Carasouel from "./components/carousal";
import OurClients from "./components/ourClients";
import { About } from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import OurServices from "./components/ourServices";
import Review from "./components/review";
import MeetUs from "./components/meetUs";
import OurWork from "./components/ourWork";


export function HomePage() {
  
    return(
      <Grid container style={{overflow:'hidden'}}>
      <Header/>
      <Carasouel/>
      <OurClients/>
      <OurServices/>
      <About/>
      <OurWork/>
      <Review/>
      <ContactUs/>
      <MeetUs/>
      <Footer/>
      </Grid>
    );
}