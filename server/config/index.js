const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
  id: process.env.DB_ID,
  password: process.env.DB_PASSWORD,
};

const getDBUri = () => {
  const localUri = `mongodb+srv://${dbConfig.id}:${dbConfig.password}@cluster0.zuka7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  return localUri;
};

module.exports = { getDBUri };
