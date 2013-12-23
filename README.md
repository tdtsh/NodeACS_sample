How to host Node.ACS (サンプルをNode.ACS にアップロードするまで)


==========
on your pc (自分のPCで)

node -v

sudo npm install -g acs 

acs login

	* enter appcelerator platform username & password
	* 事前にAppcelerator のユーザ登録が必要です(無料)

cd ~/

acs new yourappname

cd ~/yourappname/

acs run

browse http://localhost:8080/

=========================
deploy to acs (firsttime) クラウドへデプロイ(初回)

acs publish

browse http://RANDOMWORDS.cloudapp.appcelerator.com


=========================
deploy to acs (after second time) クラウドへデプロイ(2回目以降)

acs publish --force

