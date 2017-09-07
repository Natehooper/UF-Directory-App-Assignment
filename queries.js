/* Fill out these functions using Mongoose queries*/

var mongoose = require('mongoose');
var Listing = require('./ListingSchema.js');
var config = require('./config');
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  Listing.findOne({code: 'LBW'},function(err,listing){
    if(err) throw err;
    console.log(listing);
    console.log('\n');
   });
};
var removeCable = function() {
  Listing.findOneAndRemove({code: 'CABL'}, function(err,listing){
      if (err) throw err;
      console.log('CABL Removed.\n' + listing);
      console.log('\n');
   })
};
var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {$set : {address:'Museum Rd, Gainesville FL, 32603'} } ,{new: true}, function(err, listing){

    if(err) throw err;
    console.log('Phelps Lab Updated\n');
    console.log('Listing has been changed to:\n' + listing);

   });
};
var retrieveAllListings = function() {
  Listing.find({},function(err, listing){
    if(err) throw err;
    console.log(prompt + listing);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
