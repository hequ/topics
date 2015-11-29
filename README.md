# Topics.io
topics.io prototype

## Dev env setup:

Install all dependencies:

`npm install`
Note: CoreNLP 3.5.0+ requires JDK (Java 1.8) to function

Install build tools for React:

`npm install -g browserify babelify`

Build bundle:

`browserify -t [ babelify --presets [ react ] ] frontend/src/index.js -o public/bundle.js`

Using CoreNLP:

Download Stanford CoreNLP zip from [http://nlp.stanford.edu/software/corenlp.shtml] and extract it's contents somewhere in this project (e.g. node_modules/stanford-corenlp/corenlp). `node-java` currently requires node version 0.12.8 or earlier to work.

Confirm that CoreNLP works properly: `node backend/corenlp_test.js`

## Run server

Server runs at `http://localhost:3000`

Run server:

`node app.js`
