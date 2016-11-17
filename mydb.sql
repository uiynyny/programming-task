SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB;

INSERT INTO `user` (`name`, `email`) VALUES
('Mas Banyar', 'banyar@yahoo.com'),
('Mas Mapmup', 'mapmup@gmail.com'),
('Boronong', 'borononn@yahoo.com'),
('Nadya Ek', 'nadya@yahoo.com');
