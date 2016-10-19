'use strict';
var kue = require('kue');

module.exports = function(config) {

  console.log('je passe dans kue.js');
  var queue = kue.createQueue({
    prefix: 'queue',
    redis: config.redis
  });

  queue.on('error', function (err) {
    console.log('OUPS ERREUR KUE : ', err);
  });

  process.once('SIGTERM', closeRedis(queue));
  process.once('SIGUSR2', closeRedis(queue));
  process.once('SIGINT', closeRedis(queue));

  return queue;
};

function closeRedis(queue) {
  return function () {
    queue.shutdown(function(err) {
      console.log('Kue is shut down. ', err || '');
      process.exit(0);
    }, 1000);
  };
}
