import { api } from '../config/axiosConfig';

export const EnquiryAPI = {
  create: async (data) => {
    const res = await api.request({
      url: 'enquiries',
      data: data,
      method: 'POST',
    });
    return res.data;
  },
};
