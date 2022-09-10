const { Schema } = require('mongoose');

const bookSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  // saved book description
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  bookId: {
    type: String,
    required: true,
  },
  // book image
  image: {
    type: String,
  },
  // book link
  link: {
    type: String,
  },
  // book title
  title: {
    type: String,
    required: true,
  },
});

module.exports = bookSchema;
