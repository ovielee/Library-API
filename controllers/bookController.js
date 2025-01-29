const books = require('../models/bookModel');

// Get all books with pagination
const getAllBooks = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = books.slice(startIndex, endIndex);

  res.json({
    status: 'success',
    code: 200,
    message: 'Books retrieved successfully',
    data: {
      books: results,
      pagination: {
        current_page: page,
        per_page: limit,
        total_pages: Math.ceil(books.length / limit),
        total_books: books.length,
      },
    },
  });
};

// Get a specific book by ID
const getBookById = (req, res) => {
  const bookId = req.params.id;
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Book not found',
    });
  }

  res.json({
    status: 'success',
    code: 200,
    message: 'Book details retrieved successfully',
    data: { book },
  });
};

// Add a new book
const addBook = (req, res) => {
  const newBook = req.body;

  if (!newBook.id || !newBook.title || !newBook.author) {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Missing required fields',
    });
  }

  books.push(newBook);

  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Book added successfully',
    data: { book: newBook },
  });
};

// Update an existing book
const updateBook = (req, res) => {
  const bookId = req.params.id;
  const updatedBook = req.body;
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Book not found',
    });
  }

  books[bookIndex] = { ...books[bookIndex], ...updatedBook };

  res.json({
    status: 'success',
    code: 200,
    message: 'Book updated successfully',
    data: { book: books[bookIndex] },
  });
};

// Delete a book
const deleteBook = (req, res) => {
  const bookId = req.params.id;
  const bookIndex = books.findIndex((b) => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Book not found',
    });
  }

  books.splice(bookIndex, 1);

  res.json({
    status: 'success',
    code: 200,
    message: 'Book deleted successfully',
  });
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};