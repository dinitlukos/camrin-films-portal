import Grid from '@mui/material/Grid2'

import circlePrimary from "assets/packages/cf_circle_primary.png";
import logoPrimary from "assets/packages/cf_logo.png";
const LogoContainer = ({circle, logo}) => {
    return <Grid
    container
    alignItems="center"
    justifyContent="center"
    direction="column"
  >
    <div>
    
      <img src={logo ?? logoPrimary} alt="Camrin Films Logo" className="logo" />
      <div style={{height:0}}>
        <img src={circle ?? circlePrimary} alt="Camrin Films Logo" className="spin-img" />
      </div>
    </div>
  </Grid>
}

export default LogoContainer