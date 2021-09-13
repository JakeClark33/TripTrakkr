DROP TABLE IF EXISTS landmarks;
DROP TABLE IF EXISTS favorites;

CREATE TABLE landmarks (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    landmark_name VARCHAR(50) NOT NULL,
    landmark_location VARCHAR(30) NOT NULL,
    landmark_description TEXT
);

CREATE TABLE favorites (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    landmark_name VARCHAR(50) NOT NULL,
    is_favorite BOOLEAN NOT NULL
);