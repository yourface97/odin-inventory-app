const express = require('express');
const dotenv = require('dotenv').config();
const exphbs = require('express-handlebars');
const path = require('path');
const { db_Conn } = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const additemRoutes = require('./routes/additemRoutes');


const PORT = process.env.PORT;

const app = express();
db_Conn();

app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'layout'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/items', itemRoutes);
app.use('/categories', categoryRoutes);
app.use('/additem', additemRoutes);

app.get('/', (req, res) => {
    res.render('home');
})

app.listen(PORT, () => {console.log(`Server started on port: ${PORT}`)})