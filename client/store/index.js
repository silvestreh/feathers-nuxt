import Vuex from 'vuex';
import feathersClient from '../feathers-client';
import feathersVuex, { initAuth } from 'feathers-vuex';

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' });

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
      nuxtServerInit({ commit, dispatch }, { req }) {
        return initAuth({
          commit,
          dispatch,
          req,
          moduleName: 'auth',
          cookieName: 'feathers-jwt'
        })
      }
    },
    plugins: [
      service('users'),
      auth({
        state: { publicPages: ['index', 'authenticate'] },
        userService: 'users'
      })
    ]
  })
}
export default createStore
