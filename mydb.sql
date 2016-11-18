use mydb;

CREATE TABLE IF NOT EXISTS user (
  username TEXT NOT NULL,
  email TEXT NOT NULL
) ENGINE=InnoDB;


INSERT INTO user (username, email) VALUES
('Mas Banyar', 'banyar@yahoo.com'),
('Mas Mapmup', 'mapmup@gmail.com'),
('Boronong', 'borononn@yahoo.com'),
('Nadya Ek', 'nadya@yahoo.com');
