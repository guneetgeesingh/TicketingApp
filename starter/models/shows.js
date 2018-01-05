var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var showSchema = new Schema({
  tourName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
    trim: true
  },
  showDate: Date,
  showLocation: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
  tickets: []
}, {
  timestamps: true
})

var Show = mongoose.model('Show', showSchema)

module.exports = {
  Show: Show
}