# PRD — Product Requirements Document

# Sistema de Gestão de Turmas e Alunos

---

# 1. Visão Geral do Projeto

O Sistema de Gestão de Turmas e Alunos foi desenvolvido com o objetivo de facilitar o gerenciamento acadêmico dentro de instituições de ensino, permitindo controle de alunos, turmas, atividades e informações administrativas em uma plataforma web.

O projeto foi desenvolvido no contexto do Projeto Integrador Interdisciplinar do SENAI, integrando conhecimentos das disciplinas de Banco de Dados, Desenvolvimento Web Front-end, Engenharia de Software, Linguagem de Programação, Tecnologias da Informação e Metodologia Científica.

---

# 2. Problema

Muitas instituições enfrentam dificuldades no controle manual ou descentralizado de informações acadêmicas, gerando problemas como:

* dificuldade no gerenciamento de alunos;
* falta de organização das turmas;
* perda de informações;
* dificuldade de acesso aos dados;
* comunicação limitada entre usuários;
* processos lentos e pouco eficientes.

---

# 3. Objetivo do Sistema

Desenvolver uma aplicação web capaz de:

* gerenciar alunos;
* organizar turmas;
* controlar atividades;
* permitir autenticação de usuários;
* facilitar o acesso às informações acadêmicas;
* melhorar a organização institucional.

---

# 4. Público-Alvo

O sistema é destinado para:

* instituições de ensino;
* instrutores;
* administradores;
* aprendizes/alunos.

---

# 5. Funcionalidades do Sistema

## 5.1 Login

Permitir autenticação segura de usuários utilizando:

* e-mail;
* senha.

---

## 5.2 Recuperação de Senha

Possibilitar redefinição de senha em caso de esquecimento.

---

## 5.3 Dashboard do Instrutor

O instrutor poderá:

* visualizar alunos;
* gerenciar turmas;
* acompanhar informações do sistema;
* acessar atividades.

---

## 5.4 Painel do Aprendiz

O aprendiz poderá:

* visualizar perfil;
* acompanhar atividades;
* consultar informações das aulas.

---

## 5.5 Gestão de Turmas

Permitir:

* criar turmas;
* editar turmas;
* excluir turmas;
* organizar dados.

---

## 5.6 Gestão de Alunos

Permitir:

* cadastrar alunos;
* editar informações;
* excluir alunos;
* visualizar dados.

---

## 5.7 Atualização de Perfil

Os usuários poderão atualizar:

* nome;
* e-mail;
* senha;
* dados pessoais.

---

# 6. Requisitos Funcionais

| Código | Requisito                                        |
| ------ | ------------------------------------------------ |
| RF01   | O sistema deve permitir login de usuários        |
| RF02   | O sistema deve permitir recuperação de senha     |
| RF03   | O administrador deve gerenciar turmas            |
| RF04   | O administrador deve gerenciar alunos            |
| RF05   | O instrutor deve visualizar turmas               |
| RF06   | O aprendiz deve visualizar atividades            |
| RF07   | O sistema deve permitir edição de perfil         |
| RF08   | O sistema deve armazenar dados em banco de dados |

---

# 7. Requisitos Não Funcionais

| Código | Requisito                                        |
| ------ | ------------------------------------------------ |
| RNF01  | O sistema deve possuir interface responsiva      |
| RNF02  | O sistema deve apresentar boa usabilidade        |
| RNF03  | O sistema deve possuir autenticação segura       |
| RNF04  | O sistema deve manter integridade dos dados      |
| RNF05  | O sistema deve funcionar em navegadores modernos |

---

# 8. Tecnologias Utilizadas

## Front-end

* HTML5
* CSS3
* JavaScript

## Back-end

* Node.js
* Express.js

## Banco de Dados

* MySQL

## Ferramentas

* GitHub
* Draw.io
* Figma
* VS Code

---

# 9. Banco de Dados

O sistema utilizará banco de dados relacional para armazenamento das informações.

Principais entidades:

* usuários;
* alunos;
* turmas;
* atividades;
* matrículas.

---

# 10. Arquitetura do Sistema

O sistema seguirá arquitetura baseada em:

Frontend → Backend → Banco de Dados

Fluxo:

1. Usuário acessa interface;
2. Frontend envia requisições ao backend;
3. Backend processa informações;
4. Banco de dados armazena os dados;
5. Sistema retorna resposta ao usuário.

---

# 11. Segurança

O sistema contará com:

* autenticação de usuários;
* validação de dados;
* proteção de rotas;
* utilização de HTTPS;
* controle de acesso.

---

# 12. Responsividade

A aplicação será adaptada para:

* computadores;
* tablets;
* dispositivos móveis.

---

# 13. Organização do Projeto

```txt
📦 projeto-integrador
 ┣ 📂 frontend
 ┣ 📂 backend
 ┣ 📂 database
 ┣ 📂 docs
 ┣ 📂 uml
 ┣ 📂 fluxogramas
 ┣ 📂 banner
 ┗ README.md
```

---

# 14. Objetivos Acadêmicos

O projeto busca desenvolver:

* trabalho em equipe;
* organização de projetos;
* desenvolvimento web;
* modelagem de banco de dados;
* documentação técnica;
* resolução de problemas reais.

---

# 15. Considerações Finais

O Sistema de Gestão de Turmas e Alunos busca oferecer uma solução prática, organizada e eficiente para gerenciamento acadêmico, integrando conceitos técnicos estudados ao longo do semestre e promovendo experiência prática no desenvolvimento de software.

