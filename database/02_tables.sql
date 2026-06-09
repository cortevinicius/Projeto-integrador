-- TABELA INSTRUTOR
CREATE TABLE instrutor (
    id_instrutor SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- TABELA TURMA
CREATE TABLE turma (
    id_turma SERIAL PRIMARY KEY,
    nome_turma VARCHAR(100) NOT NULL,
    curso VARCHAR(100) NOT NULL,
    periodo VARCHAR(30),
    id_instrutor INTEGER NOT NULL,
    CONSTRAINT fk_turma_instrutor
        FOREIGN KEY (id_instrutor)
        REFERENCES instrutor(id_instrutor)
        ON DELETE RESTRICT
);

-- TABELA ALUNO
CREATE TABLE aluno (
    id_aluno SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    idade INTEGER,
    senha VARCHAR(255) NOT NULL
);

-- TABELA MATRICULA
CREATE TABLE matricula (
    id_matricula SERIAL PRIMARY KEY,
    id_aluno INTEGER NOT NULL,
    id_turma INTEGER NOT NULL,
    data_matricula DATE DEFAULT CURRENT_DATE,
    CONSTRAINT fk_matricula_aluno
        FOREIGN KEY (id_aluno)
        REFERENCES aluno(id_aluno)
        ON DELETE CASCADE,
    CONSTRAINT fk_matricula_turma
        FOREIGN KEY (id_turma)
        REFERENCES turma(id_turma)
        ON DELETE CASCADE
);

-- TABELA ATIVIDADE
CREATE TABLE atividade (
    id_atividade SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    descricao TEXT,
    data_entrega DATE,
    id_turma INTEGER NOT NULL,
    CONSTRAINT fk_atividade_turma
        FOREIGN KEY (id_turma)
        REFERENCES turma(id_turma)
        ON DELETE CASCADE
);
