# TaskListWeb - Sistema de Gerenciamento de Tarefas

![TaskListWeb](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![.NET Core](https://img.shields.io/badge/.NET%20Core-7.0-purple)
![React](https://img.shields.io/badge/React-18.0-blue)

## 📋 Sobre o Projeto

TaskListWeb é uma aplicação web que permite aos usuários gerenciar suas tarefas diárias de forma eficiente. A aplicação oferece uma interface intuitiva para criar, editar, visualizar e excluir tarefas.

![](images/Figura-01.png?raw=true)

## 🚀 Tecnologias Utilizadas

### Backend
- **.NET Core Framework**: Utilizado para construir a API RESTful
- **Entity Framework Core**: ORM para manipulação do banco de dados
- **ASP.NET Core Web API**: Framework para criação de APIs
- **SQL Server**: Banco de dados relacional

### Frontend
- **React**: Biblioteca JavaScript para construção da interface de usuário
- **Axios**: Cliente HTTP para realizar requisições à API
- **React Router**: Gerenciamento de rotas no lado do cliente
- **React Hooks**: Gerenciamento de estado e ciclo de vida dos componentes

## 🌟 Funcionalidades

- **Cadastro de Tarefas**: Permite ao usuário adicionar novas tarefas ao sistema
- **Edição de Tarefas**: Possibilita a atualização das informações das tarefas existentes
- **Exclusão de Tarefas**: Permite remover tarefas que não são mais necessárias
- **Listagem de Tarefas**: Exibe todas as tarefas cadastradas pelo usuário
- **Filtragem de Tarefas**: Pesquisa tarefas por título, data ou status

## 🔧 Instalação e Configuração

### Pré-requisitos
- [.NET Core SDK](https://dotnet.microsoft.com/download) (versão 7.0 ou superior)
- [Node.js](https://nodejs.org/) (versão 14.0 ou superior)
- [SQL Server](https://www.microsoft.com/sql-server/)
- [Visual Studio](https://visualstudio.microsoft.com/) ou [VS Code](https://code.visualstudio.com/)

### Configuração do Backend

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/TaskListWeb.git
   ```

2. Navegue até a pasta do projeto da API:
   ```bash
   cd TaskListWeb/API
   ```

3. Restaure os pacotes NuGet:
   ```bash
   dotnet restore
   ```

4. Configure a string de conexão no arquivo `appsettings.json`.

5. Execute as migrações do Entity Framework:
   ```bash
   dotnet ef database update
   ```

6. Inicie a API:
   ```bash
   dotnet run
   ```

### Configuração do Frontend

1. Navegue até a pasta do projeto React:
   ```bash
   cd TaskListWeb/ClientApp
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a aplicação React:
   ```bash
   npm start
   ```

## 🏗️ Estrutura do Projeto

```
TaskListWeb/
├── api/
│   ├── Controllers/
│   ├── Models/
│   ├── Properties/
│   └── Program.cs
├── client-app/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   └── App.js
│   └── package.json
└── README.md
```

## 📚 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET    | /api/tasks | Retorna todas as tarefas |
| GET    | /api/tasks/{id} | Retorna uma tarefa específica |
| POST   | /api/tasks | Cria uma nova tarefa |
| PUT    | /api/tasks/{id} | Atualiza uma tarefa existente |
| DELETE | /api/tasks/{id} | Remove uma tarefa |

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Junior Moreira Martins** - [GitHub](https://github.com/jrmoreiram)

---

Desenvolvido com ❤️ e ☕