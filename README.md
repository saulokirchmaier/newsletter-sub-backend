# Newsletter Subscription Backend

## Descrição

Projeto de API de inscrição em uma newsletter realizado como teste prático para a [UNLKD](https://unlkd.co)

## Sobre o projeto

### Descrição de desenvolvimento

- API RESTful para receber os dados de um formulário e salvar em um banco de dados relacional.
- API com validações de dados recebidos antes de salvar.

### Tecnologias

Para este projeto foram utilizadas as seguintes tecnologias:

- [NodeJS](https://nodejs.org/pt).
- [NestJS](https://github.com/nestjs/nest).
- [Docker](https://www.docker.com).
- [PostgreSQL](https://www.postgresql.org).
- [Swagger](https://swagger.io).
## Utilização

### Requisitos

Antes de rodar o projeto tenha certeza de estar com as seguintes tecnologias instaladas no seu PC:

- [NodeJS](https://nodejs.org/pt) na versão 20 ou superior.
- [NestJS](https://docs.nestjs.com/first-steps) de forma global.
- [Docker Engine](https://docs.docker.com/engine/install/) no Linux ou [Docker Desktop](https://www.docker.com/products/docker-desktop/) no Windows ou Mac.

### Instalando

#### Baixando

- Faça um clone em seu computador, no terminal digite:
  1. HTTPS:
  ```bash
    $ git clone https://github.com/saulokirchmaier/newsletter-sub-backend.git
  ```
  2. SSH:
  ```bash
    $ git clone git@github.com:saulokirchmaier/newsletter-sub-backend.git
  ```

### Rodando

- Tenha certeza de estar com docker engine rodando em sua máquina, ou com o docker desktop iniciado.
- Entre na pasta do projeto:
  ```bash
    cd newsletter-sub
  ```
- adicione as variáveis de ambiente em um arquivo `.env` na raiz do projeto seguindo o exemplo:
  ```
  PORT=3001
  DATABASE_HOST=db
  DATABASE_PORT=5432
  DATABASE_USER=usuario
  DATABASE_PASSWORD=senha
  DATABASE_NAME=newsletter_sub
  CONSTAINER_DB_NAME=postgres_db
  ```

- Rode o comando:
  ```bash
    docker compose up
  ```
- Espere a instalação das imagens dos containers serem concluídas e o sistema ser iniciado, até aparecer no terminal:
  ```bash
    Server is running on PORT 3001
  ```
- Com o sistema iniciado abra a documentação da API no google chrome http://localhost:3001/api para pode utilizar.
- Ou rode a aplicação web. A aplicação web você encontra [aqui](https://github.com/saulokirchmaier/newsletter-sub-web).

### Testes

Para os testes foi utilizado o [Jest](https://jestjs.io/pt-BR/).

- Rodando os testes:
  ```bash
    npm run test
  ```

## Agradecimento

Obrigado por ter chegado até aqui. 

Um grande abraço.