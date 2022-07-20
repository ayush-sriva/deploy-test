DROP TABLE IF EXISTS `location`;
CREATE TABLE `location` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `pin` integer NOT NULL,
    `name` varchar(45) NOT NULL,
	`aqi` integer NOT NULL,
	PRIMARY KEY(`id`)
)AUTO_INCREMENT=1;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(45) NOT NULL,
    `password` varchar(45) NOT NULL,
    `email` varchar(45) NOT NULL,
    `loc_id` int NOT NULL,
    PRIMARY KEY(`id`),
    foreign key(`loc_id`) references `location`(id)
)AUTO_INCREMENT=1;

DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(45) NOT NULL,
    `description` varchar(500) NOT NULL,
    `about` varchar(500) NOT NULL,
    `logo`  varchar(100) NOT NULL,
    PRIMARY KEY(`id`)
)AUTO_INCREMENT=1;

DROP TABLE IF EXISTS `skill`;
CREATE TABLE `skill` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `skill` varchar(45) NOT NULL,
    PRIMARY KEY(`id`)
)AUTO_INCREMENT=1;

DROP TABLE IF EXISTS `job`;
CREATE TABLE `job` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `description` varchar(500) NOT NULL,
    `createdat` varchar(45) NOT NULL,
    `skill_id` int NOT NULL,
    `company_id` int NOT NULL,
    `loc_id` int NOT NULL,
    PRIMARY KEY(`id`),
    foreign key(`skill_id`) references `skill`(id),
    foreign key(`company_id`) references `company`(id),
        foreign key(`loc_id`) references `location`(id)

)AUTO_INCREMENT=1;



DROP TABLE IF EXISTS `saved_jobs`;
CREATE TABLE `saved_jobs` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
	`user_id` int NOT NULL,
    `job_id` int NOT NULL,
    `applied` int NOT NULL,
    foreign key(`user_id`) references `user`(id),
    foreign key(`job_id`) references `job`(id),
    PRIMARY KEY(`id`)
)AUTO_INCREMENT=1;
