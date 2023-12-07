-- Users
INSERT INTO `Users` (`id`, `nom`, `prenom`, `username`, `password`, `role`, `createdAt`, `updatedAt`)
VALUES (1, 'admin', 'admin', 'admin', '$2b$07$Ag6shPE6X1Qj.nKfhJmh2eEt8p3jKZNWmrbG4wLxG52H6ftg4uWIm', 'admin',
        '2020-01-01 02:07:00', '2020-01-01 02:07:00'),
       (2, 'admin2', 'admin2', 'admin2', '$2b$07$NyPgKe8pIAOhe/CiA7Kq9.2w/APZ.HEnkNQRCpUsLe1XuPxNpCwbe', 'admin',
        '2020-01-12 13:24:47', '2020-01-12 13:24:47'),
       (3, 'Coulou', 'Kadi', 'kadicoul', '$2b$07$zCV5vicVhG4r9BJLU2DBHeq/kIrsqKbiBamqDmim6L7qozXna1.z6', 'basic-user',
        '2020-01-12 13:38:11', '2020-01-12 13:38:11');


