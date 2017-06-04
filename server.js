var express = require('express');
var app = express();
var path = require('path')
var port = 8888;

app.use(express.static(__dirname + '/root'));

app.get('*', function (request, response){
	response.sendFile(path.resolve(__dirname, 'root', 'index.html'))
})

app.listen(port,function(){
	console.log(`Expressサーバー（localhost:${port}）を起動しました。`);
});