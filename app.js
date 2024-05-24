// Required Library
const express = require('express');
// -----------------
// App Setup
const app = express();

// -----------------
// Controllers
require('./controllers/posts')(app);

// -----------------
// Set db
require('./data/reddit-db');

// -----------------
// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// -----------------
// Handlebars Setup
const exhbs = require('express-handlebars');

app.engine('handlebars', exhbs.engine({
    defaultLayout: 'main'
}));

// -----------------
// Setup Handlebars to render
app.set('view engine', 'handlebars');
app.set('views', './views');

// -----------------
// ROUTES
// -----------------

app.get('/', async(req, res) => {
    try {
        const posts = await posts.find({}).lean();
        return res.render('posts-index', { posts });
    } catch(err) {
        console.log(err.message);
    }
});

app.get('/posts/new', (req, res) => {
    res.render('posts-new.handlebars')
})

// -----------------
// Port
const port = 3000;

app.listen(port, () => {
    console.log(`App listening on ${port}`)
})
