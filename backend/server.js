import express from 'express'
import mysql from 'mysql';

// const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 5000;
// var urlencodedParser = bodyParser.urlencoded({ extended: true })
// app.use(urlencodedParser);

// Connection to  fashion database mysql
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '#Password29',
  database : 'fashion'
});
db.connect();
// ConnectedDB


//Testing API
app.get('/', (req, res) => {
  res.send("Home API")
  });

//City API connections
app.get('/api/rewari', (req, res) => {
  const sqlselect= "SELECT* FROM indhr360001";
  db.query(sqlselect, (err, result) => {
    res.send(result);
});})


//Shop Details API Connection
app.get('/api/rewari/:id', (req, res) => {
  const reqid=req.params.id;
  const sqlselect=`SELECT* FROM indhr360001 WHERE id=${reqid}`;
  db.query(sqlselect, (err, result) => {
  if(result){
    res.send(result[0]);   //Because result was an array of array values
  }
  else{
    res.status(404).send({message:req.params.id});
  }
});
});

//Start the Server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});