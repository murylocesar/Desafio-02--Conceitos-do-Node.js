## GoStack 11 - Desafio 02 
<a href="https://app.rocketseat.com.br/me/murylocesar
">Meu perfil na plataforma</a>


<br>

# 🚀 Sobre o desafio

* Essa será uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes"

<br>


## Para esse desafio temos os seguintes testes:

- [X] Aplicação deve permitir que um repositório seja criado, e retorne um json com o projeto criado.

- [X] Aplicação deve permitir que seja retornado um array com todos os repositórios que foram criados até o momento.

- [X] Aplicação deve permitir que sejam alterados apenas os campos url, title e techs.

- [X] Deve validar na sua rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

- [X] Não deve permitir que sua rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuía antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.

- [X] Deve permitir que a sua rota de delete exclua um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status 204.

- [X] Deve validar na sua rota de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400.

- [X] Aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado, retornar um json contendo o repositório com o número de likes atualizado.

- [X] Deve validar na sua rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status 400
<br>


## 🚀 Como executar o projeto

<br>

## Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:  <a href="https://git-scm.com/">Git<a>, <a href="https://nodejs.org/en/">Node.js</a>. Além disto é bom ter um editor para trabalhar com o código como <a href="https://code.visualstudio.com/">VSCode</a>




### No terminal, clone o repositório
```bash
git clone https://github.com/murylocesar/Desafio-02--Conceitos-do-Node.js.git
```

### Entre na pasta do projeto:
``` 
cd Desafio-02--Conceitos-do-Node.js
```
#### Instale as dependecias do backend
```bash

npm install
```
#### Execute a aplicação
```bash

npm dev
```

## Utilitários
- Teste de API: <a href="https://insomnia.rest/">Insomnia</a>