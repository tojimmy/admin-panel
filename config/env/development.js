'use strict';

module.exports = {
	db: {
		URL: "mongodb://100.100.7.60/peachDB",
		options: {
			user: '',
			pass: ''
		}
	},

	server: {
		PORT: 3000
	},
	debug_mongo: true,
	admin: {
		email: 'admin@gmail.com',
		password: '123456'
	},
    image_extensions : {
      'image/jpeg' : '.jpg',
      'image/jpg' : '.jpg',
      'image/png' : '.png',
      'image/gif' : '.gif'
    },	

    email: "flexsin.nodejs@gmail.com",
    password: "flexsin@123",
    image_destination: 'public/assets/img/uploads',
    secret: '876sdf&%&^435345(*^&^654sdsdc&^&kjsdfjbksdureyy3(&(*&(&7$%^#%#&^*(&)*)*' 	
};