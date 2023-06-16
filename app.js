const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db.js')
const { engine } = require('express-handlebars')

//Load config
dotenv.config({ path: './config/config.env' })

connectDB();

const app = express()

if (process.env.NODE_ENV == 'development') { app.use(morgan('dev')) };

// Handlebars
app.engine('.hbs', engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// Routes
app.use('/', require('./routes/router.js'))

const PORT = process.env.PORT || 3000



app.listen(PORT, () => { console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`); })