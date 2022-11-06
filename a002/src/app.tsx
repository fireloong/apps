import { runApp, IAppConfig, config } from 'ice';
import 'uno.css';
import '@unocss/reset/antfu.css';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
    fallback: <div>loading...</div>,
  },
  request: {
    withFullResponse: true,
    baseURL: '/api',
    interceptors: {
      request: (config: any) => {
        console.log('config :>> ', config);
      },
    },
  },
};

runApp(appConfig);
