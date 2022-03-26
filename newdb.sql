create database bi4alldb_2;


-- Schema 
CREATE TABLE my_worker (
	worker_name VARCHAR(60),
	worker_email VARCHAR(255),
	start_date DATETIME,
	end_date DATETIME,
	capacity INT,
	PRIMARY KEY(worker_name)
);

DESCRIBE worker; -- Descreve os campos da tabela

SELECT * FROM worker;

-- DROP TABLE worker; -- Apaga a tabela


-- Adiciona o campo room a tabela
-- ALTER TABLE worker ADD room DECIMAL();

-- Remove o campo room da tabela
-- ALTER TABLE worker DROP COLUMN room;
