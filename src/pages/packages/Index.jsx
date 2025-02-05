import { useTheme } from '@mui/material';
import React, { useRef } from 'react';
import homeBg from 'assets/bg_doodle.png';
import LogoContainer from 'components/LogoContainer';
import About from './about/About';
import CustomTabs from './CustomTabs';
import Gallery from './gallary/Gallery1';
import './index.css';
import Packs from './pack/Packs';

const PackagePage = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const printRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      id="packageToPrint"
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: 'contain',
        padding: '5%',
        minHeight: '100vh',
      }}
      ref={printRef}
    >
      <LogoContainer />
      <div style={{height:"24px"}}/>
      <CustomTabs value={value} handleChange={handleChange} />
      <div style={{ padding: '20px 0' }}>
        <div hidden={value !== 0}>
          <Packs printRef={printRef} />
        </div>
        <div hidden={value !== 1}>
          <Gallery />
        </div>
        <div hidden={value !== 2}>
          <About />
        </div>
      </div>
      {/* <Fab sx={{position:'fixed', bottom:theme.spacing(2), right:theme.spacing(2)}} color="success">
        <a href="https://wa.me/919446288811" target="_blank">
                  <img src={whatsappimage} />
                  <WhatsApp style={{width:"0px", height:'40px'}}/>
                </a>
      </Fab> */}
    </div>
  );
};

export default PackagePage;
