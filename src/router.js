import Vue from 'vue';
import Router from 'vue-router';

import PersonalBlog from './views/PersonalBlog.vue';
import UserProfileLite from './views/UserProfileLite.vue';
import Errors from './views/Errors.vue';
import Users from './views/Users.vue';
import History from './views/History.vue';
import NewRecord from './components/log-book/NewRecord.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/system-overview',
    },
    {
      path: '/system-overview',
      name: 'system-overview',
      component: PersonalBlog,
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: UserProfileLite,
    },
    {
      path: '/add-new-record',
      name: 'add-new-record',
      component: NewRecord,

    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    }, {
      path: '*',
      redirect: '/errors',
    },
  ],
});
