##Session Management

curl -X GET http://localhost:3000 -c cookie-file.txt
It performs a new request and create the cookie file with the sessionID

curl -X GET http://localhost:3000 -b cookie-file.txt
It performs a new request using the cookie file with the sessionID
