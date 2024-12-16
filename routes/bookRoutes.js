const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Routes
router.get('/books', bookController.getAllBooks);
router.post('/books', bookController.addBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

module.exports = router;
