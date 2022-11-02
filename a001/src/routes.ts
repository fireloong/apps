import { IRouterConfig, lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';
import SubLayout from '@/layouts/SubLayout';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Pro = lazy(() => import('@/pages/Pro'));
const Stores = lazy(() => import('@/pages/Stores'));
const Joins = lazy(() => import('@/pages/Joins'));
const Article = lazy(() => import('@/pages/Article'));
const Advantage = lazy(() => import('@/pages/Advantage'));
const Contact = lazy(() => import('@/pages/Contact'));
const Lbs = lazy(() => import('@/pages/Lbs'));
const NotFound = lazy(() => import('@/pages/NotFound'));

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
      {
        path: '/',
        component: SubLayout,
        children: [
          {
            path: '/about',
            exact: true,
            component: About,
          },
          {
            path: '/pro',
            exact: true,
            component: Pro,
          },
          {
            path: '/stores',
            children: [
              {
                path: '/',
                exact: true,
                component: Stores,
              },
              {
                path: '/joins',
                exact: true,
                component: Joins,
              },
            ],
          },
          {
            path: '/advantage',
            exact: true,
            component: Advantage,
          },
          {
            path: '/article',
            exact: true,
            component: Article,
          },
          {
            path: '/contact',
            exact: true,
            component: Contact,
          },
          {
            path: '/lbs',
            exact: true,
            component: Lbs,
          },
          {
            component: NotFound,
          },
        ],
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
