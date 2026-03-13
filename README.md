<h1 align="center">🎮 <br>Projeto Games Store — Backend API (NestJS)</h1>

<p align="center">
  <strong>API RESTful</strong> desenvolvida com <strong>NestJS</strong> para gerenciamento de uma Loja de Games,
  com foco em <strong>boas práticas de backend</strong>, <strong>relacionamento entre entidades</strong>,
  <strong>validações</strong> e <strong>arquitetura escalável</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-Backend-red" />
  <img src="https://img.shields.io/badge/TypeORM-ORM-blue" />
  <img src="https://img.shields.io/badge/MySQL-Database-orange" />
  <img src="https://img.shields.io/badge/Status-Concluído-success" />
</p>

---

## Visão Geral

Este projeto representa o desenvolvimento de uma **API RESTful para uma Loja de Games**, permitindo o gerenciamento de **Categorias** e **Produtos**, com relacionamento entre as entidades e validações de regras de negócio.

📚 Desenvolvido durante o **bootcamp da Generation Brasil**, com o objetivo de consolidar conhecimentos em:

- **• NestJS**
- **• TypeORM**
- **• Banco de Dados Relacional**
- **• Arquitetura de APIs REST**

---

## Conceitos Aplicados

- ✔ Arquitetura em camadas (**Controller, Service, Entity**)
- ✔ Relacionamento **OneToMany / ManyToOne**
- ✔ Validações no **create** e **update**
- ✔ Busca parcial com **LIKE**
- ✔ Tratamento de exceções HTTP
- ✔ Boas práticas de organização de código

---

## Stack Tecnológica

<div align="center">
  
| Tecnologia | Descrição |
|-----------|----------|
| **TypeScript** | Linguagem principal |
| **Node.js** | Ambiente de execução |
| **NestJS** | Framework backend |
| **TypeORM** | ORM |
| **MySQL** | Banco de dados relacional |
| **Insomnia** | Testes da API |
| **Git / GitHub** | Versionamento |

---
</div>

## Arquitetura do Projeto

O projeto segue a arquitetura padrão do **NestJS**, separando responsabilidades em camadas do sistema:

- **Entity** → Representação das tabelas do banco
- **Service** → Regras de negócio e acesso ao banco
- **Controller** → Definição das rotas e requisições HTTP

---

## Diagrama de Classes (UML) / DER

O diagrama abaixo representa o **modelo de dados da aplicação**, evidenciando as entidades
**Categoria** e **Produto**, além do relacionamento entre elas.

<div align="center">
  <img src="./docs/diagrama-classes-der-loja-games.png.png" alt="Diagrama de Classes / DER" />
</div>

### Relacionamento entre Entidades

- **Categoria** → OneToMany → **Produto**
- **Produto** → ManyToOne → **Categoria**
- Relação **bidirecional**

📌 Este diagrama também representa o **Diagrama de Entidade e Relacionamento (DER)** do sistema.

---

## Funcionalidades

<div align="center">

| 📁 Categoria | 📦 Produto |
|:------------:|:----------:|
| **POST** `/categorias` <br> Criar categoria | **POST** `/produtos` <br> Criar produto |
| **GET** `/categorias` <br> Listar categorias | **GET** `/produtos` <br> Listar produtos |
| **GET** `/categorias/{id}` <br> Buscar por ID | **GET** `/produtos/{id}` <br> Buscar por ID |
| **GET** `/categorias/tipo/{tipo}` <br> Buscar por tipo (LIKE) | **GET** `/produtos/nome/{nome}` <br> Buscar por nome (LIKE) |
| **PUT** `/categorias` <br> Atualizar categoria | **PUT** `/produtos` <br> Atualizar produto |
| **DELETE** `/categorias/{id}` <br> Remover categoria | **DELETE** `/produtos/{id}` <br> Remover produto |

---
</div>

## Validações & Regras de Negócio

- ✔ Validação de campos obrigatórios
- ✔ Evita duplicidade no **create** e **update**
- ✔ Verificação de existência antes de atualização
- ✔ Tratamento de erros com **exceções HTTP adequadas**

---

## Testes

Os testes foram realizados com o **Insomnia**, validando:

- • CRUD completo
- • Relacionamentos entre entidades
- • Validações
- • Respostas HTTP

---

## Como Executar o Projeto

```bash
# Clonar o repositório
git clone https://github.com/alissasousadev/game-store-backend.git

# Instalar dependências
npm install

# Configurar o banco de dados

# Executar a aplicação
npm run start:dev

```

###

<div align="center">
  <p>
    <em>
      Projeto desenvolvido com fins educacionais, no contexto da formação oferecida pela <strong>Generation Brasil</strong>.
    </em>
  </p>
</div>
