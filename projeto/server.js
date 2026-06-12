const cors = require('cors');
const express = require('express');
const { Pool } = require('pg');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const pool = new Pool({
user: 'postgres',
password: 'postgres123',
host: 'localhost',
database: 'sistema_estoque',
port: 5433,
});

pool.connect()
.then(() => console.log('✅ Banco conectado'))
.catch(err => console.error('❌ Erro ao conectar:', err));

// ROTA INICIAL
app.get('/', (req, res) => {
res.sendFile(__dirname + '/public/index.html');
});

// =========================
// TESTE COM TABELA ALUNO
// =========================

app.get('/alunos', async (req, res) => {
try {
const result = await pool.query('SELECT * FROM aluno');
res.json(result.rows);
} catch (error) {
console.error(error);
res.status(500).send('Erro ao buscar alunos');
}
});

// =========================
// LOGIN
// =========================

app.post('/login', async (req, res) => {
const { email, senha } = req.body;


try {
    const result = await pool.query(
        'SELECT * FROM aluno WHERE email = $1 AND senha = $2',
        [email, senha]
    );

    if (result.rows.length > 0) {
        res.json({
            sucesso: true,
            usuario: result.rows[0]
        });
    } else {
        res.status(401).json({
            sucesso: false,
            mensagem: 'Email ou senha inválidos'
        });
    }

} catch (error) {
    console.error(error);
    res.status(500).json({
        sucesso: false,
        mensagem: 'Erro no servidor'
    });
}


});

// =========================
// ROTAS APRENDIZ (AULAS)
// =========================

// GET
app.get('/aprendizes', async (req, res) => {
try {
const result = await pool.query('SELECT * FROM aprendiz');
res.json(result.rows);
} catch (error) {
console.error(error);
res.status(500).send('Erro ao buscar dados');
}
});

// POST
app.post('/aprendizes', async (req, res) => {
const { nome, idade } = req.body;


try {
    const result = await pool.query(
        'INSERT INTO aprendiz (nome, idade) VALUES ($1, $2) RETURNING *',
        [nome, idade]
    );

    res.status(201).json(result.rows[0]);
} catch (error) {
    console.error(error);
    res.status(500).send('Erro ao cadastrar aprendiz');
}


});

// DELETE
app.delete('/aprendizes/:id', async (req, res) => {
const { id } = req.params;


try {
    await pool.query(
        'DELETE FROM aprendiz WHERE id = $1',
        [id]
    );

    res.send('Deletado com sucesso');
} catch (error) {
    console.error(error);
    res.status(500).send('Erro ao deletar');
}


});

// PUT
app.put('/aprendizes/:id', async (req, res) => {
const { id } = req.params;
const { nome, idade } = req.body;


try {
    const result = await pool.query(
        'UPDATE aprendiz SET nome = $1, idade = $2 WHERE id = $3 RETURNING *',
        [nome, idade, id]
    );

    res.json(result.rows[0]);
} catch (error) {
    console.error(error);
    res.status(500).send('Erro ao atualizar');
}


});

// SERVIDOR
app.listen(3000, () => {
console.log('🚀 Servidor rodando na porta 3000');
});
