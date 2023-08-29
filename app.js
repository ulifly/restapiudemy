/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// routes
const allRoutes = require('./routes/routes');

app.use(allRoutes);

// DB connection

mongoose.connect('mongodb://127.0.0.1:27017/restApiDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
  console.log('conectado a la base de datos 👌');
});

app.listen(process.env.PORT, () => {
  console.log(`🤫 servidor escuchando en http://localhost:${process.env.PORT}`);
});
