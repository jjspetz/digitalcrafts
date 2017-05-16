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
