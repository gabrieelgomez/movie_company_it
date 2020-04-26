// Layout Types
import DefaultAppLayout from '../layouts/app';

// Route Pages
import Home from '../pages/app/Home';
import UserProfile from '../pages/app/UserProfile';

export default [
  {
    path: '/',
    exact: true,
    layout: DefaultAppLayout,
    component: Home
  },
  {
    path: '/my-profile',
    layout: DefaultAppLayout,
    component: UserProfile
  },
];
