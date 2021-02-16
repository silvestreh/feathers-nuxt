import { makeAuthPlugin } from '../feathers-client';

export default makeAuthPlugin({
  userService: 'users',
  state: {
    // Pages which do not require auth. SEE: middleware/auth
    publicPages: ['index', 'authenticate']
  }
});
