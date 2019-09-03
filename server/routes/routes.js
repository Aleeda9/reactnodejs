var users = require('../users');

const express = require('express');
const router = express.Router();

// handler for GET request
router.get('/', (request, response, next) => {
    console.log("fetchUsers");
    response.send(users);
});

// handler for GET request
router.get('/:userId', (request, response, next) => {
    var { userId } = request.params; 
    console.log(`get info for ${userId}`);

    var foundUser = users.find(user => user.id == userId);
    response.send(foundUser ? foundUser : `Sorry, but there is no user with id ${userId}`);
});

// handler for POST request (create user)
router.post('/', (request, response, next) => {
    var data = Object.assign({}, request.body);
    console.log(`post user ${data.name}`);
    
    users.push({...data, id: generateNewUserId(users)});

    response.send({'success': true});
});

// handler for PUT request (update user)
router.put('/:userId', (request, response, next) => {
    var { userId } = request.params;
    var data = Object.assign({}, request.body);
    console.log(`put info for ${userId} ${data.name}`);

    try{
        users = users.map( user => user.id == userId ? {...data, id: user.id} : user );
        response.send({'success': true});
    }
    catch(e) {
        response.send({'success': false});
    }
});

// handler for DELETE request (delete user)
router.delete('/:userId', (request, response, next) => {
    var { userId } = request.params; 
    console.log(`delete user ${userId}`);

    users = users.filter(user => user.id != userId);

    response.send({'success': true});
});

module.exports = router;

// bizarre way to generate id, but in my case of pure object of users it works 
function generateNewUserId(users){
    var maxId = 0;
    for(var i in users)
        if(users[i].id > maxId)
            maxId = users[i].id;

    return ++maxId;
}