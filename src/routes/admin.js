// Layout Types
import DefaultAdminLayout from '../layouts/admin';
import AdminDashboard from '../pages/admin/Dashboard';

// Person
import AllPerson from '../pages/admin/people/AllPerson';
import NewPerson from '../pages/admin/people/NewPerson';
import ShowPerson from '../pages/admin/people/ShowPerson';
import UpdatePerson from '../pages/admin/people/UpdatePerson';

// Movie
import AllMovies from '../pages/admin/movies/AllMovies';
import NewMovie from '../pages/admin/movies/NewMovie';
import ShowMovie from '../pages/admin/movies/ShowMovie';
import UpdateMovie from '../pages/admin/movies/UpdateMovie';

export default [
  {
    path: '/admin',
    layout: DefaultAdminLayout,
    component: AdminDashboard,
    exact: true
  },

  {
    path: '/admin/people',
    layout: DefaultAdminLayout,
    component: AllPerson,
    exact: true
  },
  {
    path: '/admin/person/new',
    layout: DefaultAdminLayout,
    component: NewPerson,
    exact: true
  },
  {
    path: '/admin/person/:id',
    layout: DefaultAdminLayout,
    component: ShowPerson,
    exact: true
  },
  {
    path: '/admin/person/:id/update',
    layout: DefaultAdminLayout,
    component: UpdatePerson,
    exact: true
  },

  {
    path: '/admin/movies',
    layout: DefaultAdminLayout,
    component: AllMovies,
    exact: true
  },
  {
    path: '/admin/movie/new',
    layout: DefaultAdminLayout,
    component: NewMovie,
    exact: true
  },
  {
    path: '/admin/movie/:id',
    layout: DefaultAdminLayout,
    component: ShowMovie,
    exact: true
  },
  {
    path: '/admin/movie/:id/update',
    layout: DefaultAdminLayout,
    component: UpdateMovie,
    exact: true
  },
];
