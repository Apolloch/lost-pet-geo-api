'use strict';

module.exports = {
  paths: {
    '/api/v1.0/bookings': {
      get: {
        tags: ['bookings'],
        summary: 'Bookings',
        operationId: 'bookings'
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
