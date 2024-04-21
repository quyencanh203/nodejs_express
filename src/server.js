require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine') // import code trong config/viewEngine
const webRoutes = require('./routers/web');

const app = express(); // app express
const port = process.env.PORT;
const hostname = process.env.HOST_NAME || 8888;

// console.log(">>> check env: ", process.env)

// config template engine
configViewEngine(app);

// khai bao routes
app.use('/',webRoutes);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`);
})