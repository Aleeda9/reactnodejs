const express = require('express');
const app = express();
const port = 3050;
const bodyParser = require('body-parser');
const router = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));

app.use('/users', router);

app.get('/', ((request, response, next) => {
    response.send('Hello, my dear!<br>Add "/users" to see users list');
}));

const server = app.listen(port, error => {
    if(error)
        return console.log(`Error: ${error}`);
    
    console.log(`Server listening on port ${server.address().port}`);
});