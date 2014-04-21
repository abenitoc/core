//AUTORES: Alberto Benito Campo (03940826Y)

//			Javier Biosca Vergara (53764843C)




var express = require('express');
var app = express();



app.get('/', function(req, res){
	res.send('Práctica 1 Express, escriba URLS /preg/1 o /preg/2. Respuestas correctas: Colón y Lisboa');
});


app.get('/preg/:n(\\d+)', function(req, res){

	if(req.params.n === "1"){
		questionID=1;
		res.send('<html><body>'
			+ '<form method="get" action="/check">'
			+ '¿Quién descubrió América?<br>'
			+ '<input type="hidden" name="questionID" value="1">' //Hidden param identifying each question
			+ '<input type="text" name="ans"> <br>'
			+ '<input type="submit" value="Confirmar"> <br>'
			+ '</form>'
			+ '</body></html>');
	}	

	if(req.params.n === "2"){
		questionID=2;
		res.send('<html><body>'
			+ '<form method="get" action="/check">'
			+ '¿Capital del Portugal?<br>'
			+ '<input type="hidden" name="questionID" value="2">' //Hidden param identifying each question
			+ '<input type="text" name="ans"> <br>'
			+ '<input type="submit" value="Confirmar"> <br>'
			+ '</form>'
			+ '</body></html>');
	}		

	else{
		res.send('Sólo hay preg/1 y preg/2');
	}	
});



app.get('/check', function(req,res){
	
	if(req.query.questionID== 1){ //Si se llama desde la pregunta 1:
		if(req.query.ans === "Colón"){
		
			res.send('<html><body>'
				+ 'Respuesta correcta. Muy bien'	 
				+ '<p> <a href="http://localhost:8000/preg/2"> Probar otra pregunta.</a>'
				+ '</body></html>');
		}
		else{
		
			res.send('<html><body>'
				+ 'Respuesta incorrecta. La respuesta correcta era Colón.' 
				+ '<p> <a href="http://localhost:8000/preg/1"> Casi...Prueba otra vez.</a>'
				+ '</body></html>');
		
		}
	}

	if(req.query.questionID == 2){ //Si se llama desde la pregunta 2:
		if(req.query.ans === "Lisboa"){
			res.send('<html><body>'
				+ 'Respuesta correcta. Muito bem'	
				+ '<p> <a href="http://localhost:8000/preg/1"> Probar otra pregunta.</a>'
				+ '</body></html>');

		}
		else{
		res.send('<html><body>'
			+ 'Respuesta incorrecta. La respuesta correcta era Lisboa' 
			+ '<p> <a href="http://localhost:8000/preg/2"> Casi...Prueba otra vez.</a>'
			+ '</body></html>');
		}
	}

	

	
});

app.listen(8000);


















