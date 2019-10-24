import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import io from 'socket.io-client';
import { CookieStorage } from 'cookie-storage';
import feathersVuex from 'feathers-vuex';

const storage = new CookieStorage();
const socket = io(process.env.apiURL, { transports: ['websocket'] });
const app = feathers()
  .configure(socketio(socket))
  .configure(auth({ storage }));

export default app;

const {
  makeServicePlugin,
  makeAuthPlugin,
  BaseModel,
  models
} = feathersVuex(app, { idField: '_id' });

export { makeAuthPlugin, makeServicePlugin, BaseModel, models };
