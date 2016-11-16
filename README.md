[![Build Status](https://travis-ci.org/bnjjj/lost-pet-geo-api.svg?branch=master)](https://travis-ci.org/bnjjj/lost-pet-geo-api) [![Coverage Status](https://coveralls.io/repos/github/bnjjj/lost-pet-geo-api/badge.svg)](https://coveralls.io/github/bnjjj/lost-pet-geo-api)

## Tools Prerequisites
+ Install dependencies :
```
$ npm install -g gulp nodemon
$ npm install
```
## Configuration
### Configuration of environment
+ Set the environment variable like this (Mac OS X) to use mongodb locally
```
$ export NODE_ENV='local'
```
Or like this for production
```
$ export NODE_ENV='production'
```
Or like this for development
```
$ export NODE_ENV='development'
```
##Development

+ To launch a development server
```
$ gulp
```
Or
```
$ gulp server
```
+ To lint all your sources
```
$ gulp jshint
```

##Test
Attention --> test require a mongodb server locally
+ To make tests
```
$ gulp mocha
```
