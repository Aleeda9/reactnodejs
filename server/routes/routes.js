const users = require('./users');
const express = require('express');
const router = express.Router();

router.use((request, response, next) => {
    console.log('use');
    next();
});

router.get('/', (request, response, next) => {
    response.send(users);
});

module.exports = router;