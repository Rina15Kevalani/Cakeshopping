CREATE SCHEMA cakeshopp;
use cakeshopp;
CREATE TABLE `product` (
  `prid` int NOT NULL AUTO_INCREMENT,
  `prnm` varchar(50) DEFAULT NULL,
  `ct_catid` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `descrip` varchar(500) DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `reorder` int DEFAULT NULL,
  `pic` blob,
  PRIMARY KEY (`prid`)
);

CREATE TABLE `category` (
  `catid` int NOT NULL AUTO_INCREMENT,
  `catnm` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`catid`)
);
use cakeshopp;

delimiter $$
create procedure productbycategory(in catid int)
begin

select * from product p inner join category c where c.catid = p.ct_catid and c.catid = catid;

end$$
delimiter $$;

call productbycategory(2);
