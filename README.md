# Webpack CORS Sample

This is a sample React.js app created to exemplify the concepts detailed in the following article:

* [Coming Soon](http://gorillalogic.com/blog)

It is a simple `hello world` application which includes:

* a WebPack Dev Server sample implementation
* an Express.js API sample implementation
* a sample `HelloWorld` React.js component

All of the previous put together in order to show how CORS affects development of React.js apps.

## Dependencies

Run the following to install dependencies:

```
$ npm install
```

## Running DEV

This sample uses the npm package [concurrently](https://github.com/kimmobrunfeldt/concurrently) to run both the front-end dev server ([webpack-dev-server](https://github.com/webpack/webpack-dev-server)) and the back-end API ([Express.js](https://github.com/expressjs/express)) at the same time.

So, spinning up the `DEV` server and API is as easy as running:

```
$ npm run dev
```

## Packaging and running PROD

For simplicity's sake I have made packaging and running the `PROD` server into a single command:

```
$ npm start
```

This packages the production bundle into the `bundle` directory and spins up a single **Express.js** server that servers both the static bundle files as well as the API.