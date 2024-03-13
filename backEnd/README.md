# Instruções de Configuração da API

## 1. Clone o Repositório

Use o comando abaixo para copiar o repositório para sua máquina local:

```bash
git clone <URL_do_repositório>

```
## 2. Acesse o Repositório
Navegue até o diretório do repositório usando o comando:

```bash
cd nome_do_repositorio

```

## 3. Crie um Banco de Dados PostgreSQL
Execute o seguinte comando SQL para criar um banco de dados chamado "contact_list":

```
CREATE DATABASE contact_list;
```

## 4. Instale Dependências
Instale as dependências necessárias do projeto com o comando:

```
npm install
```

## 5. Configure as Variáveis de Ambiente

Crie um arquivo .env e preencha as variáveis de ambiente conforme o modelo fornecido em .env.example.

## 6. Execute as Migrações do TypeORM

Aplique as migrações e crie as tabelas no banco de dados com o comando:

```
npm run typeorm migration:run -- -d src/data-source
```

## 7. Inicie a API

Inicie a API com o comando:

```
npm run dev
```
A API estará disponível em http://localhost:3000.


## 8. Use a API
Com a API em execução, você pode começar a utilizá-la livremente, provavelmente enviando requisições HTTP para os endpoints especificados na documentação da API.

```
Essas instruções fornecem uma visão passo a passo clara e organizada para que os usuários possam configurar e utilizar a API facilmente.
```

# Endpoints

## 1.1 - Criação de Usuário

#### Método: POST
#### Endpoint: /users
#### Descrição: Cria um novo usuário.


#### Exemplo:

```
http://localhost:3000/users
```

#### Request

``` 
{
	"fullname": "Super Mário Bros",
	"email": "mariokart@mail.com",
	"password": "Mario123456",
	"phone": "12345678"
}
```

#### Response
```
{
	"id": "1",
	"fullname": "Super Mário Bros",
	"email": "mariokart@mail.com",
	"phone": "12345678",
	"date": "2023-12-04"
}
```

## 1.2 - Listagem de Usuários

#### Método: GET
#### Endpoint: /users
#### Descrição: Lista todos os usuários cadastrados.


#### Exemplo:

```
http://localhost:3000/users
```

#### Response
```
[
	{
		"id": "1",
		"fullname": "Super Mário Bros",
		"email": "supermario@mail.com",
		"phone": "12345678",
		"date": "2023-12-01"
	},
	{
		"id": "2",
		"fullname": "Final Fantasy X",
		"email": "finalfantasy@mail.com",
		"phone": "87654321",
		"date": "2023-12-01"
	},
	{
		"id": "3",
		"fullname": "mariokart03",
		"email": "mariokart@mail.com",
		"phone": "123456789",
		"date": "2023-12-04"
	}
]
```

## 1.3 - Detalhes do Usuário

#### Método: GET
#### Endpoint: /users/:id
#### Descrição: Recupera os detalhes de um usuário específico.


#### Exemplo:

```
http://localhost:3000/users/1
```

#### Response

```
	{
		"id": "1",
		"fullname": "Super Mário Bros",
		"email": "supermario@mail.com",
		"phone": "12345678",
		"date": "2023-12-01"
	}
```

## 1.4 - Atualização de Usuário

#### Método: PATCH
#### Endpoint: /users/:id
#### Descrição: Atualiza os dados de um usuário existente.


#### Exemplo:

```
http://localhost:3000/users/1
```

#### Request

```
{
	"fullname": "Super Mário Bros 2",
	"email": "supermario2@mail.com",
	"password": "Supermario123456",
	"phone": "12345678"
}
```

### Response

```
{
	"id": "1",
	"fullname": "Super Mário Bros 2",
	"email": "supermario2@mail.com",
	"password": "Supermario123456",
	"phone": "12345678",
	"date": "2023-12-04"
}
```

## 1.5 - Remoção de Usuário

#### Método: DELETE
#### Endpoint: /users/:id
#### Descrição: Remove um usuário existente.


#### Exemplo:

```
http://localhost:3000/users/1
```

#### Response 
```
User not found
```

## 2.1 - Autenticação de Usuário

#### Método: POST
#### Endpoint: /login
#### Descrição: Realiza a autenticação do usuário.


#### Exemplo:

```
http://localhost:3000/login
```

#### Request

```
{
	"email": "mariokart@mail.com",
	"password": "Mariokart123456"
}
```

#### Response 

```
{
	"token": {
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlN1cGVyIE3DoXJpbyBCcm9zIiwiaWF0IjoxNzAxNzA3Mjg5LCJleHAiOjE3MDE3MTA4ODksInN1YiI6ImE0OTlhNjE4LWJkOGEtNDY5MC1iZGQzLTExNWZkZjkzNWEyMSJ9.BeEsk91S9SP5V6-ZX3duKT1uDAhLbFtLbqw9GM8QzGk",
		"user": {
			"id": "2",
			"email": "mariokart@mail.com",
			"name": "Super Mário Bros",
			"phone": "12345678"
		}
	}
}
```

## 3.1 - Criação de Contato

#### Método: POST
#### Endpoint: /contacts
#### Descrição: Cria um novo contato para o usuário autenticado.


#### Exemplo:

```
http://localhost:3000/contacts
```

#### Request
```
{
	"fullname": "Mortal Kombat",
	"email": "mortalkombat@mail.com",
	"phone": "12345678"
}
```

#### Response
```
{
	"id": "4",
	"fullname": "Mortal Kombat",
	"email": "mortalkombat@mail.com",
	"phone": "12345678",
	"date": "2023-12-04"
}
```

## 3.2 - Listagem de Contatos

#### Método: GET
#### Endpoint: /contacts
#### Descrição: Lista todos os contatos do usuário autenticado.


#### Exemplo:

```
http://localhost:3000/contacts
```

#### Response

```
[
	{
		"id": "4",
		"fullname": "Mortal Kombat",
		"email": "mortalkombat@mail.com",
		"phone": "12345678",
		"date": "2023-12-04"
	},
	{
		"id": "5",
		"fullname": "Crash Bash",
		"email": "crashbash@mail.com",
		"phone": "12345678",
		"date": "2023-12-04"
	}
]
```

## 3.3 - Detalhes do Contato

#### Método: GET
#### Endpoint: /contacts/:id
#### Descrição: Recupera os detalhes de um contato específico do usuário autenticado.


#### Exemplo:

```
http://localhost:3000/contacts/4
```

#### Response

```
	{
		"id": "4",
		"fullname": "Mortal Kombat",
		"email": "mortalkombat@mail.com",
		"phone": "12345678",
		"date": "2023-12-04"
	}
```

## 3.4 - Atualização de Contato

#### Método: PATCH
#### Endpoint: /contacts/:id
#### Descrição: Atualiza os dados de um contato específico do usuário autenticado.


#### Exemplo:

```
http://localhost:3000/contacts/4
```

#### Request 

```
{
	"fullname": "Super Bomberman",
	"email": "superbomberman@mail.com",
	"phone": "123456789"
}
```

#### Response

```
{
	"id": "4",
	"fullname": "Super Bomberman",
	"email": "superbomberman@mail.com",
	"phone": "123456789",
	"date": "2023-12-01"
}
```

## 3.5 - Remoção de Contato

#### Método: DELETE
#### Endpoint: /contacts/:id
#### Descrição: Remove um contato específico do usuário autenticado.


#### Exemplo:

```
http://localhost:3000/contacts/4
```

#### Response

```
Contact not found
```
