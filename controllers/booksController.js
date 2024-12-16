const db = require('../config/db');

// Fetch all books
const getAllBooks = (req, res) => {
  const query = `
    SELECT books.id, books.title, authors.name AS author, genres.name AS genre, books.pages, books.published_date 
    FROM books 
    JOIN authors ON books.author_id = authors.id 
    JOIN genres ON books.genre_id = genres.id;
  `;
  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
};

// Add a new book
const addBook = (req, res) => {
  const { title, author_id, genre_id, pages, published_date } = req.body;
  const query = `INSERT INTO books (title, author_id, genre_id, pages, published_date) VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [title, author_id, genre_id, pages, published_date], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
};

// Update a book
const updateBook = (req, res) => {
  const { title, author_id, genre_id, pages, published_date } = req.body;
  const { id } = req.params;
  const query = `UPDATE books SET title = ?, author_id = ?, genre_id = ?, pages = ?, published_date = ? WHERE id = ?`;
  db.run(query, [title, author_id, genre_id, pages, published_date, id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Book updated successfully.' });
  });
};

// Delete a book
const deleteBook = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM books WHERE id = ?`;
  db.run(query, id, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Book deleted successfully.' });
  });
};

module.exports = {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
};
