import { runApp, IAppConfig } from 'ice';
import 'uno.css';
import '@unocss/reset/antfu.css';

const appConfig: IAppConfig = {
  app: {
    rootId: 'root',
    strict: true,
  },
  router: {
    type: 'browser',
    fallback: <div>loading...</div>,
  },
};

runApp(appConfig);
