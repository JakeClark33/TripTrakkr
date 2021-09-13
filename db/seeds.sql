INSERT INTO landmarks (landmark_name, landmark_location, landmark_description)
VALUES
    ('Lambeau Field', 'Green Bay, WI', 'Home of the Green Bay Packers!'),
    ('Highway 42', 'Northport, WI', 'A twisty road at the tip of Door County is the last streach before taking the ferry to Washington Island.'),
    ('Wisconsin State Capitol', 'Madison, WI', 'The beautiful domed home of the Wisconsin Stat Government.'),
    ('Milwaukee Art Museum', 'Milwaukee, WI', 'Iconic architecture, incredible culture.'),
    ("Noah's Ark Waterpark", 'Wisconsin Dells, WI', 'The Waterpark Capitol of the Waterpark Capital of the World!'),
    ("Devil's Lake State Park", 'Baraboo, WI', 'A beautiful lake with incredible geological features.'),
    ('Apostle Islands', 'Apostle Islands National Lakeshore', 'Up North? Apostle Islands cannot be missed!'),
    ('The House on the Rock', 'Dodgeville, WI', 'Designed by Alex Jordan Jr., this house may go on forever.'),
    ('Bay Beach Amusement Park', 'Green Bay, WI', ),
    ('EAA Aviation Museum', 'Oshkosh, WI', 'During its annual event, the EAA is the busiest airport in the world!');

INSERT INTO favorites (landmark_name, is_favorite)
VALUES
    ('Lambeau Field', 1),
    ('Highway 42', 0),
    ('Wisconsin State Capitol', 0),
    ('Milwaukee Art Museum', 0)
    ("Noah's Ark Waterpark", 1),
    ("Devil's Lake State Park", 0),
    ('Apostle Islands' 1),
    ('The House on the Rock',1),
    ('Bay Beach Amusement Park', 0)
    ('EAA Aviation Museum', 1);