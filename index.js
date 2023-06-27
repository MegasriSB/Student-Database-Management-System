const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoute= require('./routes/auth-router');
const cors = require("cors");
const app= express();
const uri = 'mongodb://localhost:27017/projectDB';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}
const connectWithDB = () => {
    mongoose.connect(uri, options, (err, db) => {
      if (err){ console.log("DB not Connected");}
      else {console.log("DB Connection Established");}
    })
}

connectWithDB()
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/auth',authRoute);
app.set('port', process.env.port || 3000);
app.get('/', (req , res) =>{
    res.send("Hello");
});




app.listen(app.get('port'),function(err,response){
    console.log("Server is running on port", app.get('port'));
});

