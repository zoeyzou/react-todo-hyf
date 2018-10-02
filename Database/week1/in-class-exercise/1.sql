SELECT COUNT(task.user_id ), user.name
FROM task INNER JOIN user ON task.user_id=user.id
GROUP BY user.name;