//step 1) require the modules we need
var http = require('http'),
path = require('path'),
fs = require('fs');
var port = process.argv[2] || 8080;
 


function getPetAttender(req, res) {
    var
    fileName = path.basename(req.url), //Se queda con lo que haya después del localhost 8080
    localFolder =  __dirname + '/';//__dirname is the directory of the file in which is used.
     
    getFile((localFolder + fileName), res);
};

function throw404(res){
		res.writeHead(404, {
			"Content-Type": "text/plain"
		});
		res.write("404 Not Found\n");
		res.end();
		return;			
	}

//helper function handles file verification
function getFile(filePath,res){
    //does the requested file exist?
    fs.exists(filePath,function(exists){
        //if it does...
        if(exists){
            //read the file, run the anonymous function
            fs.readFile(filePath,function(err,contents){
                if(!err){
                    //if there was no error
                    //send the contents with the default 200/ok header
                    res.end(contents);
                } else {
                    //for our own troubleshooting
                    throw404(res);
                };
            });
        } else {
            //if the requested file was not found
            //serve-up our custom 404 page
            throw404(res);
        };
    });
};

//step 2) create the server
http.createServer(getPetAttender)
 
//step 3) listen for an HTTP request on port 3000
.listen(port);
