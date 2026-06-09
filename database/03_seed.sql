INSERT INTO instrutor (nome, email, senha)
VALUES ('Carlos Silva', 'carlos@senai.com', '123456');

INSERT INTO turma (nome_turma, curso, periodo, id_instrutor)
VALUES ('ADS 2026', 'Análise e Desenvolvimento de Sistemas', 'Noturno', 1);

INSERT INTO aluno (nome, email, idade, senha)
VALUES 
('Vinicius Almeida Melo de Oliveira', 'vinicius@email.com', 23, '123456'),
('Miguel Malheiros Capucci', 'miguel@email.com', 24, '123456');

INSERT INTO matricula (id_aluno, id_turma)
VALUES (1, 1), (2, 1);

INSERT INTO atividade (titulo, descricao, data_entrega, id_turma)
VALUES (
    'Projeto Integrador',
    'Desenvolvimento do Sistema de Gestão de Turmas e Alunos',
    '2026-06-30',
    1
);
