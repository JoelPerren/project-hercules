const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');

const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config({
  path: './src/server/config/config.env',
});

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);
app.use(morgan('dev'));
app.use(cookieParser());

require('./models/User');
require('./config/passport')(passport);

app.use(passport.initialize());

app.use('/', require('./routes/index'));
app.use('/api/v1/users', require('./routes/users'));

app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

app.listen(
  process.env.PORT || 5000,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`,
  ),
);
