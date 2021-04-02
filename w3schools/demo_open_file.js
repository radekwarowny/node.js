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

 var fs = require('fs');

 fs.open('mynewfile2.txt', 'w', function(err, file) {
 	if (err) throw err;
 	console.log('Saved!');
 });