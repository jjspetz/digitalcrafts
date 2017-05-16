SELECT project.name, tech.name FROM project_uses_tech
JOIN tech ON project_uses_tech.tech_id = tech.id
JOIN project ON project_uses_tech.project_id = project.id
WHERE tech.name = 'JavaScript'

SELECT project.name, tech.name FROM project_uses_tech
JOIN tech ON project_uses_tech.tech_id = tech.id
JOIN project ON project_uses_tech.project_id = project.id
WHERE project.name = 'Personal Website'
