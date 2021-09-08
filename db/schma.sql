DROP TABLE IF EXISTS landmarks;
DROP TABLE IF EXISTS favorites;

CREATE TABLE landmarks (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    landmark_name VARCHAR(50),
    landmark_location VARCHAR(30),
    landmark_description TEXT
);

CREATE TABLE favorites (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    landmark_name VARCHAR(50),
    is_favorite BOOLEAN NOT NULL
);