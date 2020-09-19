var express = require("express");
var app = express();

var request = require("request");

app.get("/", function(req, res){
	res.render("omdb.ejs");
})

app.get("/movie", function(req, res){
	//res.send("At movie app....");
	var query = req.query.search;
	var url = "http://omdbapi.com/?s" + query;
	request(url, function(error,response,body){
		if(!error && response.statusCode === 200){
			var parsedData = JSON.parse(body)
			
			res.render("home.ejs", {parsedData: parsedData});
		}
	});
});


app.listen(process.env.PORT|| 3000, process.env.IP, function(){
	console.log("Server has started.....");
});


