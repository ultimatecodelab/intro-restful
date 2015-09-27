# Introduction to RESTful APIs
In this exercise we will have a look at the bullding of a simple RESTful API.

## Exercises
1. Update npm using the command 'npm install -g npm'.

1. Download the files in this repository, extract them, and open a command prompt in the directory.

1. Install express in the current directory using the command 'npm install express'.

1. Download curl.exe from [here](http://www.paehl.com/open_source/?CURL_7.44.0).

1. Run rest.js using node.

1. Connect to http://127.0.0.1/list using the command 'curl -v http://127.0.0.1:8000'. Examine the request and response.

1. Add a new route in rest.js with the format '/todo/<num>', where <num> is an integer. The route should respond, in JSON, the task at index <num>.  

## Advanced exercises
1. Create a new route to delete an element of the todos, by index.

1. Create a new route to add todos, using the HTTP POST method. Curl will allow you to send POST requests from the ommand line. 

## Note
- The documentation for routing in Express: [Routing](http://expressjs.com/guide/routing.html).

- See [here(http://expressjs.com/starter/hello-world.html) for the Express Hello World example.

- See [this](http://stackoverflow.com/questions/8506658/node-js-express-routing-with-get-params) Stack Overflow post for the syntax for using parameters in routes.