-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2023 at 11:54 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jobseeker_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `t_candidate`
--

CREATE TABLE `t_candidate` (
  `candidate_id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  `full_name` varchar(100) NOT NULL,
  `dob` varchar(100) NOT NULL,
  `pob` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `year_exp` varchar(100) NOT NULL,
  `last_salary` varchar(100) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `t_candidate`
--

INSERT INTO `t_candidate` (`candidate_id`, `email`, `phone_number`, `full_name`, `dob`, `pob`, `gender`, `year_exp`, `last_salary`, `created_at`, `updated_at`) VALUES
(607174617, 'adm@mail.com', '+866000234', 'Admin', '27 Mei 2023', 'Tangerang', 'F', '1 Year', '230000', 1703662034, 1703662034),
(896220170, 'super_adm@mail.com', '08888557213', 'Super Admin', '27 Mei 2023', 'Tangerang', 'M', '1 Year', '10000', 1703661508, 1703661508),
(952510810, 'admin@mail.com', '08123123566', 'Master Admin', '27 Desember 2023', 'Jakarta', 'M', '2 Years', '23000000', 1703661079, 1703661079);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t_candidate`
--
ALTER TABLE `t_candidate`
  ADD PRIMARY KEY (`candidate_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
