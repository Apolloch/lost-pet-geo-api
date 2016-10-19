module.exports = {
  name: 'genae-api-local',
  server: {
    port: process.env.PORT || 5555,
    url: 'http://localhost:' + (process.env.PORT || 5555),
    swaggerUrl: 'http://localhost:' + (process.env.PORT || 5555),
    basePath: '/api/v1.0'
  },
  mongo: {
    url: 'mongodb://localhost:27017/node-local'
  }
};
