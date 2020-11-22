// require in express and bodyParser, as well as the router
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000; // port used for the app
const todoRouter = require('./routes/todo.router') 

app.use(bodyParser.urlencoded({extended: true})); // needed to sent objects from client side to router
app.use(express.static('server/public')); 

// ROUTES
app.use('/tasks', todoRouter); // sends information from client side to router

// Start listening for requests on a specific port
app.listen(PORT, () => {
  console.log('listening on port...', PORT);
});
