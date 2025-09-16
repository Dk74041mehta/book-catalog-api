const Book = require("../models/Book");

//Create a book
const createBook = async (req, res) => {
  try {
    const { title, author, genre, price, inStock } = req.body;

    if (!title || !author || !genre || !price) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // check karega saare fields aaye hain ya nahi

    const book = await Book.create({ title, author, genre, price, inStock });
    return res.status(201).json({ success: true, message: "Book created", data: book });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get all books  (public, koi bhi access kar sakta hai)


const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ success: true, data: books });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};




//  Get book by ID 


const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ success: false, message: "Book not found" });

    return res.status(200).json({ success: true, data: book });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

//Update book  (private Access)  (sirf logged-in user update kar sakta hai)


const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!book) return res.status(404).json({ success: false, message: "Book not found" });

    return res.status(200).json({ success: true, message: "Book updated", data: book });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


// Book delete  function (sirf logged-in user delete kar sakta hai)

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) return res.status(404).json({ success: false, message: "Book not found" });

    return res.status(200).json({ success: true, message: "Book deleted" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createBook, getAllBooks, getBookById, updateBook, deleteBook };
