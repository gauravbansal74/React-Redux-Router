import App from './containers/App';
import Login from './containers/routes/Login';

const routes = [
  { path: '/',
    component: App,
    childRoutes: [
      { path: 'login',
        component: Login
      },
      { path: 'example/self',
        component: App
      }
    ]
  }
];

export default routes;
