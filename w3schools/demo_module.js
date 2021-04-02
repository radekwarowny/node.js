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


// running the server
var http = require('http'); // modules use require() function
var dt = require('./myfirstmodule'); // including my module

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('Hello World!');
}).listen(8080); 

