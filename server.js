const express = require('express');
const app = express();

// -----------------
// Controllers
require('./controllers/posts')(app);

// -----------------
// Handlebars Setup
const exhbs = require('express-handlebars');
// const Handlebars = require('handlebars');

app.engine('handlebars', exhbs.engine({
    defaultLayout: 'main'
}));

// -----------------
// Setup Handlebars to render
app.set('view engine', 'handlebars');

// -----------------
// Routes
app.get('/', (req, res) => {
    res.render('home')
})

// -----------------
// Port
const port = 3000;

app.listen(port, () => {
    console.log(`App listening on ${port}`)
})
