import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css"
import useMediaQuery from '@mui/material/useMediaQuery';
function MeetUs() {


  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:900px)', { noSsr: true });
  // console.log(isMobile);
  return (
    <Box className={styles.frameParent} id="meetus">
      <Box className={styles.meetUsWrapper} >
        <h1 className={styles.meetUs}>Meet Us</h1>
      </Box>
{/* needs to be worked on, mobile view mai length of the card needs to increase to accomodate the new phone numbers. */}
      <Grid spacing={2} p={2} sx={{  width:{ xs: '75vw' , md : '90vw'}}} bgcolor='#EADBC8' height={isMobile ? '92vh' : isTablet?'67vh':'53vh'} border= '2px solid black' m='auto' flexDirection="row" container display='flex' borderRadius='10px' justifyContent='space-evenly'>


        <Grid container item md={6} height={isMobile ? '25vh' : isTablet?'20vh':'45vh'}  width={isMobile? "65vw":"55vw"} borderRadius="10px" overflow="hidden">

          <Box
                sx={{
                  borderRadius: '10px',
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  overflow: 'hidden',
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15089.175338429783!2d72.8340443!3d19.0067696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8d3693b12b%3A0x27cf82ad5efa9e9a!2sRasik%20Communications!5e0!3m2!1sen!2sin!4v1718456015635!5m2!1sen!2sin"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '0'
                  }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </Box>

        </Grid>
        <Grid container item md={3} >
          <Box flexDirection="column" >
            <Typography fontWeight="600" variant="h5" >Office</Typography>
            <Typography>109, Prime Plaza, J. V. Patel ITI Compound,Opp. Prabhadevi Railway Station, Prabhadevi Station (W)
              Mumbai- 400 013.</Typography>
          </Box>
          <Box>
            <Typography fontWeight="600" variant="h5">Email</Typography>
            {/* <Typography>109, Prime Plaza, J. V. Patel IT Compound,Opp. Prabhadevi Railway Station, Prabhadevi (W) 
                 Mumbai- 400 013.</Typography> */}
            <p className={styles.rasikads43gmailcomPrashant}>
              <Grid className={styles.rasikEmail} height="4vh" width="40vw">


                <a
                  className={styles.rasikads43gmailcom}
                  href="mailto:rasikads43@gmail.com"
                  target="_blank"
                >
                    <Typography className={styles.rasikads43gmailcom1} fontSize="14px">
                      rasikads43@gmail.com
                    </Typography>

                </a>
              </Grid>
              <Grid className={styles.prashantEmail}>
                <a className={styles.rasikads43gmailcom}
                  href="mailto:prashant@rasikcommunications.com"
                  target="_blank"
                  >
                    <Typography className={styles.prashantrasikcommunicationsc} fontSize="14px">
                      prashant@rasikcommunications.com
                    </Typography>
                  
                </a>
              </Grid>
            </p>
          </Box>
        </Grid>
        <Grid container item md={3} justifyContent='left' flexDirection='column'>

          <Typography fontWeight="600" variant="h5">Contacts</Typography>

          <Box style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'left' }}>
            <Box>
              <Typography>Mr. Prashant Shah</Typography>
              <Typography> Phone : +91-9768128256</Typography>
            </Box>
            <Box>
              <Typography>Mr. Parth Shah</Typography>
              <Typography> Phone : +91-9821028256</Typography>
            </Box>
            <Box>
              <Typography>Mr. Rohit Naik</Typography> 
              <Typography>Phone : +91-9768001616</Typography>
            </Box>
            <Box>
              <Typography>Mr. Vishal jadhav</Typography>
              <Typography>Phone : +91-9773773434</Typography>
            </Box>
            <Box>
              <Typography>Ms. Twinkle Shah</Typography>
              <Typography>Phone : +91-8898827588</Typography>
            </Box>
          </Box>
        </Grid>
       

      </Grid>

      {/* </Grid> */}
      <Box style={{ height: 20 }} />
    </Box>
  )
}

export default MeetUs;