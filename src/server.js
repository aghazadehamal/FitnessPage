// server.js
const express = require('express');
const mongoose = require('mongoose');
const exerciseRoutes = require('./routes/exerciseRoutes');
const app = express();

app.use(express.json());

app.use('/api', exerciseRoutes);

mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Database connection failed', error);
  });
