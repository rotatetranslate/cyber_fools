const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan');

const app = express();

require('./db/config');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const guestbookRoutes = require('./routes/guestbook');
app.use('/guestbook', guestbookRoutes);

app.listen(3000, () => console.log('listening on 3000'));
