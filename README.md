# Pokédex API

Uma API construída com NestJS que fornece informações sobre Pokémon consumindo a PokéAPI e armazenando dados no PostgreSQL.

## Funcionalidades

- Lista de todos os Pokémon com paginação
- Informações detalhadas de Pokémon por ID ou nome
- Sistema de cache para melhor performance
- Documentação da API com Swagger
- Suporte para nomes em japonês
- Cálculo de poder total
- Integração com PostgreSQL para persistência de dados

## Stack Tecnológica

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Swagger/OpenAPI
- Cache Manager
- Axios HTTP Client

## Pré-requisitos

- Node.js
- PostgreSQL
- npm

## Configuração do Ambiente

1. Crie um arquivo `.env` na pasta raiz com:

```env
DB_USER=postgres
DB_PASS=sua_senha
DB_NAME=pokedex
```

## Instalação

```bash
$ npm install
```

## Executando a aplicação

```bash
# modo desenvolvimento
$ npm run start

# modo watch
$ npm run start:dev

# modo produção
$ npm run start:prod
```

## Documentação da API

Com a aplicação em execução, acesse:

- http://localhost:3000/api - Documentação Swagger

## Endpoints da API

### GET /pokemon

Obtém uma lista de Pokémon com suporte à paginação.

Parâmetros de consulta:

- `limit` (opcional) - Número de Pokémon a retornar
- `offset` (opcional) - Número de Pokémon a pular

### GET /pokemon/:identifier

Obtém informações detalhadas sobre um Pokémon específico.

Parâmetros:

- `identifier` - Nome ou ID do Pokémon

## Estrutura do Projeto

```
src/
├── pokemon/
│   ├── dto/
│   ├── entities/
│   ├── interfaces/
│   ├── pokemon.controller.ts
│   ├── pokemon.service.ts
│   └── pokemon.module.ts
├── app.module.ts
├── http.module.ts
└── main.ts
```
