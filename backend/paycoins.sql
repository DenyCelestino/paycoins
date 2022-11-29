-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24-Fev-2022 às 17:17
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `paycoins`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `gamescoins`
--

CREATE TABLE `gamescoins` (
  `id` int(100) NOT NULL,
  `name_coins` varchar(100) NOT NULL,
  `quantity` int(100) NOT NULL,
  `price` float NOT NULL,
  `id_games` int(100) NOT NULL,
  `banner` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `gamescoins`
--

INSERT INTO `gamescoins` (`id`, `name_coins`, `quantity`, `price`, `id_games`, `banner`) VALUES
(1, 'Dimas', 100, 70, 1, 'freefire/images/dimas.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `giftcard`
--

CREATE TABLE `giftcard` (
  `id` int(100) NOT NULL,
  `descriptiongiftcard` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `id_gift` int(11) NOT NULL,
  `banner` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `giftcard`
--

INSERT INTO `giftcard` (`id`, `descriptiongiftcard`, `price`, `id_gift`, `banner`) VALUES
(2, '80% discount', 120.2, 2, 'freefire/images.giftcard2.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `notice`
--

CREATE TABLE `notice` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `banner` varchar(80) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `date_post` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `notice`
--

INSERT INTO `notice` (`id`, `title`, `description`, `banner`, `gender`, `date_post`) VALUES
(1, 'Gru mal dispostos no fortnite?', 'Será que o desenhos mais adorado do 2019 sera nova skin do fortnite?\r\n', 'freefire/images/back.jpg', 'game', '2022-02-24 17:10:17');

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `banner` varchar(100) NOT NULL,
  `descriptionproducts` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `product_type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `name`, `banner`, `descriptionproducts`, `gender`, `product_type`) VALUES
(1, 'Free Fire', 'freefire/images/freefire.jpg', 'Garena Free fire, Battle-royale', 'Battle-Royale', 'game'),
(2, 'Playstore ', 'freefire/images/giftcard.jpg', 'Playstore giftcard 2022', 'giftcard', 'giftcard');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL DEFAULT '',
  `date_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `gamescoins`
--
ALTER TABLE `gamescoins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_games` (`id_games`);

--
-- Índices para tabela `giftcard`
--
ALTER TABLE `giftcard`
  ADD PRIMARY KEY (`id`),
  ADD KEY `giftcard_ibfk_1` (`id_gift`);

--
-- Índices para tabela `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `gamescoins`
--
ALTER TABLE `gamescoins`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `giftcard`
--
ALTER TABLE `giftcard`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `notice`
--
ALTER TABLE `notice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `gamescoins`
--
ALTER TABLE `gamescoins`
  ADD CONSTRAINT `gamescoins_ibfk_1` FOREIGN KEY (`id_games`) REFERENCES `products` (`id`);

--
-- Limitadores para a tabela `giftcard`
--
ALTER TABLE `giftcard`
  ADD CONSTRAINT `giftcard_ibfk_1` FOREIGN KEY (`id_gift`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
