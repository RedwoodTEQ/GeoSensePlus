export default [
  {
    path: '/welcome',
    component: './Welcome',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    // Apply layout to multiple paths.
    // Reference to https://umijs.org/zh-CN/docs/routing#routes
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    // TODO: Dashboard component
    component: './Welcome',
  },
  {
    path: '/database',
    name: 'database',
    icon: 'database',
    routes: [
      {
        path: '/database/areas',
        name: 'areas',
        icon: 'table',
        component: './TableList',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
