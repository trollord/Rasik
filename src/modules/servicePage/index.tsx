import { Box, Button, Grid, Typography } from "@mui/material";
import Header from "../commonComponents/header";
import { PrintMedia } from "../commonComponents/icons";
import Footer from "../homePage/components/footer";

export function ServicePage() {
    return (
        <Grid container display='flex' flexDirection='column' justifyContent='center' alignItems='center'>

            <Header />


            <Grid item width='80%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' p={5} mt='15vh'>
                <Box width='200px' height='200px' bgcolor='#F1E5D1' mb={2} borderRadius='50%' display='flex' justifyContent='center' alignItems='center' boxShadow='0px 4px 4px 0px #00000040'>
                    <PrintMedia height='130px' width='130px' />
                </Box>
                <Typography variant="h4" style={{ fontWeight: '600' }}>Print Media</Typography>
                <Typography textAlign='center'>Our tremendous clout with the leading publication/media houses helps leverage the visibility of your brand. Our forte lies in giving you the best deals so that you get the optimum reach within your target audience at the right price. Which means maximum value for your ad spends and timely execution.</Typography>
            </Grid>

            <Grid container item display='flex' flexDirection='column' justifyContent='center' alignItems='center' mb={5}>
                <Typography variant="h5" style={{ fontWeight: '600' }} mb={4}>Our channel partners</Typography>

                <Grid container item p={3} bgcolor='#F1E5D1' width='90%' height='700px' display='flex' justifyContent='space-between' borderRadius='5px'>
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
                    </Grid>

                    <Grid item display='flex' justifyContent="center" width='100%'>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                        <Box height='28.5vh' width='20vw' bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040'></Box>
                    </Grid>
                   
                  



                </Grid>

            </Grid>

            <Button size="medium" sx={{ backgroundColor: '#EB3335', width: '190px', height: '40px', boxShadow: '0px 4px 4px 0px #00000040', color: "#FFFFFF", marginBottom: '30px', textTransform: 'none', fontSize: '20px' }}>Enqiure now!</Button>

            <Footer />
        </Grid>
    )
}