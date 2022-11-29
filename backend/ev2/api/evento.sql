-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 18-Jan-2022 às 11:06
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `evento`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria_event`
--

CREATE TABLE `categoria_event` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `decription` longtext NOT NULL,
  `local` varchar(100) NOT NULL,
  `date` datetime NOT NULL,
  `date_s` datetime NOT NULL,
  `date_e` datetime NOT NULL,
  `user` int(11) NOT NULL,
  `capa` varchar(50) NOT NULL,
  `categoria` varchar(20) DEFAULT NULL,
  `custo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `events`
--

INSERT INTO `events` (`id`, `nome`, `decription`, `local`, `date`, `date_s`, `date_e`, `user`, `capa`, `categoria`, `custo`) VALUES
(45, 'Campeonato Mundil de Freefire', '', 'nova york', '2021-12-03 13:31:43', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 'up/61aa0e2f518dd.jpeg', NULL, NULL),
(46, 'musica da cidde 1 Edicao', '', '', '2021-12-03 13:32:23', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 'up/61aa0e5791999.jpeg', NULL, NULL),
(47, 'Os irmaos Maricoa', 'nao perca', 'Nampula', '2021-12-03 15:26:03', '2021-12-16 06:25:00', '2021-12-16 06:25:00', 2, 'up/61aa28fc02810.jpeg', '0', 0),
(48, 'virada do ano no chocas com Dj Abukar  -31 de Dezembro', 'nmr rrrrr ', 'NOVA yORK', '2021-12-03 21:01:11', '2021-12-10 12:00:00', '2021-12-10 12:00:00', 2, 'up/61aa778782a7f.png', '0', 0),
(49, 'Campeonto Mundia de Ok ', 'Vai ser Fish', 'Nampula', '2021-12-04 08:34:45', '2021-12-03 23:37:00', '2021-12-03 23:37:00', 2, 'up/61ab1a158e481.png', '0', 1000),
(50, 'n', 'n', 'Nampula', '2021-12-04 08:42:38', '2021-12-03 23:45:00', '2021-12-03 23:45:00', 2, 'up/61ab1bee3e1c5.png', 'Outros', 0),
(51, 'h', 'bn', 'Nampula', '2021-12-04 09:27:49', '2021-12-04 02:27:00', '2021-12-04 02:27:00', 2, 'up/61ab2685a5f7e.jpeg', '', 0),
(52, 'lncmento da Ptaforma Mercado Virtual', 'Eh uma Platform de Vendas de produtos', 'Nampula', '2021-12-05 02:34:19', '2021-12-17 17:33:00', '2021-12-17 17:33:00', 2, 'up/61ac171b99384.jpeg', 'Outros', 0),
(53, 'Show do Gambeta', '', 'Nampula', '2022-01-06 10:32:19', '2022-01-05 01:31:00', '2022-01-05 01:31:00', 2, 'up/61d6b723f115b.png', 'Show', 10000);

-- --------------------------------------------------------

--
-- Estrutura da tabela `participantes`
--

