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
          if (process.env.NODE_ENV === 'production') {
            config.baseURL = 'http://192.168.1.4:6001/';
          }
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
