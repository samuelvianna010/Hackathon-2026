CREATE TABLE IF NOT EXISTS EMPRESAS (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    tipo_empresa VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    emissao_carbono FLOAT NOT NULL,
    saldo FLOAT DEFAULT 0,
    creditos_carbono FLOAT NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS OFERTAS (
    id INT NOT NULL AUTO_INCREMENT,
    vendedor_id INT NOT NULL,
    aberta BOOLEAN DEFAULT TRUE,
    tipo_projeto VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    creditos_oferecidos FLOAT NOT NULL,
    preco_unitario FLOAT NOT NULL,
    data_oferta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (id),
    FOREIGN KEY (vendedor_id) REFERENCES EMPRESAS(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS COMPRAS (
    id INT NOT NULL AUTO_INCREMENT,
    data_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    vendedor_id INT NOT NULL,
    comprador_id INT NOT NULL,
    creditos_trocados FLOAT NOT NULL,
    preco_unitario FLOAT NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (vendedor_id) REFERENCES EMPRESAS(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (comprador_id) REFERENCES EMPRESAS(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);