// área de imports
var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//conexão com o banco:
mongoose.connect('mongodb://localhost:27017/safezone', { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});

const userRoute = require('./routes/usuario.route'); //importa o esquema de rotas
const riskRoute = require('./routes/risco.route'); //importa o esquema de rotas

var app = express(); //instanciação do express
app.use(bodyParser.json()); 
app.use(cors());

app.use('/usuario', userRoute);
app.use('/risco', riskRoute);

app.get('/', function(req, res){
   res.send("Hello World!");
});

app.listen(3000,function(){
    console.log('Listening on port 3000!');
});