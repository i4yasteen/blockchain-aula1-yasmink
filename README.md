# Blockchain de Registro de Entregas


## Sobre o projeto

Este projeto foi desenvolvido como atividade prática da aula de programação, com o objetivo de implementar uma estrutura simples de Blockchain para registrar entregas.
O sistema utiliza hashes para identificar os blocos, encadeamento para conectar os registros e validação para detectar possíveis adulterações nos dados.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Módulo nativo `crypto`
- Algoritmo SHA-256
- Git e GitHub


## Estrutura do projeto

```text
blockchain-aula1-seunome/
│
├── bloco.js
├── blockchain.js
├── principal.js
└── README.md
```


### Descrição dos arquivos

- **bloco.js:** contém a classe `Bloco`, responsável por armazenar os dados e calcular o hash de cada bloco.
- **blockchain.js:** contém a classe `Blockchain`, responsável por criar o bloco gênese, adicionar novas entregas e validar a cadeia.
- **principal.js:** executa o programa, cadastra entregas, imprime os registros e realiza testes de adulteração.


## Funcionalidades

- Criação automática do bloco gênese.
- Cadastro de entregas na cadeia.
- Geração de hashes utilizando SHA-256.
- Encadeamento dos blocos pelo hash anterior.
- Validação da integridade da cadeia.
- Verificação de dados inválidos.
- Detecção de alterações nos registros antigos.


## Regras de validação

Os dados de cada entrega devem:

- Ser obrigatoriamente um texto.
- Ter no mínimo 3 caracteres.
- Ter no máximo 80 caracteres.

Caso os dados não atendam aos requisitos, o sistema lança uma mensagem de erro em português.


## Como executar o projeto

### 1. Instalar o Node.js

Instale o Node.js pelo site oficial:

https://nodejs.org/

### 2. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/blockchain-aula1-seunome.git
```

### 3. Entrar na pasta

```bash
cd blockchain-aula1-seunome
```

### 4. Executar o programa

```bash
node principal.js
```

Não é necessário instalar dependências externas, pois o projeto utiliza o módulo nativo `crypto` do Node.js.


## Conceitos de Blockchain aplicados

**1. Hash**

Cada bloco possui um hash calculado com SHA-256, utilizando seu índice, seus dados e o hash anterior.

**2. Encadeamento**

Cada novo bloco armazena o hash do bloco anterior, formando uma sequência conectada.

**3. Validação**

O método `ehValida()` percorre a cadeia e verifica se os hashes continuam corretos e se os blocos estão devidamente conectados.


## Testes realizados

O programa realiza três testes principais:

1. Cadastro de pelo menos três entregas.
2. Tentativa de cadastrar dados inválidos, utilizando `try/catch`.
3. Alteração dos dados de um bloco antigo para demonstrar que a cadeia deixa de ser válida.


## Resultado esperado

Inicialmente, a cadeia deve apresentar o resultado:

```text
A cadeia é válida? true
```

Após a adulteração de um bloco antigo:

```text
A cadeia continua válida? false
```
