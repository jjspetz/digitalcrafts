-- 1
SELECT track, song, name FROM track
JOIN album ON album.id = album_id
JOIN song on song.id = song_id
WHERE name = 'Goodbye Grief';
-- 2
SELECT album.name FROM artist_album
JOIN album ON album.id = album_id
JOIN artist on artist.id = artist_id
WHERE artist.name = 'Kim Yuna';
-- 3
SELECT MAX(length) FROM track
-- better answer for 3
SELECT track, song, length FROM track
JOIN song ON song.id = song_id
WHERE length = (SELECT MAX(length) from track)
-- 4
SELECT name, release_date FROM album
WHERE release_date < '2000-01-01'
-- 5
SELECT album.name, release_date FROM artist_album
JOIN album ON album.id = album_id
JOIN artist on artist.id = artist_id
WHERE release_date < '2000-01-01' and artist.name = 'Kim Yuna'
-- 6
SELECT artist.name,  MAX(release_date) FROM artist_album
JOIN album ON album.id = album_id
JOIN artist on artist.id = artist_id
GROUP BY artist.name
-- 7
SELECT name, SUM(length) FROM track
JOIN album ON album.id = album_id
GROUP BY name
-- 8
SELECT name, SUM(length) INTO t1
FROM track
JOIN album ON album.id = album_id
GROUP BY name;

SELECT name, sum FROM t1
WHERE sum = (SELECT MAX(sum) FROM t1);

DROP TABLE t1;
-- 9
--skip no relevant

-- 10
SELECT artist.name, track, song FROM track
JOIN song on song.id = song_id
JOIN artist on artist.id = artist_id
WHERE artist.lead_artist = true and artist.name ILIKE '%kevin%'
-- 11
SELECT song, count(track) FROM track
JOIN song on song.id = song_id
GROUP BY song
ORDER BY count DESC LIMIT 5
-- 12
-- skip no relevant data
