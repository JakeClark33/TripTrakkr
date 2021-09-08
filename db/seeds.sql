INSERT INTO landmarks (landmark_name, landmark_location, landmark_description)
VALUES
    ('Lambeau Field', 'Green Bay, WI', 'Home of the Green Bay Packers!'),
    ('Highway 42', 'Northport, WI', 'A twisty road at the tip of Door County is the last streach before taking the ferry to Washington Island.'),
    ('Wisconsin State Capitol', 'Madison, WI', 'The beautiful domed home of the Wisconsin Stat Government.'),
    ('Milwaukee Art Museum', 'Milwaukee, WI', 'Iconic architecture, incredible culture.');

INSERT INTO favorites (landmark_name, is_favorite)
VALUES
    ('Lambeau Field', 1),
    ('Highway 42', 0),
    ('Wisconsin State Capitol', 0);