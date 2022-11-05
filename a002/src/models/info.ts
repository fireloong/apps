import { IRootState, IRootDispatch } from '@/store';
import infoService from '@/services/info';

export default {
  state: {
    logo: '',
    serviceNumber: '',
    joinNumber: '',
    address: '',
    copyright: '',
    copyrightContent: '',
    qr: '',
  },

  reducers: {
    update: (prevState: IRootState, payload: IRootState) => {
      return { ...prevState, ...payload };
    },
  },

  effects: (dispatch: IRootDispatch) => ({
    async fetchInfo() {
      const info = await infoService.getInfo();
      dispatch.info.update(info.data);
    },
  }),
};
