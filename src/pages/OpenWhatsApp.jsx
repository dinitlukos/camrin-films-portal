import Grid from '@mui/material/Grid2';

import WhatsAppChatIcon from 'assets/chat_open.png';
import { useEffect } from 'react';

const whatsapp_url = 'https://wa.me/919745519554';

const OpenWhatsApp = () => {
  useEffect(() => {
    window.location.href = whatsapp_url;
  }, []);
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh' }}
    >
      <img
        src={WhatsAppChatIcon}
        onClick={() => window.open(whatsapp_url, '_blank')}
      />
    </Grid>
  );
};

export default OpenWhatsApp;
