import { Grid } from "@mui/material";
import Header from "../commonComponents/header/index.desktop";
import useMediaQuery from '@mui/material/useMediaQuery';
import Carasouel from "./components/carousal";
import OurClients from "./components/ourClients";
import { About } from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import OurServices from "./components/ourServices";
import Review from "./components/review";
import MeetUs from "./components/meetUs";
import OurWork from "./components/ourWork";
import FooterMobile from "./components/footerMobile";
import { ResponsiveHeader } from "../commonComponents/header";
import OurClientsCarousel from "./components/ourClientsCarousel";
// import TempOurClient from "./components/ourClients/TempOurClient";



export function HomePage() {
  const isMobile = useMediaQuery('(max-width:600px)');


  return (
    <Grid container gap="10px" style={{ overflow: 'hidden' }}>

      <ResponsiveHeader></ResponsiveHeader>
      <Carasouel />
      {/* <OurClients /> */}
      <OurClientsCarousel />
      {/* <TempOurClient /> */}
      <OurServices />
      <About />
      <OurWork />
      <Review />
      <ContactUs />
      <MeetUs />
      {!isMobile && <Footer />}
      {isMobile && <FooterMobile />}
    </Grid>
  );
}