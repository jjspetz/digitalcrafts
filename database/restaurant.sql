CREATE TABLE restaurant (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR NOT NULL,
  distance NUMERIC,
  stars INTEGER DEFAULT 0 CHECK (stars <= 5),
  category VARCHAR,
  best_dish VARCHAR,
  takeout BOOLEAN DEFAULT FALSE,
  last_time_went DATE
);

SELECT name FROM restaurant WHERE stars = 5
SELECT name, best_dish FROM restaurant WHERE stars = 5
SELECT id FROM restaurant WHERE name = 'Moon Tower'
SELECT id, name FROM restaurant WHERE category = 'BBQ'
SELECT id, name FROM restaurant WHERE takeout = TRUE
SELECT id, name FROM restaurant WHERE distance < 2
SELECT id, name FROM restaurant WHERE last_time_went > '2017/05/8'
SELECT id, name FROM restaurant WHERE last_time_went < '2017/05/8' AND stars = 5
