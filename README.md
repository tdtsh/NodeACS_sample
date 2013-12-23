Project README file


http://f068a10b43e12f307a94d375981cf161c1daba6f.cloudapp.appcelerator.com

############################################
Node.ACS
############################################

node -v

sudo npm install -g acs 

acs login

#----------------------------------
ACS: Appcelerator Cloud Services Command-Line Interface, version 1.0.11
Copyright (c) 2012-2013, Appcelerator, Inc.  All Rights Reserved.

username: systemsfailing@gmail.com
password: ******
Welcome back, Tadatoshi! You are now logged in.
#----------------------------------

acs new mytestapp
#----------------------------------
ACS: Appcelerator Cloud Services Command-Line Interface, version 1.0.11
Copyright (c) 2012-2013, Appcelerator, Inc.  All Rights Reserved.

[DEBUG] Creating project at: /Users/tadatoshi_hanazaki/gitbacket/mytestapp
New project created at /Users/tadatoshi_hanazaki/gitbacket/mytestapp
#----------------------------------

cd ~/bitbucket/mytestapp/

acs run

#----------------------------------
CS: Appcelerator Cloud Services Command-Line Interface, version 1.0.11
Copyright (c) 2012-2013, Appcelerator, Inc.  All Rights Reserved.

[INFO]  No dependencies detected
[INFO]  socket.io started
[INFO]  ACS started on port 8080
#----------------------------------

#acs publish --force

acs publish
#----------------------------------
ACS: Appcelerator Cloud Services Command-Line Interface, version 1.0.11
Copyright (c) 2012-2013, Appcelerator, Inc.  All Rights Reserved.

Preparing application for publish... done
Packing application... done
Publishing to cloud...
[##########################################################################] 100%
Prepare to load node modules
Start loading node modules...
node_modules loading starts...
node_modules installation starts...
node_modules loading completed...
Node modules are loaded. Cleaning up...
Done loading node modules!
App mytestapp published.
App will be available at http://f068a10b43e12f307a94d375981cf161c1daba6f.cloudapp.appcelerator.com
#----------------------------------


http://f068a10b43e12f307a94d375981cf161c1daba6f.cloudapp.appcelerator.com








/*
{
  "routes":
  [
    { "path": "/", "callback": "application#index" }
  ],
  "filters":
  [
  	 { "path": "/", "callback": "" }
  ],
  "websockets":
  [
  	{ "event": "", "callback": ""}
  ]
}
*/

<!DOCTYPE html>
<html>
	<head>
		<title>Index</title>
		<link rel='stylesheet' href='/css/style.css' />
	</head>
	<body>
		<h2>Node.ACS KAI</h2>
		<form action="/login" method="post">
		<div>Name<input type="text" name="name"/></div>
		<div>UID<input type="text" name="uid"/></div>
		<div>PWD<input type="password" name="pwd"/></div>
		<div><input type="submit" value="Go"></div>
		</form>
	</body>
</html>
