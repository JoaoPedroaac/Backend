# Modelagem inicial e arquitetura

## Visão geral
Aplicação Node.js organizada com arquitetura MVC (Model, View, Controller) — nota: não há "Views" tradicionais, pois é uma API.

Pasta principal:
- `src/index.js` - entrypoint e configuração do servidor Express
- `src/routes/` - roteamento
- `src/controllers/` - lógica dos endpoints
- `src/models/` - modelos e armazenamento em memória

## Diagrama de alto nível (texto / ASCII)

Client (front-end) --> HTTP --> Express (/api/entries)
                                  |
                                  +--> Controller (entryController)
                                           |
                                           +--> Model (entryModel - array em memória)

## Casos de uso principais
- UC01: Criar registro
  - Ator: Usuário/Cliente
  - Fluxo: Cliente envia POST /api/entries com payload válido -> API valida -> cria registro em memória -> retorna 201 com dados criados.

- UC02: Listar registros
  - Ator: Usuário/Cliente
  - Fluxo: Cliente envia GET /api/entries -> API retorna lista atual.

## Observações para evolução
- Substituir armazenamento em memória por um banco (ex: SQLite para protótipo, PostgreSQL para produção).
- Adicionar autenticação (JWT) se endpoints precisarem restrição.
- Documentar API com OpenAPI/Swagger.
- Incluir testes automatizados (Supertest/Jest).

## Arquitetura de implantação (simples)
- Containerize o app (Docker) com imagem Node.
- Deploy simples em serviço PaaS (Heroku, Azure App Service) ou container registry + Cloud Run.

