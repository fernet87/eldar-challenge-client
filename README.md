# Eldar Challenge Client

Available live [here](https://fernet87.github.io/eldar-challenge-client/) 

## **How to start project**

Install project dependecies:

```
npm install
```

Start the web server

```
npm start
```
## **Useful information about the project**

There are 2 available users in the database:

user: admin@elder.com
pass: admin

or

user: user@elder.com
pass: user

Accessing with admin user you can create, update, view and delete a product. On the other hand if you enter with another user, you will only be able to use see a product info.
You can create more users using insomnia (or other similar tool) via this API:
Method: POST
URL: https://eldar-challenge-server.onrender.com/api/auth/register
JSON: {
	"first_name": "user",
	"last_name": "user",
	"email": "user@eldar.com",
	"password": "user",
  "profile": "user"
}