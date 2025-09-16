const express = require("express");
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../controllers/bookController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", protect, createBook);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);

module.exports = router;
