import { Box, Button, Grid, Typography } from "@mui/material";

import { PrintMedia } from "../commonComponents/icons";
import Footer from "../homePage/components/footer";
import serviceData from './services.data.json';

import { ResponsiveHeader } from "../commonComponents/header";

export function ServicePage({ currentPage }: { currentPage: 'printMedia' | 'eCommerceSolution' | 'radioFm' | 'creative' | 'digitalMarketing' | 'socialMediaMarketing' }) {

    return (
        <Grid container display='flex' flexDirection='column' justifyContent='center' alignItems='center'>

            {/* <Header /> */}
            <ResponsiveHeader></ResponsiveHeader>

            <Grid item width='80%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' p={5} mt='15vh' border={3}>
                {/* width='200px' height='200px' print media box height and width */}
                <Box border={6} sx={{ width: { xs: '170px', md: '200px' }, height: { xs: '170px', md: '200px' } }} bgcolor='#F1E5D1' mb={2} borderRadius='50%' display='flex' justifyContent='center' alignItems='center' boxShadow='0px 4px 4px 0px #00000040'>
                    {/* height='130px' width='130px' this is height and widt of logo */}
                    <PrintMedia height='130px' width='130px' />
                </Box>
                <Typography variant="h4" style={{ fontWeight: '600' }} border={7}>Print Media</Typography>
                <Typography textAlign='center' border={2}>Our tremendous clout with the leading publication/media houses helps leverage the visibility of your brand. Our forte lies in giving you the best deals so that you get the optimum reach within your target audience at the right price. Which means maximum value for your ad spends and timely execution.</Typography>
            </Grid>

            <Grid container item display='flex' flexDirection='column' justifyContent='center' alignItems='center' mb={5} border={1}>
                <Typography variant="h5" style={{ fontWeight: '600' }} mb={4} border={2}>Our channel partners</Typography>

                <Grid container border={3} item pt={3} pb={3} bgcolor='#F1E5D1' width='90%' display='flex' justifyContent='center' borderRadius='5px'>

                    {serviceData[currentPage].length > 0 ?
                        serviceData[currentPage].map((path) => {
                            return (
                                // height='28.5vh' width='100%' height and width of box which is inside grid on desktop
                                <Grid item display='flex' justifyContent="center" md={2.9} xs={6} >
                                    <Box sx={{ width: { xs: '100%', md: '100%' }, height: { xs: '17vh', md: '28.5vh' } }} bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040' >
                                        <img src={path} width={"100%"} height="100%"></img>
                                    </Box>
                                </Grid>
                            )
                        }) : ""
                    }
                    {/* 
                    <Grid item display='flex' justifyContent="center" width='100%'>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                    </Grid>

                    <Grid item display='flex' justifyContent="center" width='100%'>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                    </Grid> */}
                </Grid>

            </Grid>

            {/* <Button size="medium" sx={{ backgroundColor: '#EB3335', width: '190px', height: '40px', boxShadow: '0px 4px 4px 0px #00000040', color: "#FFFFFF", marginBottom: '30px', textTransform: 'none', fontSize: '20px' }}>Enqiure now!</Button> */}

            {/* <Footer /> */}
        </Grid>
    )
}