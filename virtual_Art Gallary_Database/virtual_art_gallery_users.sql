-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: virtual_art_gallery
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email_id` varchar(45) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `profile_photo` blob,
  `area_id` int NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(150) NOT NULL,
  `status` tinyint NOT NULL,
  `role_id` int NOT NULL,
  `address` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `area_id_idx` (`area_id`),
  KEY `role_id_fk_idx` (`role_id`),
  CONSTRAINT `area_id_fk` FOREIGN KEY (`area_id`) REFERENCES `area` (`area_id`),
  CONSTRAINT `role_id_fk` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Dhanashree','Sonawane','dhanu@gmail.com','9022670578',NULL,1,'dhanu07','Dhanu@123',1,2,'pune Deccan narayan peth'),(2,'Tejashree','Sonawane','teju@gmail.com','5423453412',NULL,2,'tejus','teju@123',1,3,'pune hadapsar'),(3,'snehal','som','sne@jhj','2233',NULL,1,'sn','$2a$11$Es4HzgP/y267FjakP.vaQ.QRsSAFSVTTfm70dcGYSAoD/Sqzs.gPq',0,2,'hjgh'),(4,'snehal1','som1','sne@jhj1','22313',NULL,1,'sn1','$2a$11$nUqZJCWISQZvViqIA1eQte6HK/9bxjRgjAtw4ssITl2mxqrNi9KSO',0,2,'hjgh'),(5,'Yesu','N','yesu@gmail.com','2334',NULL,3,'yesu','$2a$11$vayAmHbhF.33KSIegntxUuXs4PF5pvlwrbsxQkqcHmVtmCGrMN/2q',1,3,'dfjvkeff'),(6,'moin','rogatiya','moin@gmail.com','465896',NULL,2,'moin','$2a$11$G68KFqjcGjTNEvmNLGH6KeaKpNPLJLpme3MJDG.mcMvU1nN2jgLJe',1,2,'dfhgr');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-04  9:03:42
