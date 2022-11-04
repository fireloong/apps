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
};

runApp(appConfig);