CREATE TABLE `participantes` (
  `id` int(11) NOT NULL,
  `evento` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `celular` varchar(14) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `event` int(11) NOT NULL,
  `user_pipocar` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `price_pay` varchar(10) NOT NULL,
  `method_pay` varchar(50) NOT NULL,
  `ticket_type` varchar(20) NOT NULL DEFAULT 'Normal'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `utilizadores`
--

CREATE TABLE `utilizadores` (
  `id` int(11) NOT NULL,
  `utilizador` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(55) NOT NULL,
  `senha` longtext NOT NULL,
  `avatar` longtext DEFAULT NULL,
  `celular` int(15) NOT NULL,
  `url` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `utilizadores`
--

INSERT INTO `utilizadores` (`id`, `utilizador`, `email`, `senha`, `avatar`, `celular`, `url`) VALUES
(2, 'Memeiro Spy', 'deny@gmail.com', '$2y$10$3hHUlilqgtXKiFDHhx8rE.J8d/e/dhtFCqX1QjG7sX8kcqK63ww6y', 'http://192.168.43.46/meme/img/avatar/834b458a-e837-4c88-a74b-b6b776ec8279617146e932339.jpg', 844505131, '@deny'),
(3, 'Tyga', 'tyga@gmail.com', '$2y$10$3hHUlilqgtXKiFDHhx8rE.J8d/e/dhtFCqX1QjG7sX8kcqK63ww6y', 'profiles/9314461972eed840e8.jpg', 0, '@tyga'),
(9, 'X_X ', 'zuck@gmail.com', '$2y$10$3hHUlilqgtXKiFDHhx8rE.J8d/e/dhtFCqX1QjG7sX8kcqK63ww6y', 'http://192.168.43.46/meme/img/avatar/720058c7-7cf2-4f15-933b-bfbd3687ce41617da09c79873.jpg', 866460507, '@zuck'),
(11, 'AllDayMeme 360', 'mussa@gmail.com', '$2y$10$3hHUlilqgtXKiFDHhx8rE.J8d/e/dhtFCqX1QjG7sX8kcqK63ww6y', 'http://192.168.43.46/meme/img/avatar/a26455fa-d482-478c-ba6b-1af9448d454c61706db505968.jpg', 84711792, '@mussa'),
(12, 'Don\'TkillMyVibe🇲🇿', 'memei@gmail.com', '$2y$10$3hHUlilqgtXKiFDHhx8rE.J8d/e/dhtFCqX1QjG7sX8kcqK63ww6y', 'http://192.168.43.46/meme/img/avatar/7ccc69ad-d699-48c5-98ed-7866a2d3efc76170f59eadc38.jpg', 84711792, '@memei'),
(43, 'Lucas', 'bela@gmail.com', '$2y$10$4jwixJN/JWroU/KbN9AFPubou/mbUmH85fmYrBGjNW9wG5G/vvYu2', 'http://192.168.43.46/meme/img/avatar/Predifinido/avatar.png', 0, NULL),
(49, 'Pink-Meme360🌹🇲🇿', 'sky@gmail.com', '$2y$10$lbULXbqDebWZ7CirfjK6Y.J0n5KDuOK0lqV.LNlRqlfc95uCpO8kS', 'http://192.168.43.46/meme/img/avatar/02fddeca-128c-45bf-8a5a-add10761627c617db74e6c494.jpg', 0, NULL),
(52, 'NPL_Memes', 'npl@gmail.com', '$2y$10$hJPuFs1vP0uEarYxNCdjTu1zjgd8Q4UoJBHFsuuPkxZ851Wk6HXCW', 'http://192.168.43.46/meme/img/avatar/c332b820-0ea2-4930-b6cf-4d6cf081962b61714d6f77b98.jpg', 0, NULL),
(54, 'Delfim Celestino A. Pastola', 'new@gmail.com', '$2y$10$u9GlLBalU1oUln0b6nCXDeu4u8iHAxxCSNsU.jQwIH4vmdMBJyttW', 'http://192.168.43.46/meme/img/avatar/62f3803a-6e8d-44b5-a3dc-8385544b33dc6174d69d3263e.jpg', 0, NULL),
(57, 'Lucas Alberto Fulano', 'lucas2@gmail.com', '$2y$10$asMqB.AqW8dXH7/WTvevF.e0dP.idAvJTUSN27O7oJhiTbdeM7x1a', 'http://192.168.43.46/meme/img/avatar/0e23ac84-1c01-4242-8bef-89cc3dcd02c76175bbc17f361.jpg', 0, NULL),
(60, 'Lucas___', 'lucasalbertofulano@gmail.com', '$2y$10$1YGXQN0ImM.c/zCSxpZKGOu8nfQid0lFL8WkS1Ue4ToXj3S0t4TCO', NULL, 0, NULL),
(61, 'Dc', 'lucasalbertofulano@gmail.', '$2y$10$n7HUoAaTk6UMy3OAV0MBx.RkKE8mChRjlr5nfCAR.jt5RvfcHajbW', NULL, 0, NULL),
(62, 'Fff', 'denycelestino@21gmail.om', '$2y$10$f2tHYUOeKLktylutrnAe1exUjs7CYPnCRwc3vN96sgpK3zCa.NPNu', NULL, 0, NULL),
(63, 'Agha', 'lucas@gmail.com', '$2y$10$x/J8W9z7x4JiicK1OeZ9g.KECWm4oXJ1dDGuhej4yC/GOZC0UMUM.', NULL, 0, NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Índices para tabela `participantes`
--
ALTER TABLE `participantes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `evento` (`evento`);

--
-- Índices para tabela `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_pipocar` (`user_pipocar`),
  ADD KEY `event` (`event`);

--
-- Índices para tabela `utilizadores`
--
ALTER TABLE `utilizadores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `utilizador` (`utilizador`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de tabela `participantes`
--
ALTER TABLE `participantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de tabela `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de tabela `utilizadores`
--
ALTER TABLE `utilizadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`user`) REFERENCES `utilizadores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `participantes`
--
ALTER TABLE `participantes`
  ADD CONSTRAINT `participantes_ibfk_1` FOREIGN KEY (`evento`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
