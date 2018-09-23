var express = require('express')
var app = express()
 /*
app.get('/', function (req, res) {
  res.send('Hello World')
})
*/ 

var server=app.listen(3000,listening);

app.get('/insert/:xxx/:yyy', function (req, res) {
 var data =req.params;
 // res.send('Hello World'+Number(data.longt)+','+Number(data.lat)+'')
 console.log("Yas!")
 console.log('Hello World'+Number(data.xxx)+','+Number(data.yyy)+'');
 res.send('Hello World'+Number(data.xxx)+','+Number(data.yyy)+'');

 console.log(Number(data.xxx));
  });

function listening(){

  console.log("Listening...")

}

app.use(express.static("minecraft"));
