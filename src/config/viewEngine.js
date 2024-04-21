const path = require('path');
const express = require('express')
const configViewEngine = (app) => {
    // config template engine
    // check __dirname
    console.log(">>> check __dirname: ", __dirname)
    app.set('views', path.join('./src', 'views')); // specify the views directory
    app.set('view engine', 'ejs'); // register the template engine 

    // config static file
    app.use(express.static(path.join('./src', 'public')));
}

// exports ra ham de su dung cho file khac
module.exports = configViewEngine;