#!/bin/bash

path=`which openssl`

if [ "$path" ]; then
	openssl genrsa -out privatekey.pem 4096 
	openssl req -new -key privatekey.pem -out certrequest.csr 
	openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
else
	echo "install openssl first (brew install openssl || sudo apt-get install openssl)";
fi