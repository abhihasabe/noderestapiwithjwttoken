const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');

//const generate_key = require('../CMS/helper/generate_key');

// create express app
const app = express();

app.use(cors({
  "origin": "*",
  "credentials" : "true", 
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

// setup the server port
const port = process.env.PORT || 3000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
    //generate_key;
});

// import Base routes
const baseRoutes = require('./src/routes/master.route');

// import Company routes
const companyRoutes = require('./src/routes/company.route');

// import Employee routes
const employeeRoutes = require('./src/routes/employee.route');

// create base routes
app.use('/api/v1/base', baseRoutes);

// create Company routes
app.use('/api/v1/company', companyRoutes);

// create Employee routes
app.use('/api/v1/employee', employeeRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});