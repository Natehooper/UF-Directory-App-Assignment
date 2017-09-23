//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb://nate:nate@ds147884.mlab.com:47884/listings',
  },
  port: 8080,
  googleMaps: {
    key: ''
  },
};

/* Now go to the JSONtoMongo.js file and include this file as a variable named 'config' with a require() */
