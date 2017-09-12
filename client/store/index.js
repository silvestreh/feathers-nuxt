import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies
import Vuex from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies
import feathersVuex from 'feathers-vuex';
import feathers from '@/api';
import parseCookies from '@/utils/parse-cookies';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  actions: {
    nuxtServerInit({ dispatch }, { req }) { // eslint-disable-line consistent-return
      const accessToken = parseCookies(req)['feathers-jwt'];

      if (accessToken) {
        return dispatch('auth/authenticate', { strategy: 'jwt', accessToken });
      }
    },
  },
});

feathers.configure(feathersVuex(store, {
  idField: '_id',
  auth: {
    userService: '/users',
  },
}));

feathers.service('users');

export default () => store;
