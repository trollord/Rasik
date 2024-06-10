import { Grid } from "@mui/material";
import Header from "../commonComponents/header/index.desktop";
import Carasouel from "./components/carousal";
// import OurClients from "./components/ourClients";
import { About } from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import OurServices from "./components/ourServices";
import Review from "./components/review";
import MeetUs from "./components/meetUs";
import OurWork from "./components/ourWork";
import { ResponsiveHeader } from "../commonComponents/header";
import TempOurClient from "./components/ourClients/TempOurClient";


export function HomePage() {

  return (
    <Grid container style={{ overflow: 'hidden' }}>
      {/* <Header /> */}
      <ResponsiveHeader></ResponsiveHeader>
      <Carasouel />
      {/* <OurClients /> */}
      <TempOurClient />
      <OurServices />
      {/* <About /> */}
      <OurWork />
      <Review />
      <ContactUs />
      <MeetUs />
      <Footer />
    </Grid>
  );
}