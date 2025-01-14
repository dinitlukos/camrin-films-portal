import Grid from '@mui/material/Grid2'

import circle from "../assets/packages/cf_circle_primary.png";
import logo from "../assets/packages/cf_logo.png";
const LogoContainer = () => {
    return <Grid
    container
    alignItems="center"
    justifyContent="center"
    direction="column"
  >
    <div>
      <img src={logo} alt="Camrin Films Logo" className="logo" />
      <div>
        <img src={circle} alt="Camrin Films Logo" className="spin-img" />
      </div>
    </div>
  </Grid>
}

export default LogoContainer