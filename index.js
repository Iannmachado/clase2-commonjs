//es5
var http = require ('http');

var PORT = 9000;

//3000 react
//4200 angular
//3306 sql
//27? node
var hostname = '127.0.0.1';
//crear el server
//req request es la peticion del cliente
//res response es la respuesta del servidor
const server = http.createServer((request,response) =>{
    request.statusCode=200;
    //request.setHeader('content-type','text/plain');
    console.log(request);
    console.log("=====================================")
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);
    console.log(request.body);
    console.log("=====================================")
    if(request.url==='/hola'){
        response.end('hola mundo');
    }else if(request.url==='/chau'){
        response.end('chau mundo');
    }else if(request.url==='/error'){    
        response.statusCode=404;
        response.end('error');
    }
    
});

//levanto el sv
server.listen(PORT, hostname,()=>{
    console.log(`server running at http://${hostname}:${PORT}/`);
}) 