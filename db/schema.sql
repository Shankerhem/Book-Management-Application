-- Books Table
CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  author_id INTEGER NOT NULL,
  genre_id INTEGER NOT NULL,
  pages INTEGER,
  published_date TEXT,
  FOREIGN KEY (author_id) REFERENCES authors(id),
  FOREIGN KEY (genre_id) REFERENCES genres(id)
);

-- Genres Table
CREATE TABLE genres (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT
);

-- Authors Table
CREATE TABLE authors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);
