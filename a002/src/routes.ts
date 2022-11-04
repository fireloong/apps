import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Home = lazy(() => import('@/pages/Home'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
    ],
  },
];

export default routerConfig;
