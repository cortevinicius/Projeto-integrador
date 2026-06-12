console.log("🔥 SERVER ATIVO - PORTA 3000");

const express = require('express');
const cors = require('cors');
const path = require('path');
const { Pool } = require('pg');

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// BANCO (CORRETO)
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'sistema_estoque',
  password: 'postgres123',
  port: 5432,
});

// TESTE DE CONEXÃO (CERTO AQUI)
pool.query('SELECT current_database()')
  .then(res => console.log("🔥 BANCO ATUAL:", res.rows))
  .catch(err => console.log("❌ ERRO BANCO:", err));

// CONEXÃO
pool.connect()
  .then(() => console.log('✅ Banco conectado'))
  .catch(err => console.error('❌ Erro ao conectar:', err));

// ROTAS
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// ALUNOS
app.get('/alunos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM aluno');
    res.json(result.rows);
  } catch (error) {
    console.log("🔥 ERRO COMPLETO:", error);
    res.status(500).send(error.message);
  }
});

// LOGIN
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
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro no servidor'
    });
  }
});

// APRENDIZES
app.get('/aprendizes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM aprendiz');
    res.json(result.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post('/aprendizes', async (req, res) => {
  const { nome, idade } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO aprendiz (nome, idade) VALUES ($1, $2) RETURNING *',
      [nome, idade]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).send('Erro ao cadastrar aprendiz');
  }
});

app.delete('/aprendizes/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM aprendiz WHERE id = $1', [id]);
    res.send('Deletado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao deletar');
  }
});

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
    res.status(500).send('Erro ao atualizar');
  }
});

// SERVER
app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});