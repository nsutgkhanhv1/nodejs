const express = require("express");
const path = require('path');
const app = express();
const morgan = require("morgan");
const Handlebars = require('handlebars');
const handlebars = require('express-handlebars');
const route = require('./routes');
const methodOverride = require('method-override')
const db = require('./config/db');
var cookieParser = require('cookie-parser')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

app.use(cookieParser());
//Connect DB
db.connect();

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers:{
        sum: (a,b)=>a+b,
    }
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources','views'));

//Route
route(app);

//Listen to port 
app.listen(3000, ()=>{
    console.log('Our app listening at port http://localhost:3000');
})