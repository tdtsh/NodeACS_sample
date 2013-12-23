Project README file


====================
How to host Node.ACS


==========
on your pc

node -v

sudo npm install -g acs 

acs login

	* enter appcelerator platform username & password

cd ~/

acs new yourappname

cd ~/yourappname/

acs run

browse http://localhost:8080/

=========================
deploy to acs (firsttime)

acs publish

browse http://RANDOMWORDS.cloudapp.appcelerator.com


=========================
deploy to acs (after second time)

acs publish --force

