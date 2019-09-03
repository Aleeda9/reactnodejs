const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); // for correct work of OPTIONS request in common browsers
const port = 3050;
const routes = require('./routes/routes');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', routes);

app.get('/', ((request, response, next) => {
    response.send('Hello, my dear!<br>Add "/users" to address to see users list');
}));

const server = app.listen(port, error => {
    if(error)
        return console.log(`Error: ${error}`);
    
    console.log(`Server listening on port ${server.address().port}`);
});