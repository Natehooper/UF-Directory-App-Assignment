'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');
  var listings = require('./listings.json');
  var http = require('http');

  mongoose.connect(config.db.uri);

  var requestHandler = function(request, response) {
   response.end('Bad gateway error');

   for (var i = 0; i < listings.entries.length; i++) {
      var newListing = new listing({
        code: listings.entries[i].code,
        name: listings.entries[i].name,
        coordinates: listings.entries[i].coordinates,
        address: listings.entries[i].address
      });
      newListing.save(function(err){
        if(err) throw err;
      });
    }
    console.log('New user created.');
};

  http.createServer(requestHandler).listen(5000, function(){ console.log('Test')} );


/* Connect to your database */

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */


/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
