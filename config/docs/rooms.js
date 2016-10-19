'use strict';

module.exports = {
  paths: {
    '/api/v1.0/rooms': {
      get: {
        tags: ['rooms'],
        summary: 'Rooms',
        operationId: 'rooms'
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
