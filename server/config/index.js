const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

const getDBUri = () => {
  const localUri = `mongodb+srv://spearjin:0511@cluster0.zuka7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  return localUri;
};

module.exports = { getDBUri };
