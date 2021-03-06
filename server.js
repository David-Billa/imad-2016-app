var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
/*var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});*/

/*var pool=require('pg').pool;
var config = {
    user: 'david-billa',
    database: 'david-billa',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
    };
var pool = new Pool(config);*/

    
/*app.get('/test-db',function(req,res){
    //make request to database 
    //return a response with the results
    pool.query('SELECT * FROM test',function(err,result){
        if (err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result));
        }
        
    });
});*/

app.get('/professional', function(req,res) {
    res.sendfile(path.join(__dirname, 'ui', 'professional.html'));
});
app.get('/family',function(req,res){
    res.sendfile(path.join(__dirname,'ui','family.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/goals',function(req,res){
    res.sendfile(path.join(__dirname,'ui','goals.html'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
