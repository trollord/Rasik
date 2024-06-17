import { Box, Button, Grid, Typography } from "@mui/material";
import { Link, scroller } from 'react-scroll'
import { PrintMedia, Ecommerce, RadioFM, Creative, SocialMarketing, DigitalMarketing } from "../commonComponents/icons";
import Footer from "../homePage/components/footer";
import serviceData from './services.data.json';
import FooterMobile from "../homePage/components/footerMobile";
import { ResponsiveHeader } from "../commonComponents/header";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';

export function ServicePage({ currentPage }: { currentPage: 'printMedia' | 'eCommerceSolution' | 'radioFm' | 'creative' | 'digitalMarketing' | 'socialMediaMarketing' }) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();
    let componentToRender;
    let textToRender;
    let description;
    switch (currentPage) {
        case 'printMedia':
            componentToRender = <PrintMedia />;
            description = "Our tremendous clout with the leading publication/media houses helps leverage the visibility of your brand. Our forte lies in giving you the best deals so that you get the optimum reach within your target audience at the right price, which means maximum value for your ad spends and timely execution.";
            break;
        case 'eCommerceSolution':
            componentToRender = <Ecommerce />;
            description = "Elevate your online business with Rasik Communications' E-commerce Solutions. We provide tailored strategies and innovative technologies to enhance your digital storefront, driving traffic and boosting sales. Transform your e-commerce presence and achieve unprecedented growth with our expert guidance."
            break;
        case 'radioFm':
            componentToRender = <RadioFM />;
            description="Amplify your brand's voice with Rasik Communications' Radio FM services. We create captivating radio campaigns that resonate with listeners, ensuring your message reaches a wide and diverse audience. Tune in to success with expertly crafted ads that make an impact."
            break;
        case 'creative':
            componentToRender = <Creative />;
            description = "Unleash your brand's potential with Rasik Communications' Creatives. Our innovative design solutions captivate audiences and communicate your message with impact. From striking visuals to compelling narratives, we bring your vision to life, ensuring your brand stands out in a crowded marketplace."
            break;
        case 'digitalMarketing':
            componentToRender = <DigitalMarketing />;
            description = "Elevate your brand's online presence with Rasik Communications' cutting-edge digital marketing strategies. Engage your audience through tailored campaigns, boost conversions, and achieve unparalleled growth. Experience the power of data-driven marketing with our expert team."
            break;
        case 'socialMediaMarketing':
            componentToRender = <SocialMarketing />;
            description = "Transform your social media presence with Rasik Communications. Our expert team crafts compelling content and targeted campaigns to enhance engagement, build your brand, and drive results. Connect with your audience on a deeper level and watch your community grow."
            break;
        default:
            componentToRender = 'no logo';
    }

    switch (currentPage) {
        case 'printMedia':
            textToRender = 'Print Media';
            break;
        case 'eCommerceSolution':
            textToRender = 'Ecommerce Solution';
            break;
        case 'radioFm':
            textToRender = 'Radio FM';
            break;
        case 'creative':
            textToRender = 'Creative';
            break;
        case 'digitalMarketing':
            textToRender = 'Digital Marketing';
            break;
        case 'socialMediaMarketing':
            textToRender = 'Social Media Marketing';
            break;
        default:
            textToRender = 'no text';
    }
    const navigateAndScroll = (path: string, section: string) => {

        navigate(path);
        setTimeout(() => {
            scroller.scrollTo(section, {
                smooth: true,
                spy: true,
                offset: -100,
                duration: 500,
            });
        }, 100); // Adjust the timeout as needed
    };



    return (
        <Grid container display='flex' sx={{ marginTop: { xs: '8vh', md: '15vh' } }} flexDirection='column' justifyContent='center' alignItems='center'>

            {/* <Header /> */}
            <ResponsiveHeader></ResponsiveHeader>

            <Grid item width='80%' sx={{ width: { xs: '100%', md: '80%' }, padding: { xs: '18px', md: '40px' } }} display='flex' flexDirection='column' justifyContent='center' alignItems='center'   >
                {/* width='200px' height='200px' print media box height and width */}
                <Box sx={{ width: { xs: '170px', md: '200px' }, height: { xs: '170px', md: '200px' } }} bgcolor='#F1E5D1' mb={2} borderRadius='50%' display='flex' justifyContent='center' alignItems='center' boxShadow='0px 4px 4px 0px #00000040'>
                    {/* height='130px' width='130px' this is height and widt of logo */}
                    <Box sx={{ height: { xs: '120px', md: '130px' }, width: { xs: '120px', md: '130px' } }} >{componentToRender}</Box>
                    {/* <PrintMedia /> */}
                </Box>
                <Typography sx={{ fontWeight: '600', fontSize: { xs: '30px', md: '35px' }, marginBottom: { xs: '8px', md: '0' } }} >{textToRender}</Typography>
                <Typography textAlign='center' >{description}</Typography>
            </Grid>

            <Grid container item display='flex' flexDirection='column' justifyContent='center' alignItems='center' mb={5} >
                <Typography variant="h5" sx={{ fontWeight: '600', marginBottom: { xs: '12px', md: '32px' } }}  >Our channel partners</Typography>

                <Grid container item pt={3} pb={3} bgcolor='#F1E5D1' width='90%' display='flex' justifyContent='center' borderRadius='5px'>

                    {serviceData[currentPage].length > 0 ?
                        serviceData[currentPage].map((path) => {
                            return (
                                // height='28.5vh' width='100%' height and width of box which is inside grid on desktop
                                <Grid item display='flex' justifyContent="center" md={2.9} xs={6} >
                                    <Box sx={{ width: { xs: '100%', md: '100%' }, height: { xs: '17vh', md: '28.5vh' } }} bgcolor='#fff' m={2} borderRadius='10px' boxShadow='0px 4px 4px 0px #00000040' >
                                        <img src={path} width={"100%"} height="100%" style={{ borderRadius: '10px' }}></img>
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


            <Link to='contactUs' onClick={() => navigateAndScroll('/', 'contactUs')} spy={true} smooth={true} offset={-100} duration={500}><Button size="medium" sx={{
                backgroundColor: '#EB3335', width: '190px', height: '40px', boxShadow: '0px 4px 4px 0px #00000040', color: "#FFFFFF", marginBottom: '30px', textTransform: 'none', fontSize: '20px', display: { xs: 'none', md: 'block' }, padding: '4px', '&:hover': {
                    color: '#000',
                    backgroundColor: '#EB3335'
                }
            }}>Enquire Now</Button></Link>


            {!isMobile && <Footer />}
            {isMobile && <FooterMobile />}
        </Grid>
    )
}