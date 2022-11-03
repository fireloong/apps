import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';
import BasicLayout from '@/layouts/BasicLayout';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));

const routes: RouteConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/about',
        exact: true,
        component: About,
      },
    ],
  },
];

export default routes;
