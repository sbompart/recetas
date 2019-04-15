let express = require('express');
let app = express();
//const mongoose = require('mongoose');

require('./app/routes')(app);

/*const options = {
  useNewUrlParser: true,
  //useCreateIndex: true,
  //useFindAndModify: false,
  //autoIndex: false, // Don't build indexes
  //reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  //reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 5, // Maintain up to 5 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  //bufferMaxEntries: 0,
  connectTimeoutMS: 3000, // Give up initial connection after 3 seconds
  socketTimeoutMS: 4000, // Close sockets after 4 seconds of inactivity
  //family: 4 // Use IPv4, skip trying IPv6
  readPreference: {
    mode: "primary" 
  },
  retryWrites: true/* ,
  auth: {
    user: 'sbompart',
    password: 'carmelo182'
  } */
//};
//const uri = "mongodb+srv://@cluster1-uz13v.mongodb.net/recetas";
const uri = 'mongodb://localhost:27017/admin';
/*mongoose.connect(uri, options);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function callback () {
  console.log("Conectado a Mongo..!!!");
});*/
app.listen(3000,() => {
  console.log('Example app listening on port 3000!');
});