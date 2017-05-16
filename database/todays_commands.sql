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
