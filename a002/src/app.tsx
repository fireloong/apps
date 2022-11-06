import { runApp, IAppConfig } from 'ice';
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
      request: {
        onConfig: (config) => {
          console.log('env :>> ', process.env.NODE_ENV);
          console.log('config :>> ', config);
          return config;
        },
        onError: (error) => {
          return Promise.reject(error);
        },
      },
    },
  },
};

runApp(appConfig);
