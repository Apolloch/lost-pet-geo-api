'use strict';

module.exports = {
	users:{
		login: {
			endpoint: '/login',
			method: 'POST'
		},
		signup: {
			endpoint: '/signup',
			method: 'POST'
		},
		forgot_password: {
			endpoint: '/forgot',
			method: 'POST'
		}
	}
};
