# Topics.io
topics.io prototype

## Dev env setup:

Install all dependencies:

`npm install`

Install build tools for React:

`npm install -g browserify babelify`

Build bundle:

`browserify -t [ babelify --presets [ react ] ] frontend/src/index.js -o public/bundle.js`

## Run server

Server runs at `http://localhost:3000`

Run server:

`node app.js`
