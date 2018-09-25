var express = require('express')
var app = express()
 /*
app.get('/', function (req, res) {
  res.send('Hello World')
})
*/ 
var cords=[0,0,0];
var server=app.listen(3000,listening);

app.get('/insert/:xxx/:yyy', function (req, res) {
 var data =req.params;
 // res.send('Hello World'+Number(data.longt)+','+Number(data.lat)+'')
 console.log("Yas!")

 cords[0]=Number(data.xxx);
 cords[1]=Number(data.yyy);
 console.log('Hello World'+cords[0]+','+cords[1]+'');
// res.send(cords);
 console.log(Number(cords[0]));
  });


  app.get('/getcords', function (req, res) {
  
    res.send(cords);
    
     });

function listening(){

  console.log("Listening...")

}

app.use(express.static("DuckHunt"));
