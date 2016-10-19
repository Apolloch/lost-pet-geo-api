'use strict';

module.exports = {
  paths: {
    '/api/v1.0/activities': {
      get: {
        tags: ['activities'],
        summary: 'Activities',
        operationId: 'activities'
      }
    }
  },

  definitions: {
    User: {
      properties: {
        id: {
          type: 'integer'
        },
        username: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        password: {
          type: 'string'
        }
      }
    }
  }

};
