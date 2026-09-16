## 1. Objetivo da alteração

A atividade solicitou que a pipeline do projeto fosse executada
automaticamente sempre que fosse realizado um novo `push` na branch
principal, chamada `main`.

Para atender a esse requisito, foi alterada a parte responsável pelo
gatilho da pipeline no arquivo:

`.github/workflows/pipeline.yml`

------------------------------------------------------------------------

## 2. Como estava anteriormente

Antes da alteração, a pipeline possuía vários gatilhos, incluindo `push`
para mais de uma branch, tags e eventos de Pull Request.

A configuração era parecida com:

``` yaml
on:
  push:
    branches: [ "main", "develop" ]
    tags: [ 'v*.*.*' ]
  pull_request:
    branches: [ "main", "develop" ]
```

Dessa forma, a pipeline poderia ser iniciada em diferentes situações.

------------------------------------------------------------------------

## 3. Alteração realizada

Para atender diretamente ao que foi solicitado na atividade, o bloco
`on:` foi simplificado para:

``` yaml
on:
  push:
    branches:
      - main
```

Essa configuração informa ao GitHub que o workflow deve ser iniciado
quando houver um novo `push` na branch `main`.

------------------------------------------------------------------------

## 4. O que isso significa na prática

Depois da alteração, quando uma alteração é enviada para a `main`, por
exemplo:

``` bash
git add .
git commit -m "Alterações no projeto"
git push origin main
```

o GitHub Actions identifica o novo `push` e inicia automaticamente a
pipeline.

Não é necessário entrar no GitHub e iniciar o processo manualmente.

------------------------------------------------------------------------

## 5. Etapas que continuam na pipeline

A alteração foi feita apenas no gatilho. As etapas da pipeline foram
mantidas.

Entre elas estão:

-   Configuração das dependências;
-   Verificação da qualidade do código;
-   Análise de segurança;
-   Testes automatizados;
-   Testes em diferentes versões do Node.js e sistemas;
-   Build da aplicação;
-   Deploy de Staging;
-   Testes após o deploy;
-   Deploy em Produção;
-   Resumo da execução da pipeline.

Portanto, a alteração não removeu as etapas que já existiam. Ela apenas
definiu em qual situação a pipeline deve começar.

------------------------------------------------------------------------

## 6. Teste realizado

Depois de realizar a alteração, foi feito um novo `push` para a branch
`main`.

No GitHub, a execução apareceu na área **Actions** como uma execução
iniciada por `push`, com a branch **main**.

Isso confirmou que o gatilho configurado estava funcionando.

Durante a execução, as etapas de testes, build, Staging, testes após o
deploy e Produção foram concluídas com sucesso.

------------------------------------------------------------------------

## 7. Observação sobre o Deploy Development

O projeto possui também uma etapa chamada **Deploy Development**.

Essa etapa foi marcada como **Skipped** nessa execução porque está
configurada para funcionar somente quando a branch for `develop`.

A condição existente é:

``` yaml
if: github.ref == 'refs/heads/develop'
```

Como a execução atual aconteceu na `main`, essa etapa foi ignorada.

Isso não significa que a pipeline apresentou um erro. As outras etapas
relacionadas à execução da `main` continuaram normalmente.

------------------------------------------------------------------------

## 8. Resultado

A alteração realizada atendeu ao requisito da atividade.

Agora, sempre que um novo código for enviado para a branch `main`, o
GitHub Actions inicia automaticamente o workflow configurado.

A execução foi testada no próprio GitHub e o resultado confirmou o
funcionamento do novo gatilho.
