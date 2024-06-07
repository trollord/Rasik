import Header from "../../../commonComponents/header";
import { Grid, Typography} from "@mui/material";
import styles from "./styles.module.css"

export function About() {
    return <>
  
<Grid p={5} width='90%' m='auto' id='about'>
<Grid container  display='flex' flexDirection='column' alignItems='center' justifyContent='center' >
        {/* <Typography variant="h4">About Us</Typography>
                <Typography>Who are we?</Typography>
                <Typography sx={{wordWrap:'break-word',textIndent:'50px'}}>We are amongst the select few accredited with INS. It empowers us to deal directly with media houses across India. We have an excellent rapport with all the leading publications all over India. Hence you get the best ever rates & deals for your ads releases. You name anything in the world of print, electronic and web advertising and the entire range of services come to you without compromising on quality and without an iota of doubt. Our experience and expertise ensure that you get maximum impact for every Rupee of your media expenditure.
        </Typography> */}
        <div className={styles.frameWrapper}>
          <div className={styles.aboutUsParent}>
            <h1 className={styles.aboutUs}>About Us</h1>
            <div className={styles.whoAreWeWrapper}>
              <div className={styles.whoAreWe}>Who are we?</div>
            </div>
          </div>
        </div>

        <p className={styles.weAreAmongstContainer}>
          <span
            className={styles.weAreAmongst}
          >{`We are amongst the select few accredited with INS. It empowers us to deal directly with media houses across India. We have an excellent rapport with all the leading publications all over India. Hence you get the best ever rates & deals for your ads releases. You name anything in the world of print, electronic and web advertising and the entire range of services come to you without compromising on quality and without an iota of doubt. Our experience and expertise ensure that you get maximum impact for every Rupee of your media expenditure.`}</span>
          <span className={styles.blankLine}>&nbsp;</span>
          <span
            className={styles.withALegacy}
          >{`With a legacy spanning over 6 decades of accomplishments and progress, we at Rasik are a proud lot. Our founding principles - namely integrity, service and commitment, are fundamental, distinguishing and intrinsic to us. By combining conventional wisdom and modern thinking with ethical conduct, we've gained an impeccable reputation-both among our clientele and associates. And with it, their unflinching trust and support. Reason why we have grown even when the going was tough. It's people like you with whom we've flourished and now look forward to many more milestones together in the years to come. `}</span>
          <span className={styles.blankLine1}>&nbsp;</span>
        </p>
        </Grid>

</Grid>
      

   

   
      
    </>
}
