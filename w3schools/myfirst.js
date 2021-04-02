/**
 *
 * Results of the Node.js w3schools tutorial
 *
 * @summary short description for the file
 * @radek warowny <radekwarownydev@gmail.com>
 *
 * Created at     : 02-04-2021 08:33:00 
 * Last modified  : 
 */



// creating the server object
var http = require('http'); // modules use require() function

http.createServer(function (req, res) { // writing the response to the client
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  res.end('Hello World!'); // end the response
}).listen(8080); // the server object listens onport 8080

