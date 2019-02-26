import feathersClient from '../feathers-client';
import feathersVuex, { initAuth } from 'feathers-vuex';

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' });

export const state = () => ({});
export const mutations = {};

export const actions = {
  nuxtServerInit({ commit, dispatch }, { req }) {
    return initAuth({
      commit,
      dispatch,
      req,
      moduleName: 'auth',
      cookieName: 'feathers-jwt'
    })
  }
};

export const plugins = [
  service('users'),
  auth({
    state: { publicPages: ['index', 'authenticate'] },
    userService: 'users'
  })
];
