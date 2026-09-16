# Conclusão -- Pesquisa sobre Pipelines no GitHub

## Introdução

Para complementar a atividade de Pipeline, foram pesquisados três
repositórios públicos no GitHub que utilizam GitHub Actions. A ideia foi
observar como outros projetos organizam suas automações, quais tarefas
realizam, quando as pipelines são executadas e como os projetos foram
sendo desenvolvidos.

------------------------------------------------------------------------

## 1. actions/starter-workflows

**Link:** https://github.com/actions/starter-workflows

### O que é o projeto?

Esse repositório pertence à própria organização do GitHub e reúne vários
modelos de workflows prontos para quem quer começar a usar o GitHub
Actions.

Ele possui exemplos para diferentes situações, como testes, integração,
deploy, segurança e outras automações.

### Características

-   Possui vários modelos de pipelines.
-   Os arquivos são feitos em YAML.
-   Existem exemplos para diferentes linguagens e situações.
-   Pode ser usado como ponto de partida para criar uma pipeline
    própria.
-   Possui modelos relacionados a testes, qualidade de código, deploy e
    segurança.

### Funcionalidades

O principal objetivo é facilitar a criação de uma pipeline. Em vez de
começar tudo do zero, o desenvolvedor pode escolher um modelo e
adaptá-lo para seu projeto.

### Gatilhos

Os modelos possuem diferentes gatilhos, dependendo do objetivo. Entre
eles aparecem ações por `push`, `pull_request` e também execução manual.

### Histórico

O repositório possui um histórico grande de alterações e continua
recebendo atualizações. A página do projeto mostra milhares de commits e
vários exemplos sendo atualizados ao longo do tempo.

### O que foi observado

Esse repositório mostrou que uma pipeline não precisa ser criada
totalmente do zero. Existem modelos que podem ajudar no início e depois
podem ser adaptados conforme a necessidade do projeto.

------------------------------------------------------------------------

## 2. actions/javascript-action

**Link:** https://github.com/actions/javascript-action

### O que é o projeto?

Esse projeto também é mantido pela organização do GitHub. Ele funciona
como um modelo para criar uma Action usando JavaScript.

O projeto já possui uma estrutura preparada para testes, verificação do
código, publicação e controle de versões.

### Características

-   Projeto baseado em JavaScript.
-   Possui testes automatizados.
-   Possui verificação de qualidade do código.
-   Possui workflow para integração.
-   Tem orientações para publicação e controle de versões.
-   Pode ser utilizado como modelo para criar uma Action própria.

### Funcionalidades

O projeto mostra desde a preparação do código até os testes e a
publicação de uma Action.

Também existe uma orientação para trabalhar com versões da Action,
permitindo que outras pessoas utilizem uma versão específica do projeto.

### Gatilhos

O projeto apresenta workflows que podem ser executados em situações como
`push` e `pull_request` na branch `main`.

Também existe exemplo de workflow que pode ser executado manualmente.

### Histórico

O projeto é organizado como um modelo de aprendizado e desenvolvimento
de Actions. A documentação mostra etapas como criar o código, adicionar
testes, verificar o funcionamento, enviar alterações para o GitHub e
depois publicar a Action.

### O que foi observado

Esse repositório mostrou uma forma mais completa de organizar uma
Action, principalmente para projetos que precisam testar e manter
versões diferentes do código.

------------------------------------------------------------------------

## 3. devKartikeya/Nodejs-GitHub-Actions-CI-CD-Pipeline

**Link:**
https://github.com/devKartikeya/Nodejs-GitHub-Actions-CI-CD-Pipeline

### O que é o projeto?

Esse é um projeto prático de uma pipeline para uma aplicação Node.js.
Ele utiliza GitHub Actions para automatizar testes e outras etapas
relacionadas à aplicação.

O projeto também utiliza Docker e Docker Hub.

### Características

-   Utiliza Node.js.
-   Possui testes automatizados com Jest.
-   Utiliza GitHub Actions.
-   Cria uma imagem Docker.
-   Utiliza o Docker Hub.
-   Usa informações protegidas do GitHub para fazer a autenticação.
-   A pipeline é executada automaticamente depois de um `push` na branch
    `main`.

### Funcionalidades

Quando uma alteração é enviada para a `main`, a pipeline realiza várias
tarefas automaticamente:

1.  Prepara o ambiente.
2.  Baixa o código do repositório.
3.  Configura o Node.js.
4.  Instala as dependências.
5.  Executa os testes.
6.  Cria a imagem Docker.
7.  Faz a autenticação no Docker Hub.
8.  Publica a imagem.

A publicação só acontece se as etapas anteriores forem concluídas
corretamente.

### Gatilhos

O principal gatilho utilizado é o `push` na branch `main`.

Isso significa que, quando uma nova alteração é enviada para a branch
principal, o processo começa automaticamente.

### Histórico

O repositório apresenta um desenvolvimento feito por etapas. A própria
documentação mostra vários momentos de aprendizado, começando pela
criação do projeto Node.js e chegando até os testes, criação da imagem
Docker e publicação no Docker Hub.

Atualmente, a página do repositório mostra 11 commits no histórico.

### O que foi observado

Esse projeto foi interessante para entender como uma alteração feita no
código pode passar por várias etapas automaticamente, sem que seja
necessário executar tudo manualmente.

------------------------------------------------------------------------

## Comparação dos três projetos

  --------------------------------------------------------------------------------------------
  Repositório                            Principal         Gatilhos          Destaque
                                         objetivo          observados        
  -------------------------------------- ----------------- ----------------- -----------------
  actions/starter-workflows              Oferecer modelos  Push, Pull        Vários modelos
                                         de workflows      Request e outros  prontos

  actions/javascript-action              Criar uma Action  Push, Pull        Testes, qualidade
                                         em JavaScript     Request e manual  e publicação

  Nodejs-GitHub-Actions-CI-CD-Pipeline   Automatizar uma   Push na main      Testes + Docker +
                                         aplicação Node.js                   publicação
  --------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Conclusão

A pesquisa ajudou a entender melhor como as pipelines podem ser
utilizadas na prática. Mesmo os três projetos tendo objetivos
diferentes, todos utilizam o GitHub Actions para automatizar tarefas que
poderiam ser feitas manualmente.

Também foi possível perceber que o gatilho `push` na branch `main` é uma
forma simples de iniciar uma pipeline automaticamente após uma alteração
no projeto. Isso tem relação direta com a alteração realizada no nosso
projeto, que agora inicia a pipeline sempre que um novo código é enviado
para a `main`.

Com a pesquisa, ficou mais fácil entender que uma pipeline pode começar
com tarefas simples, como testes e verificação do código, e depois
crescer para outras etapas, como criação de arquivos, deploy e
publicação de uma aplicação.
