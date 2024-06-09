import { Grid, Typography } from "@mui/material";
import GoogleMapReact from  'google-map-react';
import styles from "./styles.module.css"
import useMediaQuery from '@mui/material/useMediaQuery';
function MeetUs() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const isMobile = useMediaQuery('(max-width:750px)');
  return (
    <div className={styles.frameParent}>
        <div className={styles.meetUsWrapper}>
          <h1 className={styles.meetUs}>Meet Us</h1>
        </div>

   <Grid  spacing={2} p={2} width='70vw'  bgcolor='#EADBC8' height={isMobile ? '60vh' : '46vh'} m='auto' container display='flex' borderRadius='10px' justifyContent='space-evenly'>

    
    <Grid item md={6}  height={isMobile?'25vh':'40vh'} width="498px"  borderRadius="15px" overflow="hidden">


    <GoogleMapReact
                      
                       bootstrapURLKeys={{ key: "" }}
                       defaultCenter={defaultProps.center}
                       defaultZoom={defaultProps.zoom}
                     >
                     
                     </GoogleMapReact>



    </Grid>
    {/* <Grid item md={3} >
        <div>
            <Typography variant="h5" fontFamily={}>Office</Typography>
            <Typography>109, Prime Plaza, J. V. Patel IT Compound,Opp. Prabhadevi Railway Station, Prabhadevi (W) 
                 Mumbai- 400 013.</Typography>
        </div>
        <div>
            <Typography variant="h5">Office</Typography>
            <Typography>109, Prime Plaza, J. V. Patel IT Compound,Opp. Prabhadevi Railway Station, Prabhadevi (W) 
                 Mumbai- 400 013.</Typography></div>
    </Grid>
    <Grid item md={3}>

        <Typography variant="h5">Contacts</Typography>

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
        </div> */}
        <Grid height = {isMobile?"50vh":"170px"} width={isMobile?"61vw":"496.25px"}>

        
        <div className={styles.frameWrapper} >
            <div className={styles.frameGroup}>
              <div className={styles.office109PrimePlazaJVParent}>
                <div className={styles.office109PrimeContainer}>
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
                </div>
                <div className={styles.eMailRasikads43gmailcomPrWrapper}>
                  <div className={styles.eMailRasikads43gmailcomPr}>
                    <Grid container height="5vh" width="40vw">

                    
                    <p className={styles.eMail} >
                      <b>E-Mail</b>
                    </p>
                    </Grid>
                    <p className={styles.rasikads43gmailcomPrashant}>
                      <Grid className={styles.rasikEmail} height="4vh" width="40vw">

                      
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
                      </Grid>
                      <Grid className= {styles.prashantEmail}>
                      <a className={styles.rasikads43gmailcom}
                        href="mailto:prashant@rasikcommunications.com"
                        target="_blank">
                      <span>
                        &nbsp;
                        <span className={styles.prashantrasikcommunicationsc}>
                          prashant@rasikcommunications.com
                        </span>
                      </span>
                      </a>
                      </Grid>
                    </p>
                    <p className={styles.blankLine4}>
                      <span>&nbsp;</span>
                    </p>
                    <p className={styles.blankLine5}>
                      <span>&nbsp;</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.contactsMrPrashantContainer}>
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
              </div>
            </div>
          </div>
          </Grid>









       

    {/* </Grid> */}

   </Grid>
   <div style={{ height: 20 }} />
   </div>
  )
}

export default MeetUs;