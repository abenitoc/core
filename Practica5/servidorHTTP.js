
var net = require("net");
var port = process.argv[2] || 8080;

//Crear socket de servidor y esperar que alguien se conecte
var server = net.createServer(function(socket) {
 console.log("Cliente conectado");
 socket.on('data', function(data){
 //Leer la información que llega en la petición
 console.log(data.toString());
 //Escribir cabeceras HTTP de respuesta
 socket.write('HTTP/1.1 200 OK\n');
 socket.write('Content-Type: text/html; charset=UTF-8\n');
 //Indicar el final de cabecera (línea en blanco)
 socket.write('\n');
 //Añadir el cuerpo del mensaje
 socket.write("<html><head></head><body><h1>Servidor de Evaluación</h1></body></html>");
 socket.end();
 
 //var pathname = url.parse(request.url).pathname;
 });
});
//Configurar el puerto de espera
server.listen(port);
server.listen("/hola",