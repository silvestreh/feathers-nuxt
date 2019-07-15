# feathers-nuxt

> A Feathers + Nuxt demo/boilerplate

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

It also uses NeDB to store users. This is because NeDB handles data persistence in text files and it won't require you to have MongoDB, PostgreSQL, or any other database installed to just try this boilerplate.

Feathers and Vue/Nuxt integration is done through the amazing [`feathers-vuex`](https://github.com/feathers-plus/feathers-vuex).

Remember to set these environment variables when running in production:

```shell
NODE_ENV=production
PORT=3030 # or whatever port you want to use
API_URL=https://yourappdomain.com/ # this is where the API is running
```

After that, you can safely start the application by using `npm start`, which will trigger a Nuxt build and then start the app.

Here's a [working demo](https://feathers-nuxt.herokuapp.com/) running on Heroku.

## ⚠️ Support

You may use this boilerplate for whatever projects you want, but beware that updates to it will be scarse. You're very much welcome to contribute if you find something is off.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/feathers-nuxt; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

For more information on `feathers-vuex`, visit [their docs](https://feathers-plus.github.io/v1/feathers-vuex/index.html).

For more information on `nuxt`, visit [their docs](https://nuxtjs.org/guide).

## Changelog

__0.0.0__

- Initial release

## License

Copyright (c) 2019 Silvestre Herrera.

Licensed under the [MIT license](LICENSE).
