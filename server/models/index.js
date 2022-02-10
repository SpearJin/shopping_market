const mongoose = require('mongoose');
const { getDBUri } = require('../config');

const connect = async () => {
  const DB_URI = getDBUri();
  mongoose.connect(DB_URI, (err) => {
    if (err) {
      console.error('mongodb connection error', err);
    }
    console.log('mongodb connected');
  });
  mongoose.connection.on('disconnected', connect);
};

module.exports = { connect };
