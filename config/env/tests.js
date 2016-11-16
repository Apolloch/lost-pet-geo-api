module.exports = {
  name: 'lostpet-api-test',
  server: {
    port: process.env.PORT || 5555,
    url: 'http://localhost:' + (process.env.PORT || 5555),
    basePath: '/api/v1.0'
  },
  mongo: {
    url: 'mongodb://test:test@ds061371.mongolab.com:61371/node-base-test'
  },
  cloudinary: {
    cloudName: 'dv1oo16rf', 
    apiKey: '416523386765334', 
    apiSecret: '4xvoXrNJB65-f0rrB6pklMuk91Y' 
  }
};
