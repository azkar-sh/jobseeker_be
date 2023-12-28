-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2023 at 11:05 AM
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
  `last_salary` int(100) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `t_candidate`
--

INSERT INTO `t_candidate` (`candidate_id`, `email`, `phone_number`, `full_name`, `dob`, `pob`, `gender`, `year_exp`, `last_salary`, `created_at`, `updated_at`) VALUES
(74794650, 'adriana_m@mail.com', '088974478341', 'Adriana Matahari', '1997-07-08', 'Bengkulu', 'Female', '2', 3200000, 1703755549, 1703756144),
(181743723, 'aira_put@mail.com', '087887545562', 'Aira Kartika Putri', '23 Mei 1992', 'Tangerang', 'F', '6 Year', 23500000, 1703757574, 1703757574),
(359143011, 'pram_963@mail.com', '083267765123', 'Pramuda Antara', '2023-11-26', 'Jambi', 'Male', '3', 4000000, 1703756083, 1703756433),
(491922546, 'ok_eputri@mail.com', '08112345145', 'Oke Putri', '2023-11-29', 'Padang', 'Female', '1', 6000000, 1703756665, 1703756665),
(537613109, 'mira_94@mail.com', '08888544351', 'Almira Sahputri', '1993-06-28', 'Jakarta', 'Male', '1', 9800000, 1703756615, 1703756615),
(616829449, 'ghoz_ok@mail.com', '08886452345', 'Sukron Ghonzali', '2020-02-28', 'Tangerang', 'Male', '2', 21000000, 1703756542, 1703756542),
(654800738, 'kartika_ag@mail.com', '08967723876', 'Kartika Agusta', '2023-12-13', 'Cikarang', 'Female', '2', 3500000, 1703755997, 1703756124),
(710382018, 'zak_pur97@mail.com', '08121165434', 'Zakaria Purna', '2023-09-05', 'Bandung', 'Male', '2', 12000000, 1703756484, 1703756484),
(730198473, 'purwontoro_adm@mail.com', '0875223461223', 'Budi Purwontoro', '1990-07-11', 'Tangerang', 'Male', '3', 21000000, 1703731017, 1703756323),
(800977407, 'april_adm@mail.com', '087887543890', 'Aprilia Nur', '1996-07-16', 'Tangerang', 'Female', '3', 23500000, 1703731068, 1703756216),
(896220170, 'super_a@mail.com', '08888557213', 'Super Admin', '2023-12-19', 'Tangerang', 'Male', '2', 200000, 1703661508, 1703756347),
(952510810, 'mas_adm@mail.com', '09567234122', 'Mas Adm', 'Tangerang', '12 Feb 2005', 'M', '30000', 200000, 1703661079, 1703757600);

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
