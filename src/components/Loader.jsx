// import { makeStyles } from '@mui/material/styles';
import circle from 'assets/packages/cf_circle.png';
import Grid from '@mui/material/Grid2';
import { alpha } from '@mui/system';
import { CFColors } from '../constants/colors';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    left: 0,
    top: 0,
    backgroundColor: alpha(CFColors.info.main, 0.3),
  },
};

const Loader = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={styles.container}
    >
      <img
        src={circle}
        alt="Camrin Films Logo"
        className="highlight-spin-img"
        style={{ height: '40px' }}
      />
    </Grid>
  );
};

export default Loader;
