# COTABOX FULLSTACK CHALLENGE API

- [COTABOX FULLSTACK CHALLENGE API](#cotabox-fullstack-challenge-api)
  - [What is this API?](#what-is-this-api)
  - [What can i do with that?](#what-can-i-do-with-that)
  - [Demo](#demo)
  - [How can i contribute (or just test it)?](#how-can-i-contribute-or-just-test-it)
  - [endpoint documentation and how request file works](#endpoint-documentation-and-how-request-file-works)
    - [**GET** - `/contributors`:](#get---contributors)
    - [**GET** - `/totalContribution`:](#get---totalcontribution)
    - [**POST** - `/addContributor`:](#post---addcontributor)
    - [**DELETE** - `/removeContributor`:](#delete---removecontributor)
    - [**GET** - `/reset` (Just for test purposes):](#get---reset-just-for-test-purposes)


## What is this API?

This project is part of an application called cotabox-fullstack-challenge, who is part of a practical test for a job opportunity. It works together with the front-end to perform actions over a MongoDB Database.

## What can i do with that?

With only the API, you can perform HTTP requests to perform actions over the Database, like add ou remove contributors, or just get information. This API is complementary to the [front-end](https://github.com/noriskii/cotabox-fullstack-challenge-frontend), but works alone as well.

## Demo

A demo for this project is available on Heroku

https://cotabox-fullstack-challenge.herokuapp.com/

## How can i contribute (or just test it)?

If you want to contribute, feel free to Clone this repository.

To start using, you need an MongoDB up and running (I really recommend MongoDB Atlas). After this, follow these steps in the project directory:

In the `env-sample` file, put your MongoDB Connection String over the `CONNECTION_STRING` and change the file name to `.env`

Run `yarn init` or `npm init`

Run `yarn dev` to work with nodemon, or just `yarn start` or `npm start` to just run the node start

Open [http://localhost:3333](http://localhost:3333) to view it in the browser.


## endpoint documentation and how request file works

If you have the VSCode [REST Client](https://github.com/Huachao/vscode-restclient.git) extension, the file `requests.http` will present a button called `Send request` over every request on the file, just click there to send request inside the VSCode. But, if not, just copy the requests and the body (if needed) to your favorite REST Client, like Insomnia or Postman.

Follow this next endpoint documentation to understand the functionalities:

### **GET** - `/contributors`:
This GET will return a json list with all the contributors of the project, with they first names, last names and contribution.

### **GET** - `/totalContribution`:
This GET will return a json with the sum of all participants contribution.


### **POST** - `/addContributor`:
This POST store a new participant on the database, and return it. If the participant already exists, this will return a JSON with an `error` property, indicating that this client already exists.

This POST needs the JSON body bellow:
```json
{
	"firstName":"First Name",
	"lastName":"Last Name",
	"contribution":10
}
```

### **DELETE** - `/removeContributor`:
This DELETE remove an participant of the database, and return the result of deletion. If the participant doesn't exist, this will return a JSON with an `error` property, indicating that this client doesn't exist.

This DELETE needs the JSON body bellow:
```json
{
	"firstName":"First Name",
	"lastName":"Last Name"
}
```

### **GET** - `/reset` (Just for test purposes):
Take care with this GET, this will **wipe** all data of the MongoDB Database.


<br>
<br>
<br>

**Made with :heart: and NodeJS   by Lucas Augusto.**