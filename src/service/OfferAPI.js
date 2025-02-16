import { api } from '../config/axiosConfig';

export const OfferAPI = {
  getAllOffers: async () => {
    const res = await api.request({
      url: 'offers',
      method: 'GET',
    });
    return res.data;
  },
  send: async (data) => {
    const res = await api.request({
      url: 'offers/send',
      data: data,
      method: 'POST',
    });
    return res.data;
  },
};
