const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 8000;
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes'));
app.listen(port,function(error){
    if(error)
    {
        console.log(`Error occurred while starting the server ${error}`);
    }
    else
    {
        console.log(`Successfully started the server on port ${port}`);
    }
});
