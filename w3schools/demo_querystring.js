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

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);