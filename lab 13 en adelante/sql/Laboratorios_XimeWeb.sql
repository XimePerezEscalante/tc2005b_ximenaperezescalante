-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 17-03-2025 a las 02:18:52
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Laboratorios_XimeWeb`
--

--
-- Volcado de datos para la tabla `biblioteca`
--

INSERT INTO `biblioteca` (`id`, `usuario_id`, `cancion_id`, `created_at`) VALUES
(1, 4, 1, '2025-03-16 18:46:46'),
(5, 5, 1, '2025-03-16 19:06:26');

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`id`, `nombre`, `artista`, `created_at`) VALUES
(1, 'everytime', 'Ariana Grande', '2025-03-13 01:51:45'),
(2, 'Forget You Not', 'Little Mix', '2025-03-13 02:02:33'),
(3, 'Quit', 'Ariana Grande', '2025-03-13 20:27:25'),
(8, 'Eres Tú', 'Carla Morrison', '2025-03-16 20:47:36');

--
-- Volcado de datos para la tabla `privilegios`
--

INSERT INTO `privilegios` (`id`, `nombre`, `created_at`) VALUES
(1, 'crear cancion', '2025-03-16 02:36:45'),
(2, 'crear playlist', '2025-03-16 02:36:45'),
(3, 'agregar cancion biblioteca', '2025-03-16 02:36:45'),
(4, 'agregar cancion playlist', '2025-03-16 02:36:45'),
(5, 'editar cancion', '2025-03-16 16:26:36'),
(6, 'eliminar cancion permanentemente', '2025-03-16 20:37:04'),
(7, 'visualizar biblioteca personal', '2025-03-16 21:00:09'),
(8, 'asignar roles', '2025-03-16 21:03:01');

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`, `created_at`) VALUES
(6, 'administrador', '2025-03-16 02:33:31'),
(7, 'usuarioxp3', '2025-03-16 02:33:31'),
(8, 'tecnico_rbac', '2025-03-16 21:03:44');

--
-- Volcado de datos para la tabla `rol_privilegio`
--

INSERT INTO `rol_privilegio` (`rol_id`, `privilegio_id`, `created_at`) VALUES
(6, 1, '2025-03-16 02:42:26'),
(6, 2, '2025-03-16 02:42:26'),
(6, 4, '2025-03-16 02:42:26'),
(6, 5, '2025-03-16 16:27:25'),
(6, 6, '2025-03-16 20:37:33'),
(7, 2, '2025-03-16 02:42:26'),
(7, 3, '2025-03-16 02:42:26'),
(7, 4, '2025-03-16 02:47:10'),
(8, 8, '2025-03-16 21:08:59');

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `mail`, `password`, `created_at`) VALUES
(2, 'xime', 'ximena@xp3.com', '$2b$12$ZsiDQrJvK/lKMmdgcp33GuxHYN882esVKbzjcsUnt0QisEOhDdzsC', '2025-03-16 00:58:29'),
(3, 'joshuemmanuel', 'joshuemmanuel@xp3.com', '$2b$12$hhwfSoCZkQ105QJLOcvfregGYEuUgvT9pY2.a00r8f.sovmENttYG', '2025-03-16 15:31:08'),
(4, 'loops', 'lupita@email.com', '$2b$12$3X4K8wFiVlq4J3lGeuUSkOXAP3UtVH6DcU7g0BWYxphU.vHELw2Iu', '2025-03-16 15:33:54'),
(5, 'andrea', 'andrea@email.com', '$2b$12$FF7wjp4qULEY4TxHk0xU4uMSUhuHSWxxOoxJnDkso7pQWKnfSzi6W', '2025-03-16 15:35:06'),
(6, 'augusto', 'augusto@email.com', '$2b$12$YYA5kxz/GYqKPvK/xXVj.ugv1oRM82peFxK42kKR0HR0J6rCW0CxS', '2025-03-16 15:35:34'),
(7, 'celeste', 'celeste@xp3.com', '$2b$12$bm406X88hKKA2iRd37Xtze27Ww/Y3YuFeoV0WmiUjfym5D2g0MIxq', '2025-03-16 22:30:04');

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`usuario_id`, `rol_id`, `created_at`) VALUES
(2, 6, '2025-03-16 03:07:28'),
(3, 6, '2025-03-16 15:39:59'),
(4, 7, '2025-03-16 15:39:59'),
(5, 7, '2025-03-16 15:39:59'),
(6, 7, '2025-03-16 15:39:59'),
(7, 8, '2025-03-16 23:34:22');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
