import feathersClient, { makeServicePlugin, BaseModel } from '../../feathers-client';

const servicePath = 'users';

class User extends BaseModel {
  static modelName = 'User';
  static instanceDefaults() {
    return { email: '', password: '' };
  };

  constructor(data, options) {
    super(data, options);
  }
}

export default makeServicePlugin({
  Model: User,
  service: feathersClient.service(servicePath),
  servicePath
});
