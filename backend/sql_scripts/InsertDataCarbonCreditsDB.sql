USE CarbonCredits;

-- =========================
-- EMPRESAS (20)
-- =========================
INSERT INTO Empresas (nome, TipoDeEmpresa, email, telefone, endereco, EmissaoCarbono, saldo, CreditosCarbono) VALUES
('EcoTech', 'Tecnologia', 'eco1@email.com', '111111111', 'Rua A', 120.5, 1000, 500),
('GreenCorp', 'Energia', 'eco2@email.com', '111111112', 'Rua B', 200.0, 2000, 300),
('BioFuture', 'Biotecnologia', 'eco3@email.com', '111111113', 'Rua C', 90.0, 1500, 600),
('Solaris', 'Energia Solar', 'eco4@email.com', '111111114', 'Rua D', 50.0, 1800, 800),
('WindGen', 'Energia Eólica', 'eco5@email.com', '111111115', 'Rua E', 75.0, 900, 400),
('CarbonZero', 'Consultoria', 'eco6@email.com', '111111116', 'Rua F', 30.0, 2500, 900),
('EcoBuild', 'Construção', 'eco7@email.com', '111111117', 'Rua G', 300.0, 800, 200),
('GreenFoods', 'Alimentos', 'eco8@email.com', '111111118', 'Rua H', 180.0, 700, 350),
('RecycleX', 'Reciclagem', 'eco9@email.com', '111111119', 'Rua I', 40.0, 1200, 750),
('OceanCare', 'Ambiental', 'eco10@email.com', '111111120', 'Rua J', 60.0, 1400, 500),
('ForestInc', 'Reflorestamento', 'eco11@email.com', '111111121', 'Rua K', 20.0, 1600, 1000),
('CleanAir', 'Tecnologia', 'eco12@email.com', '111111122', 'Rua L', 110.0, 900, 450),
('EcoMove', 'Transporte', 'eco13@email.com', '111111123', 'Rua M', 250.0, 1300, 300),
('GreenLog', 'Logística', 'eco14@email.com', '111111124', 'Rua N', 220.0, 1100, 200),
('AgroEco', 'Agronegócio', 'eco15@email.com', '111111125', 'Rua O', 140.0, 1700, 650),
('UrbanGreen', 'Urbanismo', 'eco16@email.com', '111111126', 'Rua P', 80.0, 1900, 720),
('BlueEnergy', 'Energia', 'eco17@email.com', '111111127', 'Rua Q', 95.0, 2100, 500),
('NatureSafe', 'Segurança Ambiental', 'eco18@email.com', '111111128', 'Rua R', 45.0, 1000, 400),
('EcoWater', 'Saneamento', 'eco19@email.com', '111111129', 'Rua S', 70.0, 800, 350),
('GreenFuture', 'Consultoria', 'eco20@email.com', '111111130', 'Rua T', 55.0, 2200, 900);


-- =========================
-- OFERTAS (20)
-- =========================
INSERT INTO Ofertas 
(vendedor_id, aberta_boolean, Tipo_do_Projeto, Descricao, creditos_oferecidos, preco_unitario) values
(1,1,'Reflorestamento','Projeto Amazônia',100,10),
(2,1,'Energia Solar','Painéis solares urbanos',200,12),
(3,1,'Reciclagem','Plásticos industriais',150,9),
(4,1,'Eólica','Parque eólico',300,15),
(5,1,'Carbono','Captura de CO2',120,11),
(6,1,'Consultoria','Redução de emissões',80,14),
(7,1,'Construção Verde','Materiais sustentáveis',90,13),
(8,1,'Agricultura','Orgânico sustentável',110,8),
(9,1,'Reciclagem','Metal reciclado',140,7),
(10,1,'Oceano','Proteção marinha',160,16),
(11,1,'Reflorestamento','Áreas degradadas',180,10),
(12,1,'Tecnologia','Filtros de ar',130,12),
(13,1,'Transporte','Frota elétrica',170,18),
(14,1,'Logística','Rota verde',200,17),
(15,1,'Agronegócio','Baixo carbono',150,11),
(16,1,'Urbanismo','Cidades verdes',190,14),
(17,1,'Energia','Hidro renovável',210,13),
(18,1,'Segurança','Monitoramento ambiental',120,9),
(19,1,'Água','Tratamento sustentável',140,10),
(20,1,'Consultoria','Neutralização carbono',220,15);


-- =========================
-- COMPRAS (20)
-- =========================
INSERT INTO Compras (data_compra, vendedor_id, comprador_id, creditos_trocados, preco_unitario) VALUES
('2026-01-01 10:00:00',1,2,50,10),
('2026-01-02 10:00:00',2,3,60,12),
('2026-01-03 10:00:00',3,4,40,9),
('2026-01-04 10:00:00',4,5,70,15),
('2026-01-05 10:00:00',5,6,30,11),
('2026-01-06 10:00:00',6,7,20,14),
('2026-01-07 10:00:00',7,8,25,13),
('2026-01-08 10:00:00',8,9,45,8),
('2026-01-09 10:00:00',9,10,55,7),
('2026-01-10 10:00:00',10,11,65,16),
('2026-01-11 10:00:00',11,12,75,10),
('2026-01-12 10:00:00',12,13,35,12),
('2026-01-13 10:00:00',13,14,80,18),
('2026-01-14 10:00:00',14,15,90,17),
('2026-01-15 10:00:00',15,16,60,11),
('2026-01-16 10:00:00',16,17,85,14),
('2026-01-17 10:00:00',17,18,95,13),
('2026-01-18 10:00:00',18,19,50,9),
('2026-01-19 10:00:00',19,20,40,10),
('2026-01-20 10:00:00',20,1,100,15);


-- =========================
-- COMPRAS_OFERTA (20)
-- =========================
INSERT INTO Compras_Oferta (oferta_id, data_compra, vendedor_id, comprador_id) VALUES
(1,'2026-01-01 10:00:00',1,2),
(2,'2026-01-02 10:00:00',2,3),
(3,'2026-01-03 10:00:00',3,4),
(4,'2026-01-04 10:00:00',4,5),
(5,'2026-01-05 10:00:00',5,6),
(6,'2026-01-06 10:00:00',6,7),
(7,'2026-01-07 10:00:00',7,8),
(8,'2026-01-08 10:00:00',8,9),
(9,'2026-01-09 10:00:00',9,10),
(10,'2026-01-10 10:00:00',10,11),
(11,'2026-01-11 10:00:00',11,12),
(12,'2026-01-12 10:00:00',12,13),
(13,'2026-01-13 10:00:00',13,14),
(14,'2026-01-14 10:00:00',14,15),
(15,'2026-01-15 10:00:00',15,16),
(16,'2026-01-16 10:00:00',16,17),
(17,'2026-01-17 10:00:00',17,18),
(18,'2026-01-18 10:00:00',18,19),
(19,'2026-01-19 10:00:00',19,20),
(20,'2026-01-20 10:00:00',20,1);