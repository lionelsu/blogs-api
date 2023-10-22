<!-- Este é um comentário: omitir os tópidos redundantes -->
<!--  **| [Brazil](README.md) | [asdf](README_en.md) |** -->
<!-- [![Build Status](https://travis-ci.org/lionelsu/smith-store-api.svg?branch=master)](https://travis-ci.org/lionelsu/smith-store-api)
[![Coverage Status](https://coveralls.io/repos/github/lionelsu/smith-store-api/badge.svg?branch=master)](https://coveralls.io/github/lionelsu/smith-store-api?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) -->

# Blogs API

[Documentação da API no Postman](https://documenter.getpostman.com/view/30159355/2s9YRCVqxk)

Blogs API é uma solução completa para gerenciar uma plataforma de blogs que organiza postagens por categoria. Esta API oferece operações relacionadas a um CRUD de postagens, autenticação de usuário e categorização de postagens. Desenvolvida com foco na qualidade a API segue uma arquitetura em camadas consistente com Model, Service e Controller (MSC), e o esquema do banco de dados segue o Diagrama de Entidade-Relacionamento (DER).

## Ferramentas Utilizadas

- **Tecnologias Principais:**
  - Node.js
  - Express.js
  - MySQL Server
  - Sequelize ORM

- **Testes:**
  - Mocha
  - Chai
  - Sinon

- **Documentação:**
  - Postman

## Pré-Requisitos

Node versão igual ou superio a 16.14.0 LTS:

- [Node.js](https://nodejs.org/en/)

Docker e Docker Compose:

- [Docker & Docker Compose](https://docs.docker.com/compose/)

<!-- ## Features -->
## Instalação

<details>

<summary>Com Docker</summary>

1. Clonar o Repositório

    Primeiro, copie ou clone este repositório para o seu sistema local usando o Git:

    ```bash
    git clone git@github.com:lionelsu/blogs-api.git && cd blogs-api
    ```

2. Iniciar o Contêiner Docker

    Utilize o Docker Compose para iniciar o contêiner do Blogs API:

    ```bash
    docker compose up -d
    ```

3. Popular o Banco de Dados

    Utilize o Docker para popular o banco de dados:

    ```bash
    docker exec blogs-api npm run prestart
    ```

    Popule o banco de dados com as seeds:

    ```bash
    docker exec blogs-api npm run seed
    ```

4. Iniciar o Servidor

    Inicie o servidor para executar a API:

    ```bash
    docker exec blogs-api npm run dev
    ```

</details>

<details>

<summary>Localmente com NodeJs</summary>

1. Clonar o Repositório

    Primeiro, copie ou clone este repositório para o seu sistema local usando o Git:

    ```bash
    git clone git@github.com:lionelsu/blogs-api.git && cd blogs-api
    ```

2. Instalar as Dependências

    Em seguida, instale as dependências do projeto usando o `npm`:

    ```bash
    npm install
    ```

3. Popular o Banco de Dados

    ```bash
    npm run prestart && npm run seed
    ```

4. Iniciar o Servidor

    Inicie o servidor para executar a API:

    ```bash
    npm run dev
    ```

</details>

## Uso

Para interagir com o Blogs, você pode usar os seguintes comandos:

Visualização de Logs:

Linha de Comando Interativa, usada para **[testar](#testes)** a aplicação

```bash
docker exec -it blogs_api bash
```

Resetar o Banco de Dados (deve ser executado dentro da **[linha de comando interativa](#uso)**)

```bash
npm run db:reset
```

## Rotas da API

**Login:**

- **`POST /login`**: Realiza o login do usuário e retorna um token de autenticação.

**Posts:**

- **`GET /post`**: Lista todos os posts.
- **`GET /post/:id`**: Lista um post específico.
- **`GET /search?q=term`**: Lista todos os posts que contém o termo de busca.
- **`POST /post`**: Cria um novo post.
- **`PUT /post/:id`**: Atualiza um post específico.
- **`DELETE /post/:id`**: Deleta um post específico.

**Categories:**

**User:**

## Habilidades desenvolvidas

Desenvolvi minha aplicação usando `Node.js` com `Express.js` como base. Isso me permitiu criar facilmente endpoints `HTTP` para atender às necessidades do sistema.

Escolhi usar o banco de dados `MySQL Server` para armazenar os posts, usuários e categoria de posts. Para interagir com o banco de dados, utilizei o `Sequelize ORM` para criar modelos e consultas.

Para garantir a qualidade do código, realizei testes rigorosos com `Mocha`, `Chai` e `Sinon`. Esses testes verificaram minuciosamente os endpoints, serviços e funções para garantir que tudo funcione corretamente.

Também criei uma Documentação no `Postman` para facilitar os testes e interações com a `API`.

Com essas etapas concluídas, estou confiante na entrega de uma `API` sólida e funcional, pronta para atender às necessidades dos usuários.
