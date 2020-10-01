# Node.js and REST API 
Here you will find information about REST API, Node.js servers and even some useful tool to become a professional coder.

## Table Of Contents

* [What is API](#What-is-API?) 

* [What is REST](#What-is-REST)

* [HTTP Methods - CRUD](#HTTP-Methods---CRUD)

* [Node.js](#Node.js)

* [Useful packages](#Useful-packages)

* [Build your own REST API using node.js and express](#Build-your-own-REST-API-using-node.js-and-express)

* [More information](#More-information)

---

## What is API?
API or Application Programming Interface is a set of definitions and protocols that developers can use without
the need to write any code.

https://en.wikipedia.org/wiki/API

https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/

https://www.youtube.com/watch?v=s7wmiS2mSXY&ab_channel=MuleSoftVideos

https://www.youtube.com/watch?v=tgbRY96q-KM&ab_channel=WebDevSimplified

## What is REST?
REST or Representational State Transfer is is a software architectural style that defines a set of constraints to be used for creating web services.

https://www.youtube.com/watch?v=rtWH70_MMHM&ab_channel=edureka%21

https://www.youtube.com/watch?v=7YcW25PHnAA&ab_channel=WebConcepts

https://www.youtube.com/watch?v=SLwpqD8n3d0&ab_channel=ProgrammingwithMosh

https://www.youtube.com/watch?v=6sUbt-Qp6Pg&ab_channel=WebDevSimplified

https://www.youtube.com/watch?v=Q-BpqyOT3a8&ab_channel=TraversyMedia

https://www.restapitutorial.com/

https://restfulapi.net/

## HTTP Methods - CRUD
REST API lean on 4 methods that make the API full of functionality.

Create - POST
Create a new resource. Also a catch-all verb for operations that don't fit into the other categories.

Read - GET
Read a specific resource (by an identifier) or a collection of resources.

Update - PUT / PATCH
Update a specific resource (by an identifier) or a collection of resources. Can also be used to create a specific resource if the resource identifier is known before-hand.

Delete - DELETE
Remove/delete a specific resource by an identifier.

https://en.wikipedia.org/wiki/Create,_read,_update_and_delete

https://www.codecademy.com/articles/what-is-crud

https://restfulapi.net/http-methods/

You can test your own REST API and make your own HTTP requests with [Postman](https://www.postman.com/)

## HTTP headers
Headers let the client and the server pass additional information with an HTTP request or response.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

## HTTP status codes
HTTP response status codes indicate whether a specific HTTP request has been successfully completed or not.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

https://restfulapi.net/http-status-codes/

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

## Node.js
Node is an open source server environment, that use JS to run servers. You can download it [here](https://nodejs.org/en/)

https://www.w3schools.com/nodejs/nodejs_intro.asp

https://www.youtube.com/watch?v=uVwtVBpw7RQ&ab_channel=ProgrammingwithMosh

## Useful packages
* [express](https://www.npmjs.com/package/express) - The most known package to create REST API servers (you can see a template to Express server [here](./index.js))

* [body-parser](https://www.npmjs.com/package/body-parser) - A powerful tool that simplifies HTTP requests

* [nodemon](https://www.npmjs.com/package/nodemon) - A tool that automatically restarting the node.js application

* [cors](https://www.npmjs.com/package/cors) - A node.js package that can be used to enable CORS with various options (you can read more about CORS [here](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing))

* [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js


## Build your own REST API using node.js and express

Some useful videos shows you how to use node.js and express

https://www.youtube.com/watch?v=pKd0Rpw7O48&ab_channel=ProgrammingwithMosh

https://www.youtube.com/watch?v=UVAMha41dwo&ab_channel=Academind

https://www.youtube.com/watch?v=L72fhGm1tfE&ab_channel=TraversyMedia

## More information
https://medium.com/epignosis-engineering/rest-api-development-tips-and-best-practices-part-1-9cbd4b924285

https://medium.com/epignosis-engineering/rest-api-development-tips-and-best-practices-part-2-d3ae4a13cbb7

Using environment variables - https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
