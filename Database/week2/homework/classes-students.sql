CREATE TABLE `class` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `begins` DATETIME NOT NULL,
    `ends` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `students` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `phone` varchar(255) NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- classes
INSERT INTO class (id, name, begins, ends) VALUES (1, 'History', '2018-10-29 08:00:00', '2019-01-20 17:00:00');
INSERT INTO class (id, name, begins, ends) VALUES (2, 'Literature', '2018-10-19 10:00:00', '2019-03-21 17:00:00');
INSERT INTO class (id, name, begins, ends) VALUES (3, 'Geography', '2018-11-12 13:00:00', '2019-02-10 13:00:00');


-- students
INSERT INTO students (id, name, email, phone, class_id) VALUES (1, 'Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795', 1);
INSERT INTO students (id, name, email, phone, class_id) VALUES (1, 'Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467', 2);
INSERT INTO students (id, name, email, phone, class_id) VALUES (1, 'Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683', 1);
INSERT INTO students (id, name, email, phone, class_id) VALUES (1, 'Rodie Duncan', 'rduncan3@quantcast.com', '646-743-6191', 3);
INSERT INTO students (id, name, email, phone, class_id) VALUES (1, 'Aubry Polak', 'apolak4@indiatimes.com', '302-678-7931', 2);
INSERT INTO students (id, name, email, phone, class_id) VALUES (1, 'Maryrose Meadows', 'mmeadows5@comcast.net', '251-524-6594', 1);
INSERT INTO students (id, name, email, phone, class_id) VALUES (1, 'Pavel Brushneen', 'pbrushneen6@techcrunch.com', '316-170-3640', 3);
INSERT INTO students (id, name, email, phone, class_id) VALUES (1, 'Hedy Gerault', 'hgerault7@nymag.com', '176-177-5579', 1);
INSERT INTO students (id, name, email, phone, class_id) VALUES (1, '王秀英', 'wang.xiuying@weebly.com', '891-952-6749', 2);
INSERT INTO students (id, name, email, phone, class_id) VALUES (1, 'إلياس', 'elias@github.com', '202-517-6983', 3);