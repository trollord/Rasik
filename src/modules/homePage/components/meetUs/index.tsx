import { Box, Grid, Typography } from "@mui/material";
import GoogleMapReact from  'google-map-react';
import styles from "./styles.module.css"
function MeetUs() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div className={styles.frameParent}>
        <div className={styles.meetUsWrapper}>
          <h1 className={styles.meetUs}>Meet Us</h1>
        </div>

   <Grid  spacing={2} p={2} width='1144px'  bgcolor='#EADBC8'  height='251px' m='auto' container display='flex' borderRadius='10px' justifyContent='space-evenly'>

    
    <Grid item md={6}  height='210px' width="498px"  borderRadius="15px" overflow="hidden">


    <GoogleMapReact
                      
                       bootstrapURLKeys={{ key: "" }}
                       defaultCenter={defaultProps.center}
                       defaultZoom={defaultProps.zoom}
                     >
                     
                     </GoogleMapReact>



    </Grid>
        <Grid height = "170px" width="496.25px">

        
        <Box className={styles.frameWrapper}>
            <Box className={styles.frameGroup}>
              <Box className={styles.office109PrimePlazaJVParent}>
                <Box className={styles.office109PrimeContainer}>
                  <p className={styles.office}>
                    <b>OFFICE</b>
                  </p>
                  <p className={styles.primePlazaJVPatelItCo}>
                    <span>
                      <span
                        className={styles.primePlazaJ}
                      >{`109, Prime Plaza, J. V. Patel IT Compound,Opp. Prabhadevi Railway Station, Prabhadevi (W) `}</span>
                    </span>
                  </p>
                  <p className={styles.mumbai400013}>
                    <span>
                      <span className={styles.mumbai4000131}>
                        Mumbai- 400 013.
                      </span>
                    </span>
                  </p>
                  <p className={styles.blankLine}>
                    <span>
                      <span className={styles.blankLine1}>&nbsp;</span>
                    </span>
                  </p>
                  <p className={styles.blankLine2}>
                    <span>
                      <span className={styles.blankLine3}>&nbsp;</span>
                    </span>
                  </p>
                </Box>
                <Box className={styles.eMailRasikads43gmailcomPrWrapper}>
                  <Box className={styles.eMailRasikads43gmailcomPr}>
                    <p className={styles.eMail}>
                      <b>E-Mail</b>
                    </p>
                    <p className={styles.rasikads43gmailcomPrashant}>
                      <a
                        className={styles.rasikads43gmailcom}
                        href="mailto:rasikads43@gmail.com"
                        target="_blank"
                      >
                        <span>
                          <span className={styles.rasikads43gmailcom1}>
                            rasikads43@gmail.com
                          </span>
                        </span>
                      </a>
                      <span>
                        &nbsp;
                        <span className={styles.prashantrasikcommunicationsc}>
                          prashant@rasikcommunications.com
                        </span>
                      </span>
                    </p>
                    <p className={styles.blankLine4}>
                      <span>&nbsp;</span>
                    </p>
                    <p className={styles.blankLine5}>
                      <span>&nbsp;</span>
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.contactsMrPrashantContainer}>
                <p className={styles.contacts}>
                  <b>Contacts</b>
                </p>
                <p className={styles.mrPrashantShah}>
                  <span>
                    <span className={styles.mrPrashantShah1}>
                      Mr. Prashant Shah
                    </span>
                  </span>
                </p>
                <p className={styles.cell919768128256}>
                  <span>
                    <span className={styles.cell9197681282561}>
                      Cell : +91-9768128256
                    </span>
                  </span>
                </p>
                <p className={styles.blankLine6}>
                  <span>
                    <span className={styles.blankLine7}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.mrParthShah}>
                  <span>
                    <span className={styles.mrParthShah1}>Mr. Parth Shah</span>
                  </span>
                </p>
                <p className={styles.cell919821028256}>
                  <span>
                    <span className={styles.cell9198210282561}>
                      Cell : +91-9821028256
                    </span>
                  </span>
                </p>
                <p className={styles.blankLine8}>
                  <span>
                    <span className={styles.blankLine9}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.mrTwinkleShah}>
                  <span>
                    <span className={styles.mrTwinkleShah1}>
                      Mr. Twinkle shah
                    </span>
                  </span>
                </p>
                <p className={styles.cell918898827588}>
                  <span>
                    <span className={styles.cell9188988275881}>
                      Cell : +91-8898827588
                    </span>
                    <span className={styles.blankLine10}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine11}>
                  <span>
                    <span className={styles.blankLine12}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine13}>
                  <span>
                    <span className={styles.blankLine14}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine15}>
                  <span>
                    <span className={styles.blankLine16}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine17}>
                  <span>
                    <span className={styles.blankLine18}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.blankLine19}>
                  <span>
                    <span className={styles.blankLine20}>&nbsp;</span>
                  </span>
                </p>
              </Box>
            </Box>
          </Box>
          </Grid>









       

    {/* </Grid> */}

   </Grid>
   <div style={{ height: 20 }} />
   </div>
  )
}

export default MeetUs;