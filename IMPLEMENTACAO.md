# Implementação do Backend MVC

## ✅ O que foi implementado

Este backend foi desenvolvido seguindo a **arquitetura MVC (Model-View-Controller)** com **Node.js** e **Express.js**.

### Estrutura criada:

```
Backend/
├── src/
│   ├── controllers/
│   │   └── PersonController.js    # Controller com lógica de negócio
│   ├── models/
│   │   └── Person.js               # Model para estrutura de dados
│   └── routes/
│       └── personRoutes.js         # Rotas/Endpoints da API
├── server.js                       # Servidor principal
├── package.json                    # Dependências e scripts
└── README.md                       # Documentação completa
```

## 📋 Campos implementados

O backend gerencia informações de pessoas com os seguintes campos:
- **nome** (string)
- **idade** (number)
- **peso** (number)

## 🚀 Endpoints disponíveis

### 1. GET /pessoas
**Descrição:** Retorna todas as pessoas cadastradas
**Exemplo de resposta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "nome": "João Pedro",
      "idade": 25,
      "peso": 75.5
    }
  ],
  "count": 1
}
```

### 2. POST /pessoas
**Descrição:** Cria uma nova pessoa (PUSH de dados)
**Corpo da requisição:**
```json
{
  "nome": "João Pedro",
  "idade": 25,
  "peso": 75.5
}
```
**Resposta:**
```json
{
  "success": true,
  "message": "Pessoa criada com sucesso",
  "data": {
    "id": 1,
    "nome": "João Pedro",
    "idade": 25,
    "peso": 75.5
  }
}
```

### 3. GET /pessoas/:id
**Descrição:** Retorna uma pessoa específica por ID

## 🔧 Como usar

### Instalar dependências:
```bash
npm install
```

### Iniciar o servidor:
```bash
npm start
```

O servidor roda em: `http://localhost:3000`

### Testar com curl:

**Criar uma pessoa (POST/PUSH):**
```bash
curl -X POST http://localhost:3000/pessoas \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Pedro","idade":25,"peso":75.5}'
```

**Listar todas as pessoas (GET):**
```bash
curl http://localhost:3000/pessoas
```

**Buscar pessoa por ID (GET):**
```bash
curl http://localhost:3000/pessoas/1
```

## ✨ Funcionalidades implementadas

✅ Arquitetura MVC completa
✅ Model para Person (nome, idade, peso)
✅ Controller com métodos GET e POST
✅ Routes configuradas
✅ Servidor Express.js funcional
✅ Validação de dados
✅ Armazenamento em memória
✅ Respostas JSON padronizadas
✅ Tratamento de erros
✅ Documentação completa

## 📝 Observações

- Os dados são armazenados em memória (array), então são perdidos quando o servidor reinicia
- Para persistência de dados, seria necessário integrar um banco de dados (MongoDB, PostgreSQL, etc.)
- A API está pronta para ser testada com ferramentas como Postman, Insomnia ou curl
