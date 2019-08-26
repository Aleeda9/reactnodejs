const users = require('./users');
const express = require('express');
const router = express.Router();

// handler for GET request
router.get('/', (request, response, next) => {
    response.send(users);
});

// handler for GET request
router.get('/:userId', (request, response, next) => {
    var {userId} = request.params; 
    console.log(`get info for ${userId}`);

    response.send(users[userId] ? users[userId] : `Sorry, bit there is no user with id ${userId}`);
});

// handler for POST request (create user)
router.post('/', (request, response, next) => {
    var {params} = request; 
    console.log(`post user ${params}`);
    
    users[generateNewUserId(users)] = params;
});

// handler for PUT request (update user)
router.put('/:userId', (request, response, next) => {
    var {userId, ...rest} = request.params; 
    console.log(`put info for ${userId}`, rest);

    try{
        users[userId] = rest;
    }
    catch(e){
        response.send(`Sorry, but there is no user with id ${userId}`);
    }
});

// handler for DELETE request (delete user)
router.delete('/:userId', (request, response, next) => {
    var {userId} = request.params; 
    console.log(`delete user ${userId}`);

    try {
        unset(users[userId]);
    }
    catch(e) {
        response.send(`Sorry, but there is no user with id ${userId}`);
    }
});

module.exports = router;

// bizarre way to generate id, but in my case of pure object of users it works 
function generateNewUserId(users) {
    var i = 0;
    while(users[`user${i}`]) {
        i++;
    }
    return `user${i}`;
}