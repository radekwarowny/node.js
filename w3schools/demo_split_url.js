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

 var url = require('url');
 var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
 var q = url.parse(adr, true);

 console.log(q.host); 
 console.log(q.pathname);
 console.log(q.search);

 var qdata = q.query;
 console.log(qdata.month);