-- Insert sample genres
INSERT INTO genres (name, description) VALUES 
('Fiction', 'Fictional books'),
('Non-Fiction', 'Non-fictional books'),
('Dystopian', 'Books with dystopian themes');

-- Insert sample authors
INSERT INTO authors (name) VALUES 
('F. Scott Fitzgerald'),
('George Orwell'),
('J.K. Rowling');

-- Insert sample books
INSERT INTO books (title, author_id, genre_id, pages, published_date) VALUES 
('The Great Gatsby', 1, 1, 218, '1925-04-10'),
('1984', 2, 3, 328, '1949-06-08');
