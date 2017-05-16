-- project-db
--1
SELECT project.name, tech.name FROM project_uses_tech
JOIN tech ON project_uses_tech.tech_id = tech.id
JOIN project ON project_uses_tech.project_id = project.id
WHERE tech.name = 'JavaScript'
--2
SELECT project.name, tech.name FROM project_uses_tech
JOIN tech ON project_uses_tech.tech_id = tech.id
JOIN project ON project_uses_tech.project_id = project.id
WHERE project.name = 'Personal Website'
--3
SELECT * FROM tech
LEFT OUTER JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id
WHERE project_id IS NULL;
--4
SELECT name, count(name) FROM tech
RIGHT OUTER JOIN project_uses_tech ON tech_id = tech.id
GROUP BY name;
--5
SELECT * FROM project
LEFT OUTER JOIN project_uses_tech ON project_id = project.id
WHERE tech_id IS NULL;
--6
SELECT tech_id, tech.name, count(*) FROM project
LEFT OUTER JOIN project_uses_tech ON project_id = project.id
LEFT OUTER JOIN tech ON tech_id = tech.id
GROUP BY tech_id, tech.name
--7
SELECT project.name, tech.name FROM project
LEFT OUTER JOIN project_uses_tech ON project_id = project.id
LEFT OUTER JOIN tech ON tech_id = tech.id
GROUP BY project.name, tech.name
--8
SELECT DISTINCT(tech.name) FROM project
JOIN project_uses_tech ON project_id = project.id
JOIN tech ON tech_id = tech.id
--9
SELECT DISTINCT(tech.name) FROM project
RIGHT OUTER JOIN project_uses_tech ON project_id = project.id
RIGHT OUTER JOIN tech ON tech_id = tech.id
WHERE project.name IS NULL
--10
SELECT DISTINCT(project.name) FROM project
JOIN project_uses_tech ON project_id = project.id
JOIN tech ON tech_id = tech.id
--11
SELECT DISTINCT(project.name) FROM project
LEFT OUTER JOIN project_uses_tech ON project_id = project.id
LEFT OUTER JOIN tech ON tech_id = tech.id
WHERE tech.id IS NULL
--12
SELECT DISTINCT(project.name), count(tech.id) FROM project
LEFT OUTER JOIN project_uses_tech ON project_id = project.id
LEFT OUTER JOIN tech ON tech_id = tech.id
GROUP BY project.name
ORDER BY count DESC
--13
SELECT DISTINCT(tech.name), count(project.id) FROM project
LEFT OUTER JOIN project_uses_tech ON project_id = project.id
JOIN tech ON tech_id = tech.id
GROUP BY tech.name
ORDER BY count DESC
--14
SELECT AVG(count) FROM (SELECT DISTINCT(project.name), count(tech.id) FROM project
LEFT OUTER JOIN project_uses_tech ON project_id = project.id
LEFT OUTER JOIN tech ON tech_id = tech.id
GROUP BY project.name) AS alias

-- Restaurant v2
-- set up schema
CREATE TABLE restaurant (
id SERIAL NOT NULL PRIMARY KEY,
name VARCHAR NOT NULL,
address VARCHAR,
category VARCHAR
)
CREATE TABLE reviewer (
id SERIAL NOT NULL PRIMARY KEY,
name VARCHAR NOT NULL,
email VARCHAR,
karma INTEGER DEFAULT 0 CHECK (karma<=7 and karma >= 0)
)
CREATE TABLE review (
id SERIAL NOT NULL PRIMARY KEY,
reviewer INTEGER REFERENCES reviewer(id),
stars INTEGER CHECK (stars<=5 and stars>=1),
title VARCHAR,
review VARCHAR,
restaurant_id INTEGER REFERENCES restaurant(id)
)
-- 1
SELECT restaurant_id, review FROM review
WHERE restaurant_id = 1
-- 2
SELECT restaurant_id, restaurant.name, review FROM review
JOIN restaurant ON restaurant_id = restaurant.id
WHERE restaurant.name = 'Champs'
-- 3
SELECT reviewer.name, review FROM review
JOIN reviewer ON review.reviewer = reviewer.id
WHERE reviewer.name = 'Ryan'
-- 4
SELECT restaurant.name, review FROM review
JOIN restaurant ON restaurant_id = restaurant.id
GROUP BY restaurant.name, review
-- 5
SELECT restaurant.name, AVG(stars) FROM review
JOIN restaurant ON restaurant_id = restaurant.id
GROUP BY restaurant.name
-- 6
SELECT restaurant.name, COUNT(review) FROM review
JOIN restaurant ON restaurant_id = restaurant.id
GROUP BY restaurant.name
-- 7
SELECT restaurant.name, reviewer.name, review FROM review
JOIN restaurant ON restaurant_id = restaurant.id
JOIN reviewer ON review.reviewer = reviewer.id
GROUP BY restaurant.name, reviewer.name, review
-- 8
SELECT reviewer.name, AVG(stars) FROM review
JOIN reviewer ON reviewer = reviewer.id
GROUP BY name
-- 9
SELECT reviewer.name, MIN(stars) FROM review
JOIN reviewer ON reviewer = reviewer.id
GROUP BY name
-- 10
SELECT category, COUNT(name) FROM restaurant
GROUP BY category
-- 11
SELECT restaurant.name, stars FROM review
JOIN restaurant ON restaurant_id = restaurant.id
WHERE stars = 5;
-- 12
SELECT category, AVG(stars) FROM review
JOIN restaurant ON restaurant_id = restaurant.id
GROUP BY category
