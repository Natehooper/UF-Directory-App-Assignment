var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var listingSchema = new Schema({
  code: {type: String, required: true},
  name: {type: String, required: true},
  coordinates: { latitude : Number, longitude : Number},
  address : String,
  update_at: Date,
  created_at: Date,
});

listingSchema.pre('save', function(next) {
  var date = new Date();
 this.updated_at = date;
 if(!this.created_at) {
   this.created_at = date;
 }
 next();
});

var Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
