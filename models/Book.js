const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  author: {
    type: String,
    required: [true, "Author is required"]
  },
  genre: {
    type: String,
    required: [true, "Genre is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
