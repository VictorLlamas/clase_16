const express = require("express");
const app = express();
const port = 9000;


/* 
//Actividad diapositiva  8
app.use(express.json()) // for parsing application/json
    
app.get('/', function (req, res){
    /* //baseUrl, body, hostname, method, originalUrl, path, protocol, query
    console.log(`BaseURL: ${req.baseUrl}`);
    console.log(`Body: ${req.body}`)
    console.log(`HostName: ${req.hostname}`)
    console.log(`Method: ${req.method}`)
    console.log(`OriginalURL: ${req.originalUrl}`)
    console.log(`Path: ${req.path}`)
    console.log(`Protocol: ${req.protocol}`)
    console.log(`Query: ${req.query}`)
    console.log(); 
    res.status(201);
    res.set('Content-Type','text/html');
    res.send("<h1>Hola!</h1>");
})
 */

/*
// Actividad diapositiva 10 
app.get('/', function (req, res){
    res.status(201);
    res.set('Content-Type','text/html');
    res.send("<h1>Hola!</h1>");
}) */


/* 
//Actividad diapositiva 15
app.use('/', function (req, res, next){
    res.send('Soy un middleware');
}) */

//Actividad diapositiva 17
// app.use('/assets', express.static('public'));


//Actividad diapositiva 20
app.use(express.json());

app.post('/auth', function(req, res){
    res.json(req.body)
})

app.listen(port, function(){
    console.log(`Example app listening port ${port}!`);
});