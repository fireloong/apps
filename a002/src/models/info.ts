import { IRootDispatch } from '@/store';
import infoService from '@/services/info';

interface IState {
  logo?: string;
  serviceNumber: string;
  joinNumber: string;
  address: string;
  copyright: string;
  copyrightContent: string;
  qr: string;
}

const initState: IState = {
  logo: '',
  serviceNumber: '',
  joinNumber: '',
  address: '',
  copyright: '',
  copyrightContent: '',
  qr: '',
};

export default {
  state: initState,

  reducers: {
    update: (prevState: IState, payload: IState) => {
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
