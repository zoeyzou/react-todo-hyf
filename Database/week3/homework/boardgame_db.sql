SET NAMES utf8mb4;

CREATE TABLE `boardgames` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `min_player` int(10) DEFAULT NULL,
    `max_player` int(10) DEFAULT NULL,
    `description` text DEFAULT NULL,
    `recommended_age` int(10) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `authors` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) DEFAULT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `categories` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `shops` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL, 
    `url` varchar(255) DEFAULT NULL,
    `price` int(10) DEFAULT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `game_author` (
	`game_id` int(10) unsigned NOT NULL,
    `author_id` int(10) unsigned NOT NULL,
	PRIMARY KEY (`game_id`, `author_id`),
    CONSTRAINT `fk_game_author_game` FOREIGN KEY (`game_id`) REFERENCES `boardgames` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_game_author_author` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `game_category` (
	`game_id` int(10) unsigned NOT NULL,
    `category_id` int(10) unsigned NOT NULL,
	PRIMARY KEY (`game_id`, `category_id`),
    CONSTRAINT `fk_game_category_game` FOREIGN KEY (`game_id`) REFERENCES `boardgames` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_game_category_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `game_shop` (
	`game_id` int(10) unsigned NOT NULL,
    `shop_id` int(10) unsigned NOT NULL,
	PRIMARY KEY (`game_id`, `shop_id`),
    CONSTRAINT `fk_game_shop_game` FOREIGN KEY (`game_id`) REFERENCES `boardgames` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_game_shop_shop` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;