# Backend
Backend to PI 6º Semester

## Arquitetura MVC (Model-View-Controller)

Este é um backend básico desenvolvido com Node.js e Express.js seguindo a arquitetura MVC.

## Estrutura do Projeto

```
Backend/
├── src/
│   ├── controllers/    # Controladores (lógica de negócio)
│   │   └── PersonController.js
│   ├── models/        # Modelos (estrutura de dados)
│   │   └── Person.js
│   └── routes/        # Rotas (endpoints)
│       └── personRoutes.js
├── server.js          # Arquivo principal do servidor
└── package.json       # Dependências do projeto
```

## Instalação

```bash
npm install
```

## Executar o Servidor

```bash
npm start
```

O servidor irá rodar em `http://localhost:3000`

## Endpoints da API

### GET /pessoas
Retorna todas as pessoas cadastradas.

**Resposta de exemplo:**
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

### POST /pessoas
Cria uma nova pessoa.

**Body da requisição:**
```json
{
  "nome": "João Pedro",
  "idade": 25,
  "peso": 75.5
}
```

**Resposta de exemplo:**
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

### GET /pessoas/:id
Retorna uma pessoa específica por ID.

**Resposta de exemplo:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "nome": "João Pedro",
    "idade": 25,
    "peso": 75.5
  }
}
```

## Testando a API

### Usando curl:

```bash
# Criar uma pessoa
curl -X POST http://localhost:3000/pessoas \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Pedro","idade":25,"peso":75.5}'

# Listar todas as pessoas
curl http://localhost:3000/pessoas

# Obter uma pessoa por ID
curl http://localhost:3000/pessoas/1
```

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript
- **Express.js**: Framework web para Node.js
- **MVC Pattern**: Padrão de arquitetura Model-View-Controller
