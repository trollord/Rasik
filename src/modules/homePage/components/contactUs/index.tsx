import { Grid, Typography, Box } from '@mui/material';
import { useState } from 'react';
import styles from "./styles.module.css"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useInView } from 'react-intersection-observer';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    // Prepare the request body
    const requestBody = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      To: 'rasikads43@gmail.com' // Hardcoded recipient
    };

    const response = await fetch('https://cqgo2gggpg.execute-api.ap-northeast-1.amazonaws.com/default/mailer_function', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    
    if (data.status === 'success') {
      alert('Mail sent successfully! We will get back to you soon.');
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      alert('Failed to send mail. Please try again later.');
      console.error('Error details:', data.message);
    }
  } catch (error) {
    alert('An error occurred while sending your message. Please try again.');
    console.error('Network error:', error);
  }
};
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  // className={`${leftInView ? styles.slideInFromLeft : ''}`}
  // className={`${styles.formGrid} ${rightInView ? styles.slideInFromRight : ''}`}
  const isMobile = useMediaQuery('(max-width:600px)', { noSsr: true });
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:1200px)', { noSsr: true });
  // console.log(isMobile);
  return (
    
    <Grid className={styles.mainGrid} container id="contactUs" width='100%' spacing={2} m='auto' height={isMobile ? '90vh' : isTablet? '105vh':'100vh'} justifyContent="center" alignItems="center" sx={{ flexDirection: isMobile ? 'row' : 'row', }} p={3} >
 
      {!isTablet && <Grid ref={leftRef} height={isMobile ? "10vh" : isTablet?"20vh":"25vh"} width={isMobile ? "68vw" : isTablet ? "35vw" : "477px"} sx={{ marginBottom: isMobile ? 10 : 0, marginLeft: isMobile ? "3vw" : "0vw" }}  >
        <Box className={styles.frameWrapper}>
          <Box className={styles.frameGroup} width={isTablet ? "35vw" : "100%"}>
            <Box className={styles.notSureWhatYouNeedWrapper}>
              <h1 className={styles.notSureWhat}>Not sure what you need?</h1>
            </Box>
            <Typography className={styles.ourTeamAt} width={isTablet ? "35vw" : "100%"} fontSize="3vh" >
              Drop your message and our team is happy to help!
            </Typography>
          </Box>
        </Box>
      </Grid>}
      {isTablet && <Grid flexDirection="row" >
        <Box>
          <Typography className={styles.notSureWhat} fontWeight="600" fontSize="12vh">Not sure what you need?</Typography>
        </Box>
        <Box>
          <Typography className = {styles.ourTeamAt} > Drop your message and our team is happy to help!</Typography>
        </Box>
      </Grid>}
      <Grid container ref={rightRef} item md={7} display='flex' height={isMobile ? '53vh' : '56vh'} width={isMobile ? "77vw" : "646px"} p={4} borderRadius='10px'>
        <form onSubmit={handleSubmit} style={{ paddingLeft: '1.2vw', paddingTop: "0.4vw", paddingBottom: "0.4vw", width: '100%', height: "100%", display: 'flex', gap: '15px', flexDirection: 'column' }} >
          <Box height="5vh" style={{ display: 'flex' }}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='First name*' style={{ padding: '10px 15px', width: '50%', height: isTablet?"32px":"40px", marginRight: '10px', border: '1px solid #D5D5D5', borderRadius: '10px', fontFamily: "Inria Sans" }} />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Last name*' style={{ padding: '10px 15px', width: '50%', height:isTablet?"32px": "40px", border: '1px solid #D5D5D5', borderRadius: '10px', fontFamily: "Inria Sans" }} />
          </Box>
 
          <Box height="5vh" >
 
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email*' style={{ width: '100%', height:isTablet?"32px": "40px", border: '1px solid #D5D5D5', padding: '10px 15px', borderRadius: '10px', fontFamily: "Inria Sans" }} />
          </Box>
          <Box height="5vh">
 
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone*' style={{ width: '100%', height:isTablet?"32px": "40px", border: '1px solid #D5D5D5', padding: '10px 15px', borderRadius: '10px', fontFamily: "Inria Sans" }} />
          </Box>
          <Box height="22vh" >
 
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Type Your Message...' style={{ width: '100%', height:isTablet?"65px": "100%", border: '1px solid #D5D5D5', padding: '10px 15px', borderRadius: '10px', fontFamily: "Inria Sans" }} rows="8" cols="50" />
          </Box>
          <Box height="7vh" paddingTop="1vh">
            <button type="submit" style={{ width: '100%', height: isMobile ? '90%' : '40px', backgroundColor: '#000', color: '#fff', padding: '7px 10px', borderRadius: '10px', cursor: 'pointer' }}>Send</button>
          </Box>
        </form>
      </Grid>
    </Grid>
  )
}

export default ContactUs;