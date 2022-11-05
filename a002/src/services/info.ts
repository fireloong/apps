import { request } from 'ice';

export default {
  getInfo: async () => {
    return await request.get('/info');
  },
};
