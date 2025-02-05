import axios from 'axios';

export const sendWhatsappMessage = async (phoneNumber, uId) => {
  const data = {
    messaging_product: 'whatsapp',
    to: phoneNumber,
    type: 'template',
    template: {
      name: 'cf_initial_response',
      components: [
        {
          type:'header',
          parameters: [{
            "type": "image",
            "image": {
              "link": "https://firebasestorage.googleapis.com/v0/b/cp-stories-f2019.firebasestorage.app/o/assets%2Fcf_welcome_low.jpg?alt=media&token=5c84751c-ba99-48de-bf64-f686246d7ad5"
            }
          }]
        },
        {
          type: 'button',
          sub_type:'url',
          index:'0',
          parameters: [
            {
              type: 'text',
              text: uId,
            },
          ],
        },
      ],
      language: { code: 'en_US' },
    },
  };
  const res = await axios.post(
    'https://graph.facebook.com/v21.0/515258515010956/messages',
    data,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return res;
};

export const sendWhatsappEnquiry = async (d, uId) => {
  const data = {
    messaging_product: 'whatsapp',
    to: "919747976867",
    type: 'template',
    template: {
      name: 'enquiries',
      components: [
        {
          type:'body',
          parameters: d
        },
        {
          type: 'button',
          sub_type:'url',
          index:'0',
          parameters: [
            {
              type: 'text',
              text: uId,
            },
          ],
        },
      ],
      language: { code: 'en_US' },
    },
  };
  const res = await axios.post(
    'https://graph.facebook.com/v21.0/515258515010956/messages',
    data,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return res;
};
