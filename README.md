# Lunch Date (Getting Started with Create React App)

Coding Boot Camp project 3. A system manage to meals on wheels distribution.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Motivation for development 

Lunch Date allows Home Care Workers to set a monthly Fresh Menu for aged care clients who can choose the quantity of meals they would like delivered as well as give special instructions for the meals delivered. 

Because Lunch Date captures the details of meal deliveries in a central location it allows for better planning of menus and efficient allocation of resources for this essential service.  

## User Story
AS A Home Care Worker
I WANT to create a monthly menu for a meals on wheels service
SO THAT I can keep record of a clients meal orders

## Acceptance Criteria
WHEN a new client is registered
THEN I can store their name and address
WHEN a new monthly is decided
THEN I can enter a fresh menu into the app
WHEN a customer is ready to order
THEN I enter the quantity of meals requested and and any special instructions into the customer's order 
WHEN all customer orders are received
THEN I can view the quantity of meals ordered on any given date and generate a delivery run sheet
WHEN a client claims that a meal was not recieved
THEN I can check the historical data to verify
WHEN I select a date in the future
THEN I can see a total of the number of meals required for that day so I can shop accordingly

## Screenshot of deployed application:

![lunchDate-screenshot](./client/src/assets/lunchDate_screenshot.png)

## Installation Requirements
1. package.json devDependencies: run npm install
2. this adds to package.json: npm i --save @fortawesome/fontawesome-svg-core
3. this adds to package.json: npm install --save @fortawesome/free-solid-svg-icons
4. this adds to package.json: npm install --save @fortawesome/react-fontawesome
 - 
 -

## Deployment
1. Database instructions: [MondoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-set-up-mongodb-atlas)
2. Deployed Server instructions: [Heroku connected to MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas)
3. Setup MONGODB_URI on Heroku and make sure your app will write to the correct collection:
3a. copy MongoDB drivers connection string from MongoDB/Atlas cluster to Heroku>application>Settings>Config Vars as MONGODB_URI
3b. SuperNote: MongoDB/Atlas>DataServices>Database>[Connect]>[MongoDB Drivers] URI to copy looks like this:
mongodb+srv://sean-admin:password@cluster0.a2oshzw.mongodb.net/?retryWrites=true&w=majority
3c. make sure you add the Collection/DBname to the URI like this for example:
mongodb+srv://sean-admin:password@cluster0.a2oshzw.mongodb.net/**_lunch-date_**?retryWrites=true&w=majority
4. Note: the root package.json file uses "engines": {"node": "16.x"} to avoid build failure on Heroku.

## Deployed Application
[Lunch Date deployed to Heroku/MongoDB Atlas](https://lunch-date.herokuapp.com/)

[Lunch Date Github Repository](https://github.com/SeanU2022/lunch-date)


## Future Developments
- The ability for clients to log in and place their own monthly orders
- The ability to create a new user from the login screen
- The ability to generate a delivery sheet for the driver delivering meals to clients



## Technologies Used

LunchDate is a MERN stack single page application. It uses React for the front end. It uses GraphQL with a Node.js and Express.js server and MongoDB and Mongoose ODM for its database.

## Authors
 - Trentan Jurkans: https://github.com/TRN10
 - Sean Wallace: https://github.com/SeanU2022

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
