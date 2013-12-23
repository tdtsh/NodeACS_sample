function index(req, res) {
	res.render('index', {
		title: 'Hello World!!! \n<br> Welcome to Node.ACS!' 
	});
}

function login(req, res) {
	var uid=req.body.uid;
	var pwd=req.body.pwd;
	var name=req.body.name;
	if (uid==='hntn' && pwd=='pass'){ 
		req.session.uid=uid;
		req.session.pwd=pwd;
		req.session.name=name;
		res.redirect('/home'); 
	}else{
		res.send(500, {
			error: 'something blew up' 
		}); 
	} 
} 

function logoff(req, res) {
	req.session.uid=null;
	req.session.pwd=null;
	req.session.name=null;
	res.redirect('/'); 
} 

function home(req, res) {
	res.render('home', {
		title: req.session.name 
	});
}

