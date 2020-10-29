
require('dotenv').config();
const mongoose = require('mongoose');

require('./models/registration');
const app = require('./app');

// Connect the database here

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});
