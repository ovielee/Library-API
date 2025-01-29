const express = require('express');
const bookController = require('../controllers/bookController');
const limiter = require('../config/rateLimit');

const router = express.Router();

// Apply rate limiting to all routes
router.use(limiter);

// Define routes
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);
router.post('/books', bookController.addBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;