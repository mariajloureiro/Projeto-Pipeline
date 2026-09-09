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

## 🔄 Fluxo da Pipeline (CI/CD)

A pipeline automatizada no GitHub Actions executa as seguintes etapas sequenciais:

```text
       [ Setup ]
           ↓
    [ Code Quality ]
           ↓
   [ Security Audit ]
           ↓
     [ Unit Tests ]
           ↓
        [ Build ]
           ↓
  [ Deploy Development ]
           ↓
    [ Deploy Staging ]
           ↓
     [ Smoke Tests ]
           ↓
   [ Deploy Production ]
           ↓
   [ Pipeline Summary ]
