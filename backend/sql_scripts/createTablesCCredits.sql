CREATE TABLE IF NOT EXISTS EMPRESAS (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    tipo_empresa VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    telefone VARCHAR(20) NOT NULL,
    saldo FLOAT DEFAULT 0,
    creditos_carbono FLOAT NOT NULL,
    preco_unitario FLOAT NOT NULL,
    
    PRIMARY KEY (id)
);

