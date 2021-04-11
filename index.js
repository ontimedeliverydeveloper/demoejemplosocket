const express = require('express');
const path = require('path');
require('dotenv').config();

//dbconfig

//require('./database/config').dbConnection();

//const {dbConnection} = require('./database/config');
//dbConnection();

// App de Express
const app = express();

// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server,{
    cors: {
        origin: "https://localhost:8080",
        //methods: ["GET", "POST"],
        allowedHeaders: ["Originnn","Cookiee","x-auth-token"],
        //credentials: true
      }
});
require('./sockets/socket');




// Path público
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );





server.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT );

});


