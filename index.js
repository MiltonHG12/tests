const express=require('express');
const app=express();
const morgan=require('morgan');
//middleware
app.use(morgan('combined'));

//importing routes
const routes=require('./routes');
const apiroutes=require('./api');

//settings
app.set('appName','Node-Express Server');
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

//rutas
app.use('/api',apiroutes);
app.use(routes);

app.listen(3000, function(){
	console.log('App ID =',app.get('appName'));
	console.log('Server Is Running');
});