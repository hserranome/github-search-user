# Github User Search
This is a small web app created for a React interview.
A live demo can be found [here](https://githubusersearch.netlify.com/).

## Running locally
1. Clone the repository
2. Run 'npm install' inside the folder and wait for the installation to finish
3. Running "npm run start" will start the app at port 3000

## Rate limits
The Github API has a 30 requests per minute rate limit. This can be upgraded to 5000 requests per minute by using an authentication. This can be done by assigning the enviroment variable "REACT_APP_GIT_TOKEN". To do so locally, add a ".env" file at the root with the token like so: 

```
REACT_APP_GIT_TOKEN=YOURTOKENHERE
```

## Completed bonus
* Use ES6 syntax including arrow functions, destructuring and async/await
* Adding a spinner when information is loading
* Deal with errors coming from the backend
* Having a nice UI using a components library (Bootstrap?)
* Divide the application in different pages and use a router
* Show common tools used for you daily development environment (linters, code formatter, git workflow, docker and so on)
* Deploy the project [somewhere](https://githubusersearch.netlify.com/)

## Uncompleted bonus
* Adding types with Flow or Typescript
* Some sort of Unit Test
* Some sort of Integration Test
* Adding state management (additional Bonus if using Mobx or Mobx-State-Tree instead of Redux)