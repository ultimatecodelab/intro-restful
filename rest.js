var express = require('express');

var bodyParser = require('body-parser');
var app = express();

var todos = [
  'Clean dog.'
  , 'Buy Groceries.'
  , 'Send letter.'
];

app.get('/', function(req, res) {
    res.json({ message: 'It works!' });   
});

app.get('/todo', function(req, res) {
    res.json(todos);   
});

/*created a new route and displaying the element of an array[id]
//Add a new route in rest.js with the format /todo/<num>, where <num>
// is an integer. The route should respond, in JSON, with the task at index <num>.*/
app.get('/todo/:id', function(req, res) {
    res.json(todos[req.params.id]);
});

//Advanced Exercises
//Create a new route to delete an element of the todos, by index.
app.get('/todo/delete/:id', function(req, res) {
     todos.splice([req.params.id],1); //deleting an element
    res.json(todos); // displaying the array -json
});

//Create a new route to add todos, using the HTTP POST method.
// Curl will allow you to send POST requests from the ommand line
app.post('/todo/add/', function(req, res) {
    todos.push(req.body.dataToAdd);
    res.json(todos); // displaying the array -json
});


var server = app.listen(8000);
