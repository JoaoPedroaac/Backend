const express = require('express');
const personRoutes = require('./src/routes/personRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'Backend MVC - API de Pessoas',
    endpoints: {
      'GET /pessoas': 'Obter todas as pessoas',
      'POST /pessoas': 'Criar uma nova pessoa (campos: nome, idade, peso)',
      'GET /pessoas/:id': 'Obter uma pessoa por ID'
    }
  });
});

// Rotas de pessoas
app.use('/pessoas', personRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});

module.exports = app;
