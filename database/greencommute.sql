CREATE DATABASE IF NOT EXISTS `BC33GreenCommute`;
USE `BC33GreenCommute`;

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
    PRIMARY KEY(`id`),
    foreign key(`skill_id`) references `skill`(id),
    foreign key(`company_id`) references `company`(id)
)AUTO_INCREMENT=1;

DROP TABLE IF EXISTS `saved_jobs`;
CREATE TABLE `saved_jobs` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
	`user_id` int NOT NULL,
    `job_id` int NOT NULL,
    `applied` boolean NOT NULL,
    foreign key(`user_id`) references `user`(id),
    foreign key(`job_id`) references `job`(id),
    PRIMARY KEY(`id`)
)AUTO_INCREMENT=1;


DROP TABLE IF EXISTS `saved_jobs`;
CREATE TABLE `saved_jobs` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
	`user_id` int NOT NULL,
    `job_id` int NOT NULL,
    `applied` boolean NOT NULL,
    foreign key(`user_id`) references `user`(id),
    foreign key(`job_id`) references `job`(id),
    PRIMARY KEY(`id`)
)AUTO_INCREMENT=1;

INSERT INTO `skill` VALUES
	(1,"Product Designer"),
    (2,"UI/UX Designer"),
    (3,"Full Stack Developer"),
    (4,"Front End Engineer"),
    (5,"Back End Engineer"),
    (6,"DevOps Engineer");

INSERT INTO `location` VALUES
	(1,110085,"Hyderabad",894),
    (2,110085,"Mumbai",953),
    (3,110085,"Haryana",358),
    (4,110085,"New Delhi",564),
    (5,110085,"Punjab",786),
    (6,110085,"Chandigarh",656);

INSERT INTO `company` VALUES
	(1,"Myntra","Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."),
    (2,"BMW","Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."),
    (3,"Instagram","Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."),
	(4,"HP","Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."),
	(5,"Twitter","Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide."),
	(6,"Wipro","Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.");

INSERT INTO `user` VALUES
	(1,"Gayatri","12345","gayatri@gmail.com",1);

INSERT INTO `job` VALUES
	(1,"Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.","1998-01-23 12:45:56",2,4);

INSERT INTO `saved_jobs` VALUES
	(1,1,1,true);