import { api } from '../config/axiosConfig';

export const UserAPI = {
  create: async (data) => {
    const res = await api.request({
      url: 'users',
      data: data,
      method: 'POST',
    });
    return res.data;
  },
};
