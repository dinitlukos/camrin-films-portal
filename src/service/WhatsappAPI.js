import { api } from '../config/axiosConfig';

export const WhatsappAPI = {
  get: async () => {
    const res = await api.request({
      url: 'whatsapp',
      method: 'GET',
    });
    return res.data;
  },
};
