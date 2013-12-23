// initialize app
function start(app, express) {
	//set favicon
	app.use(express.favicon(__dirname + '/public/images/favicon.ico'));

	//instantiate session management 
	app.use(express.session({secret: '1234567890QWERTY'})); 
}

// release resources
function stop() {
	
}

