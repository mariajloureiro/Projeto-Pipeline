# 🚀 Projeto Pipeline DevOps

## 📌 Sobre o Projeto

Este projeto foi desenvolvido utilizando como base o repositório disponibilizado pelo professor para a implementação prática de uma pipeline automatizada de CI/CD via **GitHub Actions**.

- **Repositório Original (Professor):** [deivisontakatu/projeto-pipelines-devops](https://github.com/deivisontakatu/projeto-pipelines-devops)

A partir do código base, foram aplicadas configurações e rotinas automatizadas com o objetivo de cobrir todo o ciclo de validação, testes, auditoria de segurança, build e entrega da aplicação em múltiplos ambientes.

---

## 🎯 Objetivo

Aplicar conceitos práticos de **DevOps** e **CI/CD** por meio do GitHub Actions, automatizando o fluxo de desenvolvimento para garantir entregas frequentes, seguras e com menor margem de erros manuais.

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem & Runtime:** JavaScript (Node.js)
- **Gerenciador de Pacotes:** npm
- **Testes & Qualidade de Código:** Jest, ESLint
- **Segurança:** npm audit / Security Scanning
- **Controle de Versão & Automação:** Git, GitHub, GitHub Actions

---
## 📁 Documentação e Pesquisa (`/docs`)

A pasta [`docs/`](./docs) reúne a documentação técnica das entregas e estudos realizados no projeto:

- **Automação e Configuração de Gatilhos:** Detalhamento da integração da pipeline de CI/CD ao projeto via GitHub Actions, configurada para ser executada automaticamente a cada novo `push` na branch principal (`main`).
- **Análise Comparativa de Repositórios:** Pesquisa e estudo analítico de **3 repositórios do GitHub** que utilizam pipelines de CI/CD, destacando e comparando suas características técnicas, funcionalidades, gatilhos de acionamento (`triggers`) e histórico de execuções.
## 🔄 Fluxo da Pipeline (CI/CD)

A pipeline é acionada a cada `push` na branch `main` e executa as seguintes etapas (incluindo verificações em paralelo):

```text
                           [ Setup ]
                               ↓
         ┌─────────────────────┼─────────────────────┐
         ↓                     ↓                     ↓
  [ Code Quality ]     [ Security Audit ]     [ Unit Tests ]
  (npm run lint)     (npm audit --high)    (Jest Matrix OS/Node)
         └─────────────────────┬─────────────────────┘
                               ↓
                           [ Build ]
                               ↓
                      [ Deploy Staging ]
                               ↓
                         [ Smoke Tests ]
                               ↓
                      [ Deploy Production ]
                               ↓
                      [ Pipeline Summary ]
