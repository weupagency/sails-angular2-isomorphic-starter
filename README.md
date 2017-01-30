# PROJECT NO LONGER MAINTAINED - Sails.js & Angular 2 with server-side rendering
## Installation
### Debian

```sh
$ git clone https://github.com/weupagency/sails-angular2-isomorphic-starter myproject
$ cd myproject
$ npm install
$ npm start
```
### Ubuntu

```sh
$ git clone https://github.com/weupagency/sails-angular2-isomorphic-starter myproject
$ cd myproject
$ sudo npm install
$ sudo npm start
```


## Known issues during installation
### Angular2/ts/package.json: Unexpected token <
#### Output
```sh
/node_modules/angular2/ts/package.json: Unexpected token <
```
#### How to fix
```sh
$ cd myproject
$ sudo rm -rf node_modules/angular2/ts 
```
### Angular2 EXCEPTION: Token must be defined!
#### Output
```sh
EXCEPTION: Token must be defined!
STACKTRACE:
Error: Token must be defined!
```
#### How to fix
```sh
Not fixed yet
```


## How it works ?
Coming soon...
