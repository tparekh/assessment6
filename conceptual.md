### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Callbacks, promises, and async/await 


- What is a Promise?
A promise is an object that may produce something in the future if something occurs 


- What are the differences between an async function and a regular function?

The difference between an async function and a regular function is that an async function only occurs after something while a regular function just occurs - in other words - there's a "before" to it. 

- What is the difference between Node.js and Express.js?
The difference between node.js and express.js is that express has more features,routing is provided, it uses middleware and it requires less coding time - however the framework is based on node.  

- What is the error-first callback pattern?
It's a function that returns an error object or any successful data returned by a function. 

- What is middleware?
Middleware is a software that provides common services and capabilities to apps thats offered by the operating system. It helps developers build apps more effectivly and connects applications, data and users. 

- What does the `next` function do?
The next function is used in Express (router) and it executres middlewre succeeding the current middleware. 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)



```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```


There should be a term in the () next to getUsers - ex. (user)

There should be a function after the link in the const ex. 

const elie  = await $.getJSON('https://api.github.com/users/elie', function() {
  console.log(elie)
});






