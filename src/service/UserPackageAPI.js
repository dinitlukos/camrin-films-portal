import { api } from '../config/axiosConfig';

export const UserPackageAPI = {
  create: async (data) => {
    const res = await api.request({
      url: 'userpackages',
      data: data,
      method: 'POST',
    });
    return res.data;
  },
  getAllPackages: async () => {
    const res = await api.request({
      url: 'userpackages',
      method: 'GET',
    });
    return res.data;
  },
  getPackageById: async (cfId) => {
    const res = await api.request({
      url: `userpackages/${cfId}`,
      method: 'GET',
    });
    return res.data;
  },
  update: async (cfId, data) => {
    const res = await api.request({
      url: `userpackages/${cfId}`,
      data: data,
      method: 'PUT',
    });
    return res.data;
  },
};
