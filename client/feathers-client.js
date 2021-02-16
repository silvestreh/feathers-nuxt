import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import io from 'socket.io-client';
import { iff, discard } from 'feathers-hooks-common';
import feathersVuex from 'feathers-vuex';
import { CookieStorage } from 'cookie-storage';

const socket = io(process.env.API_URL);
const feathersClient = feathers()
  .configure(socketio(socket), { transports: ['websocket'] })
  .configure(auth({ storage: new CookieStorage() }))
  .hooks({
    before: {
      all: [
        iff(
          context => ['create', 'update', 'patch'].includes(context.method),
          discard('__id', '__isTemp')
        )
      ]
    }
  });

// Setting up feathers-vuex
const {
  makeServicePlugin,
  makeAuthPlugin,
  BaseModel,
  models,
  FeathersVuex
} = feathersVuex(feathersClient, {
  serverAlias: 'api', // optional for working with multiple APIs (this is the default value)
  idField: '_id', // Must match the id field in your database table/collection
  whitelist: ['$regex', '$options']
});

export default feathersClient;
export { makeAuthPlugin, makeServicePlugin, BaseModel, models, FeathersVuex };
