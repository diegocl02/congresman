const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json()); // to support JSON body
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//////INDEX
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname ,'static/index.html'));
})

// app.get('/about', function (req, res) {
//   res.sendFile(path.join(__dirname,  'static/about.html'));
// })

// app.get('/test', function (req, res) {
//   res.sendFile(path.join(__dirname,  'jade/test.html'));
// })

/////// ENDPOINTS

/////Updates Number of total Wins
// app.post('/updatewins', function(req,res){
//   console.log("updated in database", req.body.userid);
//   const userid = req.body.userid;
//   const query = 'update User set gamesWon=gamesWon +1, ranking=ranking +3'+
//   ' where userId='+userid+';';
//   const mysql = require('mysql')
//   const connection = mysql.createConnection({
//     host     : 'us-cdbr-iron-east-05.cleardb.net',
//     user     : 'b7cfe3e5b978a2',
//     password : '1b99fff3',
//     database : 'heroku_6702d303f45788f'
//   });

//   connection.connect();

//   connection.query(query, function (err, rows, fields) {
//     connection.destroy();
//     if (err) throw err;
//     console.log(rows);
//     res.send(rows);
//   })

// })

////Get list of users

app.get('/getinitialstate', function (req, res) {

  const query='select * from projects;'

  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-04.cleardb.net',
    user     : 'b1c938a2bf779a',
    password : 'b58fb8dd',
    database : 'heroku_f1b384e9e343ad5'
  });

  connection.connect();

  connection.query(query, function (err, rows, fields) {
    connection.destroy();
    if (err) throw err;
    res.send(rows);
  })

})

app.get('/votesPerAnswer', function (req, res) {

  const query='select vote, count(*) number from poll where projects_id = 13 group by vote;'

  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-04.cleardb.net',
    user     : 'b1c938a2bf779a',
    password : 'b58fb8dd',
    database : 'heroku_f1b384e9e343ad5'
  });

  connection.connect();

  connection.query(query, function (err, rows, fields) {
    connection.destroy();
    if (err) throw err;
    res.send(rows);
  })

})



app.get('/getpoll', function (req, res) {

  const query='select comments from poll;'

  const mysql = require('mysql')
  const connection = mysql.createConnection({
    host     : 'us-cdbr-iron-east-04.cleardb.net',
    user     : 'b1c938a2bf779a',
    password : 'b58fb8dd',
    database : 'heroku_f1b384e9e343ad5'
  });

  connection.connect();

  connection.query(query, function (err, rows, fields) {
    connection.destroy();
    if (err) throw err;
    res.send(rows);
  })

})


/// SERVER START WITH node serve.js

app.listen(process.env.PORT || 3000, function () {
  console.log('CongresMan app Started!')
})
