var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.once('open', function(cd){
  console.log(`mongoose connected to: ${process.env.DATABASE_URL}`);
})

module.exports = mongoose;