const mongoose = require("mongoose");

// heroku connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksearch", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
