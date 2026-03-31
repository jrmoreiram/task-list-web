# 📝 TaskListWeb - Sistema de Gerenciamento de Tarefas

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![.NET Core](https://img.shields.io/badge/.NET%20Core-2.0-purple?logo=dotnet)
![React](https://img.shields.io/badge/React-16.6-blue?logo=react)
![Entity Framework](https://img.shields.io/badge/EF%20Core-2.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📋 Sumário Executivo

**TaskListWeb** é uma aplicação full-stack moderna para **gerenciamento de tarefas** (To-Do List) construída com arquitetura cliente-servidor desacoplada. O backend utiliza **ASP.NET Core Web API 2.0** com **Entity Framework Core** e banco de dados **InMemory**, enquanto o frontend é desenvolvido em **React 16.6** com componentes reutilizáveis. A aplicação oferece funcionalidades completas de CRUD (Create, Read, Update, Delete) com comunicação via requisições HTTP RESTful.

### 🎯 Propósito

Sistema de produtividade para organizar, acompanhar e gerenciar tarefas diárias com interface responsiva e API RESTful escalável.

---

## 🏗️ Arquitetura da Aplicação

### Arquitetura Full-Stack (Cliente-Servidor)

```
┌────────────────────────────────────────────────────────────┐
│                    CLIENTE (Browser)                       │
│                                                            │
│  ┌──────────────────────────────────────────────────┐      │
│  │              REACT APPLICATION                   │      │
│  │                (Port 3000)                       │      │
│  │                                                  │      │
│  │  ┌─────────────────────────────────────────┐     │      │
│  │  │        Components Layer                 │     │      │
│  │  │  • TaskForm.js (Componente Principal)   │     │      │
│  │  │  • App.js (Container Principal)         │     │      │
│  │  └─────────────────────────────────────────┘     │      │
│  │                     ↓                            │      │
│  │  ┌─────────────────────────────────────────┐     │      │
│  │  │        HTTP Client Layer                │     │      │
│  │  │  • Fetch API (Requisições HTTP)         │     │      │
│  │  │  • Axios (Cliente HTTP)                 │     │      │
│  │  └─────────────────────────────────────────┘     │      │
│  └──────────────────────────────────────────────────┘      │
└───────────────────────┬────────────────────────────────────┘
                        │
                        │ HTTP/JSON
                        │ (CORS Habilitado)
                        │
                        ▼
┌───────────────────────────────────────────────────────────┐
│                  SERVIDOR (Backend)                       │
│                                                           │
│  ┌──────────────────────────────────────────────────┐     │
│  │          ASP.NET CORE WEB API 2.0                │     │
│  │              (Port 54814)                        │     │
│  │                                                  │     │
│  │  ┌─────────────────────────────────────────┐     │     │
│  │  │        Controller Layer                 │     │     │
│  │  │  • TaskListController.cs                │     │     │
│  │  │    (Endpoints REST)                     │     │     │
│  │  └───────────────┬─────────────────────────┘     │     │
│  │                  ▼                               │     │
│  │  ┌─────────────────────────────────────────┐     │     │
│  │  │          Model Layer                    │     │     │
│  │  │  • Tasks.cs (Entidade)                  │     │     │
│  │  │  • TaskContext.cs (DbContext)           │     │     │
│  │  └───────────────┬─────────────────────────┘     │     │
│  │                  ▼                               │     │
│  │  ┌─────────────────────────────────────────┐     │     │
│  │  │     Entity Framework Core ORM            │    │     │
│  │  │  • Migrations                            │    │     │
│  │  │  • Change Tracking                       │    │     │
│  │  │  • LINQ Queries                          │    │     │
│  │  └───────────────┬─────────────────────────┘     │     │
│  └──────────────────┼───────────────────────────────┘     │
│                     ▼                                     │
│  ┌──────────────────────────────────────────────────┐     │
│  │          InMemory Database                       │     │
│  │  • Banco de dados em memória                     │     │
│  │  • Ideal para desenvolvimento e testes           │     │
│  │  • Dados não persistem após reiniciar            │     │
│  └──────────────────────────────────────────────────┘     │
└───────────────────────────────────────────────────────────┘
```

### Comunicação Cliente-Servidor

```
REACT APP                    ASP.NET CORE API
(Frontend)                   (Backend)
    │                            │
    │──── GET /api/TaskList ────→│
    │                            │ Consulta todas as tarefas
    │                            │ no InMemory DB
    │←─── JSON (Array Tasks) ────│
    │                            │
    │                            │
    │─ POST /api/TaskList ──────→│
    │  Body: { Task Data }       │ Valida e salva nova tarefa
    │                            │ no InMemory DB
    │←─── 201 Created ───────────│
    │                            │
    │                            │
    │─ PUT /api/TaskList/{id} ──→│
    │  Body: { Updated Data }    │ Atualiza tarefa existente
    │                            │
    │←─── 204 No Content ────────│
    │                            │
    │                            │
    │─ DELETE /api/TaskList/{id}→│
    │                            │ Remove tarefa do DB
    │←─── 204 No Content ────────│
```

---

## 💻 Stack Tecnológica Completa

### Backend (.NET Core)

| Tecnologia | Versão | Função |
|------------|--------|--------|
| **ASP.NET Core** | 2.0 | Framework web para construção de APIs |
| **Entity Framework Core** | 2.0 | ORM para acesso e manipulação de dados |
| **ASP.NET Core MVC** | 2.1.3 | Padrão MVC para organização do código |
| **ASP.NET Core CORS** | 2.1.1 | Habilitação de requisições cross-origin |
| **.NET Core SDK** | 2.0 | Plataforma de desenvolvimento |
| **InMemory Database** | 2.0.8 | Banco de dados em memória para testes |

### Frontend (React)

| Tecnologia | Versão | Função |
|------------|--------|--------|
| **React** | 16.6.0 | Biblioteca JavaScript para UI |
| **React DOM** | 16.6.0 | Renderização de componentes React |
| **React Scripts** | 2.1.1 | Scripts de build e desenvolvimento |
| **Axios** | ≥0.21.2 | Cliente HTTP para requisições à API |
| **React Bootstrap Table** | 4.3.1 | Componente de tabela avançada |
| **CORS** | 2.8.5 | Configuração de CORS (dev) |

### Ferramentas de Desenvolvimento

| Ferramenta | Versão | Função |
|------------|--------|--------|
| **Visual Studio / VS Code** | Latest | IDE para desenvolvimento |
| **Node.js** | 14.0+ | Runtime JavaScript para React |
| **NPM / Yarn** | Latest | Gerenciador de pacotes |
| **.NET CLI** | 2.0+ | Interface de linha de comando .NET |
| **Git** | Latest | Controle de versão |

### Requisitos de Sistema

**Backend:**
- .NET Core SDK 2.0 ou superior
- Windows 10+, macOS 10.12+, ou Linux
- RAM: Mínimo 2 GB
- Porta 54814 disponível

**Frontend:**
- Node.js 14.0 ou superior
- NPM 6.0 ou superior
- RAM: Mínimo 1 GB
- Porta 3000 disponível

---

## 📂 Estrutura Detalhada do Projeto

```
task-list-web-master/
│
├── TaskListWebAPI.sln                    # Solução Visual Studio
│   └── Agrupa projetos .NET da solução
│
├── api/                                  # ⚙️ BACKEND (ASP.NET Core Web API)
│   ├── Controllers/                      # Camada de Apresentação (REST)
│   │   ├── TaskListController.cs        # Controller principal (CRUD endpoints)
│   │   └── ValuesController.cs          # Controller de exemplo
│   │
│   ├── Models/                           # Camada de Domínio (Entidades)
│   │   ├── Tasks.cs                     # Modelo de dados de tarefa
│   │   └── TaskContext.cs               # Contexto do Entity Framework
│   │
│   ├── Properties/                       # Configurações do projeto
│   │   └── launchSettings.json          # Configurações de execução
│   │
│   ├── Program.cs                        # Ponto de entrada da aplicação
│   ├── Startup.cs                        # Configuração de serviços e middleware
│   ├── TaskListWebAPI.csproj            # Arquivo de projeto .NET
│   ├── appsettings.json                 # Configurações da aplicação
│   ├── appsettings.Development.json     # Configurações de desenvolvimento
│   └── .gitignore                       # Arquivos ignorados pelo Git
│
├── client-app/                           # 🎨 FRONTEND (React Application)
│   ├── public/                           # Arquivos públicos estáticos
│   │   ├── index.html                   # HTML principal
│   │   ├── favicon.ico                  # Ícone do site
│   │   └── manifest.json                # Manifesto PWA
│   │
│   ├── src/                              # Código-fonte React
│   │   ├── components/                  # Componentes React
│   │   │   └── TaskForm.js              # Componente de formulário e tabela
│   │   │
│   │   ├── App.js                       # Componente raiz da aplicação
│   │   ├── App.css                      # Estilos do App
│   │   ├── App.test.js                  # Testes do App
│   │   ├── index.js                     # Ponto de entrada React
│   │   ├── index.css                    # Estilos globais
│   │   ├── logo.svg                     # Logo React
│   │   └── serviceWorker.js             # Service Worker (PWA)
│   │
│   ├── package.json                     # Dependências e scripts NPM
│   ├── package-lock.json                # Lock de versões de dependências
│   └── README.md                        # Documentação específica do frontend
│
├── images/                               # 📸 Imagens de documentação
│   └── Figura-01.png                    # Screenshot da aplicação
│
└── README.md                             # 📖 Documentação principal do projeto
```

---

## 🎯 Funcionalidades Implementadas

### CRUD Completo de Tarefas

| Funcionalidade | Descrição | Status | Endpoint |
|----------------|-----------|--------|----------|
| **Criar Tarefa** | Adicionar nova tarefa ao sistema | ✅ Implementado | POST /api/TaskList |
| **Listar Tarefas** | Visualizar todas as tarefas cadastradas | ✅ Implementado | GET /api/TaskList |
| **Buscar Tarefa** | Obter detalhes de uma tarefa específica | ✅ Implementado | GET /api/TaskList/{id} |
| **Atualizar Tarefa** | Editar título e status de tarefa existente | ✅ Implementado | PUT /api/TaskList/{id} |
| **Deletar Tarefa** | Remover tarefa do sistema | ✅ Implementado | DELETE /api/TaskList/{id} |

### Interface de Usuário (React)

| Componente | Descrição | Status |
|------------|-----------|--------|
| **Formulário de Tarefa** | Inputs para título e descrição | ✅ Implementado |
| **Botões de Ação** | Adicionar, Editar, Excluir | ✅ Implementado |
| **Tabela de Tarefas** | Exibição com react-bootstrap-table | ✅ Implementado |
| **Ordenação de Colunas** | Ordenar por qualquer coluna | ✅ Implementado |
| **Efeito Hover** | Destaque visual ao passar mouse | ✅ Implementado |
| **Design Responsivo** | Adaptação para mobile/tablet | ✅ Implementado |

### Features Adicionais

- ✅ **CORS habilitado** - Comunicação entre domínios diferentes
- ✅ **Banco InMemory** - Desenvolvimento rápido sem configuração de DB
- ✅ **Tarefa inicial automática** - Sistema cria tarefa padrão se DB vazio
- ✅ **Data formatada UTC** - Timestamps em formato ISO 8601
- ✅ **Status de tarefa** - Boolean para marcar como concluída/pendente

---

## 🗄️ Modelo de Dados

### Entidade: Tasks

A entidade `Tasks` representa uma tarefa no sistema:

| Campo | Tipo | Descrição | Obrigatório |
|-------|------|-----------|-------------|
| `Id` | long | Identificador único (Primary Key) | ✅ Auto-gerado |
| `Title` | string | Título/nome da tarefa | ✅ Sim |
| `Description` | string | Descrição detalhada da tarefa | ❌ Não |
| `Status` | bool | Estado da tarefa (true=concluída, false=pendente) | ✅ Sim |
| `CreationDate` | string | Data/hora de criação (formato UTC) | ❌ Não |
| `ExclusionDate` | string | Data/hora de exclusão | ❌ Não |
| `AlterDate` | string | Data/hora da última alteração (formato UTC) | ❌ Não |

### Diagrama da Entidade

```
┌─────────────────────────────────┐
│           Tasks                 │
├─────────────────────────────────┤
│ PK  Id: long                    │
│     Title: string               │
│     Description: string         │
│     Status: bool                │
│     CreationDate: string        │
│     ExclusionDate: string       │
│     AlterDate: string           │
├─────────────────────────────────┤
│ + getId()                       │
│ + setId()                       │
│ + getTitle()                    │
│ + setTitle()                    │
│ + getStatus()                   │
│ + setStatus()                   │
└─────────────────────────────────┘
```

### Exemplo de Objeto JSON

```json
{
  "id": 1,
  "title": "Implementar nova feature",
  "description": "Adicionar funcionalidade de filtros na listagem",
  "status": false,
  "creationDate": "2026-03-28T18:30:00.000Z",
  "exclusionDate": null,
  "alterDate": "2026-03-28T20:15:00.000Z"
}
```

---

## 🔌 Documentação da API REST

### Base URL

```
http://localhost:54814/api/TaskList
```

### Endpoints Disponíveis

---

#### 1️⃣ Listar Todas as Tarefas

**Obter lista completa de todas as tarefas cadastradas.**

```http
GET /api/TaskList
```

**Request:**
```bash
curl -X GET "http://localhost:54814/api/TaskList" \
     -H "Accept: application/json"
```

**Response:** (Status: 200 OK)
```json
[
  {
    "id": 1,
    "title": "Tarefa 1",
    "description": "Tarefa teste 1",
    "status": true,
    "creationDate": "2026-03-28T18:30:49.477Z",
    "exclusionDate": null,
    "alterDate": null
  },
  {
    "id": 2,
    "title": "Tarefa 2",
    "description": "Tarefa teste 2",
    "status": false,
    "creationDate": "2026-03-28T19:15:00.000Z",
    "exclusionDate": null,
    "alterDate": "2026-03-28T20:00:00.000Z"
  }
]
```

---

#### 2️⃣ Buscar Tarefa por ID

**Recuperar informações de uma tarefa específica.**

```http
GET /api/TaskList/{id}
```

**Parâmetros:**
- `id` (long, required) - ID da tarefa a ser buscada

**Request:**
```bash
curl -X GET "http://localhost:54814/api/TaskList/1" \
     -H "Accept: application/json"
```

**Response:** (Status: 200 OK)
```json
{
  "id": 1,
  "title": "Tarefa 1",
  "description": "Tarefa teste 1",
  "status": true,
  "creationDate": "2026-03-28T18:30:49.477Z",
  "exclusionDate": null,
  "alterDate": null
}
```

**Possíveis Respostas:**
- `200 OK` - Tarefa encontrada
- `404 NOT FOUND` - Tarefa não existe

---

#### 3️⃣ Criar Nova Tarefa

**Adicionar uma nova tarefa ao sistema.**

```http
POST /api/TaskList
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Implementar autenticação",
  "description": "Adicionar JWT authentication na API",
  "status": false,
  "creationDate": "2026-03-28T21:00:00.000Z",
  "alterDate": "2026-03-28T21:00:00.000Z"
}
```

**Request:**
```bash
curl -X POST "http://localhost:54814/api/TaskList" \
     -H "Content-Type: application/json" \
     -H "Accept: application/json" \
     -d '{
       "title": "Nova Tarefa",
       "description": "Descrição da tarefa",
       "status": false
     }'
```

**Response:** (Status: 201 Created)
```json
{
  "id": 3,
  "title": "Implementar autenticação",
  "description": "Adicionar JWT authentication na API",
  "status": false,
  "creationDate": "2026-03-28T21:00:00.000Z",
  "exclusionDate": null,
  "alterDate": "2026-03-28T21:00:00.000Z"
}
```

**Headers da Resposta:**
```
Location: http://localhost:54814/api/TaskList/3
```

---

#### 4️⃣ Atualizar Tarefa Existente

**Modificar título e status de uma tarefa.**

```http
PUT /api/TaskList/{id}
Content-Type: application/json
```

**Parâmetros:**
- `id` (long, required) - ID da tarefa a ser atualizada

**Request Body:**
```json
{
  "title": "Tarefa Atualizada",
  "status": true
}
```

**Request:**
```bash
curl -X PUT "http://localhost:54814/api/TaskList/1" \
     -H "Content-Type: application/json" \
     -d '{
       "title": "Tarefa Concluída",
       "status": true
     }'
```

**Response:** (Status: 204 No Content)

⚠️ **Nota:** Apenas `Title` e `Status` são atualizados. Outros campos são ignorados.

**Possíveis Respostas:**
- `204 NO CONTENT` - Atualização bem-sucedida
- `404 NOT FOUND` - Tarefa não existe

---

#### 5️⃣ Deletar Tarefa

**Remover uma tarefa do sistema.**

```http
DELETE /api/TaskList/{id}
```

**Parâmetros:**
- `id` (long, required) - ID da tarefa a ser deletada

**Request:**
```bash
curl -X DELETE "http://localhost:54814/api/TaskList/1"
```

**Response:** (Status: 204 No Content)

**Possíveis Respostas:**
- `204 NO CONTENT` - Exclusão bem-sucedida
- `404 NOT FOUND` - Tarefa não existe

---

## 🚀 Guia de Instalação e Execução

### Pré-requisitos

**Verificar instalações:**

```bash
# Verificar .NET Core SDK
dotnet --version
# Esperado: 2.0.0 ou superior

# Verificar Node.js
node --version
# Esperado: 14.0.0 ou superior

# Verificar NPM
npm --version
# Esperado: 6.0.0 ou superior

# Verificar Git
git --version
```

---

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/jrmoreiram/task-list-web.git
cd task-list-web-master
```

---

### Passo 2: Configurar e Executar o Backend (API)

**Navegar até a pasta da API:**

```bash
cd api
```

**Restaurar pacotes NuGet:**

```bash
dotnet restore
```

**Compilar o projeto:**

```bash
dotnet build
```

**Executar a API:**

```bash
dotnet run
```

**Verificar se a API está rodando:**

```bash
# Em outro terminal
curl http://localhost:54814/api/TaskList
```

**Saída esperada:**

```
Hosting environment: Development
Content root path: .../task-list-web-master/api
Now listening on: http://localhost:54814
Application started. Press Ctrl+C to shut down.
```

---

### Passo 3: Configurar e Executar o Frontend (React)

**Navegar até a pasta do cliente:**

```bash
cd ../client-app
```

**Instalar dependências:**

```bash
npm install
```

**Iniciar aplicação React:**

```bash
npm start
```

**Resultado:**

O navegador abrirá automaticamente em `http://localhost:3000`

---

### Passo 4: Verificar Funcionamento

**Checklist:**

- [ ] API rodando em http://localhost:54814
- [ ] Frontend rodando em http://localhost:3000
- [ ] Console da API sem erros
- [ ] Console do navegador (F12) sem erros
- [ ] Tabela exibindo tarefas de exemplo
- [ ] Botões funcionando

---

## 🔧 Configurações Avançadas

### Backend (appsettings.json)

```json
{
  "Logging": {
    "IncludeScopes": false,
    "Debug": {
      "LogLevel": {
        "Default": "Warning"
      }
    },
    "Console": {
      "LogLevel": {
        "Default": "Warning"
      }
    }
  }
}
```

**Configurações adicionais sugeridas:**

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=TaskListDB;Trusted_Connection=True;"
  },
  "Kestrel": {
    "EndPoints": {
      "Http": {
        "Url": "http://localhost:54814"
      }
    }
  }
}
```

---

### CORS Configuration (Startup.cs)

**Configuração atual:**

```csharp
services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader();
}));
```

**⚠️ Atenção:** Esta configuração permite **qualquer origem**, adequado apenas para desenvolvimento!

**Configuração recomendada para produção:**

```csharp
services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
{
    builder.WithOrigins("https://meudominio.com", "https://www.meudominio.com")
           .AllowAnyMethod()
           .AllowAnyHeader()
           .AllowCredentials();
}));
```

---

### InMemory Database (Startup.cs)

**Configuração atual:**

```csharp
services.AddDbContext<TaskContext>(opt =>
    opt.UseInMemoryDatabase("TaskList"));
```

**Vantagens:**
- ✅ Sem necessidade de SQL Server instalado
- ✅ Setup instantâneo
- ✅ Ideal para desenvolvimento e testes
- ✅ Sem migrations necessárias

**Desvantagens:**
- ❌ Dados perdidos ao reiniciar aplicação
- ❌ Não adequado para produção
- ❌ Sem suporte a relacionamentos complexos

**Migrar para SQL Server:**

```csharp
services.AddDbContext<TaskContext>(opt =>
    opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
```

**Instalar pacote:**
```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

---

### Configuração do Frontend (package.json)

**Scripts disponíveis:**

```json
{
  "scripts": {
    "start": "react-scripts start",        // Inicia dev server
    "build": "react-scripts build",        // Build de produção
    "test": "react-scripts test",          // Executa testes
    "eject": "react-scripts eject"         // Ejeta configurações
  }
}
```

**Variáveis de ambiente (.env):**

Criar arquivo `.env` na raiz de `client-app`:

```env
REACT_APP_API_URL=http://localhost:54814
REACT_APP_API_ENDPOINT=/api/TaskList
PORT=3000
```

**Usar no código:**

```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:54814';
```

---

## 💡 Componentes Principais

### Backend (ASP.NET Core)

#### 1. Program.cs

**Ponto de entrada da aplicação.**

```csharp
public class Program
{
    public static void Main(string[] args)
    {
        BuildWebHost(args).Run();
    }

    public static IWebHost BuildWebHost(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>()
            .Build();
}
```

**Responsabilidades:**
- Inicializa o host web
- Configura servidor Kestrel
- Carrega configurações
- Inicia a aplicação

---

#### 2. Startup.cs

**Configuração de serviços e pipeline HTTP.**

```csharp
public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // Habilita CORS
        services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        }));

        // Configura DbContext com InMemory Database
        services.AddDbContext<TaskContext>(opt =>
            opt.UseInMemoryDatabase("TaskList"));
            
        // Adiciona MVC e configura compatibilidade
        services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
    }

    public void Configure(IApplicationBuilder app)
    {
        // Pipeline de middleware
        app.UseCors("MyPolicy");
        app.UseMvc();
    }
}
```

**Serviços configurados:**
- ✅ CORS Policy
- ✅ Entity Framework Core
- ✅ ASP.NET Core MVC
- ✅ InMemory Database

---

#### 3. Tasks.cs (Model)

**Modelo de domínio representando uma tarefa.**

```csharp
public class Tasks
{
    public long Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public bool Status { get; set; }
    public string CreationDate { get; set; }
    public string ExclusionDate { get; set; }
    public string AlterDate { get; set; }
}
```

**Propriedades:**
- `Id`: Chave primária (auto-incremento)
- `Title`: Título da tarefa
- `Description`: Descrição detalhada
- `Status`: true=concluída, false=pendente
- `CreationDate`: Timestamp de criação
- `ExclusionDate`: Timestamp de exclusão (soft delete)
- `AlterDate`: Timestamp da última modificação

---

#### 4. TaskContext.cs (DbContext)

**Contexto do Entity Framework para acesso ao banco.**

```csharp
public class TaskContext : DbContext
{
    public TaskContext(DbContextOptions<TaskContext> options)
        : base(options)
    {
    }

    public DbSet<Tasks> Tasks { get; set; }
}
```

**Função:**
- Gerencia conexão com banco de dados
- Mapeia entidade `Tasks` para tabela
- Rastreia mudanças de estado
- Gerencia transações

---

#### 5. TaskListController.cs

**Controller REST com todos os endpoints CRUD.**

```csharp
[Route("api/[controller]")]
[EnableCors("MyPolicy")]
[ApiController]
public class TaskListController : ControllerBase
{
    private readonly TaskContext _context;

    public TaskListController(TaskContext context)
    {
        _context = context;

        // Seed data: Cria tarefa inicial se DB vazio
        if (_context.Tasks.Count() == 0)
        {
            _context.Tasks.Add(new Tasks
            {
                Title = "Tarefa 1",
                Description = "Tarefa teste 1",
                Status = true,
                CreationDate = DateTime.Now.ToUniversalTime()
                     .ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'Z'")
            });
            _context.SaveChanges();
        }
    }

    [HttpGet]
    public ActionResult<List<Tasks>> GetAll()
    {
        return _context.Tasks.ToList();
    }

    [HttpGet("{id}", Name = "GetTasks")]
    public ActionResult<Tasks> GetById(long id)
    {
        var task = _context.Tasks.Find(id);
        if (task == null)
        {
            return NotFound();
        }
        return task;
    }

    [HttpPost]
    public IActionResult Create(Tasks task)
    {
        _context.Tasks.Add(task);
        _context.SaveChanges();

        return CreatedAtRoute("GetTasks", new { id = task.Id }, task);
    }

    [HttpPut("{id}")]
    public IActionResult Update(long id, Tasks task)
    {
        var tasks = _context.Tasks.Find(id);
        if (tasks == null)
        {
            return NotFound();
        }

        tasks.Status = task.Status;
        tasks.Title = task.Title;

        _context.Tasks.Update(tasks);
        _context.SaveChanges();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(long id)
    {
        var task = _context.Tasks.Find(id);
        if (task == null)
        {
            return NotFound();
        }

        _context.Tasks.Remove(task);
        _context.SaveChanges();
        return NoContent();
    }
}
```

**Anotações utilizadas:**
- `[Route]` - Define rota base do controller
- `[EnableCors]` - Habilita CORS no controller
- `[ApiController]` - Habilita features de API
- `[HttpGet]` - Mapeia requisições GET
- `[HttpPost]` - Mapeia requisições POST
- `[HttpPut]` - Mapeia requisições PUT
- `[HttpDelete]` - Mapeia requisições DELETE

---

### Frontend (React)

#### 1. index.js

**Ponto de entrada da aplicação React.**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
```

---

#### 2. App.js

**Componente raiz que renderiza TaskForm.**

```javascript
import React, { Component } from 'react'
import './App.css';
import TaskForm from './components/TaskForm';

class App extends Component {
  render() {
    return (
      <div className='form__container'>
        <TaskForm></TaskForm>
      </div>
    )
  }
}
export default App
```

---

#### 3. TaskForm.js

**Componente principal com formulário e tabela.**

**Estrutura do Componente:**

```javascript
class App extends Component {
    constructor() {
        super()
        this.state = {
            inputTaskTitleValue: '',
            inputTaskDescValue: ''
        };
    }

    // Adicionar tarefa via POST
    handleAddButton() {
        fetch('http://localhost:54814/api/TaskList', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Title: this.state.inputTaskTitleValue,
                Description: this.state.inputTaskDescValue,
                Status: false,
                AlterDate: new Date().toISOString()
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    // Atualizar tarefa via PUT
    handleEditButton() { /* ... */ }

    // Deletar tarefa via DELETE
    handleDeleteButton() { /* ... */ }

    // Atualizar state dos inputs
    updateInputTaskTitleValue(evt) {
        this.setState({
            inputTaskTitleValue: evt.target.value
        });
    }

    render() {
        var products = [
            {
                id: 1,
                task: "Tarefa 1",
                description: "Teste Tarefa 1.",
                datCreate: "07/11/2018 16:10",
                datAlter: "",
                datConclusion: ""
            }
        ];

        return (
            <div>
                <form>
                    <h2>TaskListWeb - Lista de Tarefas</h2>
                    <input type="text" 
                           value={this.state.inputTaskTitleValue} 
                           onChange={evt => this.updateInputTaskTitleValue(evt)} />
                    {/* Mais campos... */}
                </form>

                <div className='button__container'>
                    <button onClick={this.handleAddButton}>Adicionar</button>
                    <button onClick={this.handleEditButton}>Editar</button>
                    <button onClick={this.handleDeleteButton}>Excluir</button>
                </div>

                <BootstrapTable data={products} striped hover>
                    <TableHeaderColumn dataField="id" isKey>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="task">Tarefa</TableHeaderColumn>
                    {/* Mais colunas... */}
                </BootstrapTable>
            </div>
        )
    }
}
```

**State management:**
- `inputTaskTitleValue` - Valor do campo Título
- `inputTaskDescValue` - Valor do campo Descrição

**Métodos principais:**
- `handleAddButton()` - POST para criar tarefa
- `handleEditButton()` - PUT para atualizar tarefa
- `handleDeleteButton()` - DELETE para remover tarefa
- `updateInputTaskTitleValue()` - Atualiza state do título
- `updateInputTaskDescValue()` - Atualiza state da descrição

---

## 📊 Fluxo de Dados Completo

### Fluxo de Criação de Tarefa

```
┌─────────────────────────────────────────────────────┐
│ 1. Usuário preenche formulário React                │
│    - Título: "Comprar materiais"                    │
│    - Descrição: "Comprar papel e canetas"           │
└───────────────────┬─────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│ 2. Usuário clica em "Adicionar Tarefa"              │
└───────────────────┬─────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│ 3. TaskForm.handleAddButton() executado             │
│    - Monta objeto JSON com dados                    │
│    - State: inputTaskTitleValue e inputTaskDescValue│
└───────────────────┬─────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│ 4. Fetch API envia POST request                     │
│    POST http://localhost:54814/api/TaskList         │
│    Body: { Title, Description, Status, AlterDate }  │
└───────────────────┬─────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│ 5. ASP.NET Core recebe requisição                   │
│    - CORS middleware valida origem                  │
│    - MVC routing direciona para TaskListController  │
└───────────────────┬─────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│ 6. TaskListController.Create() executado            │
│    - Deserializa JSON para objeto Tasks             │
│    - Adiciona tarefa ao DbContext                   │
└───────────────────┬─────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│ 7. Entity Framework Core persiste dados             │
│    - _context.Tasks.Add(task)                       │
│    - _context.SaveChanges()                         │
│    - Tarefa salva no InMemory Database              │
└───────────────────┬─────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│ 8. Controller retorna resposta HTTP                 │
│    - Status: 201 Created                            │
│    - Header Location: /api/TaskList/{id}            │
│    - Body: Objeto tarefa criado com ID              │
└───────────────────┬─────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│ 9. React recebe resposta                            │
│    - .then(response => response.json())             │
│    - .then(data => console.log(data))               │
└───────────────────┬─────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│ 10. UI deve ser atualizada (implementar)            │
│     - Adicionar tarefa à tabela                     │
│     - Limpar campos do formulário                   │
│     - Mostrar mensagem de sucesso                   │
└─────────────────────────────────────────────────────┘
```

---

### Fluxo de Atualização de Tarefa

```
1. Usuário clica em "Editar Tarefa"
   ↓
2. handleEditButton() executado
   ↓
3. Fetch envia PUT /api/TaskList/1
   Body: { Title: "Novo título", Status: true }
   ↓
4. TaskListController.Update() recebe requisição
   ↓
5. Busca tarefa no DB: _context.Tasks.Find(id)
   ↓
6. Se encontrada:
   - Atualiza tasks.Title
   - Atualiza tasks.Status
   - _context.Tasks.Update(tasks)
   - _context.SaveChanges()
   ↓
7. Retorna 204 No Content
   ↓
8. React recebe confirmação
   ↓
9. UI atualizada (recarregar lista)
```

---

### Fluxo de Exclusão de Tarefa

```
1. Usuário clica em "Excluir Tarefa"
   ↓
2. handleDeleteButton() executado
   ↓
3. Fetch envia DELETE /api/TaskList/1
   ↓
4. TaskListController.Delete() recebe requisição
   ↓
5. Busca tarefa: _context.Tasks.Find(id)
   ↓
6. Se encontrada:
   - _context.Tasks.Remove(task)
   - _context.SaveChanges()
   ↓
7. Retorna 204 No Content
   ↓
8. React recebe confirmação
   ↓
9. Tarefa removida da UI
```

---

## 🎨 Interface do Usuário

### Componentes Visuais

**Formulário de Entrada:**

```
┌─────────────────────────────────────────────┐
│  TaskListWeb - Lista de Tarefas             │
│  ─────────────────────────────────────────  │
│                                             │
│  Tarefa                                     │
│  ┌─────────────────────────────────────┐    │
│  │ Tarefa                              │    │
│  └─────────────────────────────────────┘    │
│  Preencha uma tarefa.                       │
│                                             │
│  Descrição                                  │
│  ┌─────────────────────────────────────┐    │
│  │ Descrição                           │    │
│  └─────────────────────────────────────┘    │
│  Preencha uma descrição para tarefa.        │
│                                             │
│  [Adicionar Tarefa] [Editar] [Excluir]      │
│                                             │
└─────────────────────────────────────────────┘
```

**Tabela de Tarefas:**

```
┌──────────────────────────────────────────────────────────────┐
│ ID │ Tarefa    │ Descrição        │ Data Criação │ ...       │
├────┼───────────┼──────────────────┼──────────────┼───────────┤
│ 1  │ Tarefa 1  │ Teste Tarefa 1.  │ 07/11/2018   │ ...       │
│ 2  │ Tarefa 2  │ Teste Tarefa 2.  │ 07/11/2018   │ ...       │
└──────────────────────────────────────────────────────────────┘
```

### Estilização (App.css)

```css
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.button__container {
  text-align: center;
  margin-bottom: 50px;
  margin-top: 5px;
}

.button {
  background-color: blue;
  border: none;
  color: white;
  font-size: 16px;
  height: 40px;
  width: 200px;
  margin-left: 5px;
}

.form__container {
    margin: auto;
    width: 80%;
    padding: 15px;
}
```

**Características CSS:**
- ✅ Flexbox para layout
- ✅ Centralização de conteúdo
- ✅ Botões estilizados customizados
- ✅ Container responsivo (80% width)
- ✅ Espaçamento consistente

---

## 🔄 Padrões de Projeto Utilizados

### Backend

#### 1. **Repository Pattern** (Implícito)
Entity Framework Core implementa o padrão Repository através do `DbContext`.

```csharp
// TaskContext age como Repository
public DbSet<Tasks> Tasks { get; set; }
```

#### 2. **Dependency Injection (DI)**
ASP.NET Core injeta dependências automaticamente.

```csharp
public TaskListController(TaskContext context)
{
    _context = context; // Injetado pelo DI container
}
```

#### 3. **REST API Pattern**
Endpoints seguem convenções REST com verbos HTTP semânticos.

```
GET    /api/TaskList     → List all
GET    /api/TaskList/1   → Get by ID
POST   /api/TaskList     → Create
PUT    /api/TaskList/1   → Update
DELETE /api/TaskList/1   → Delete
```

#### 4. **MVC Pattern**
Separação clara entre Model, View (JSON) e Controller.

```
Model       → Tasks.cs, TaskContext.cs
Controller  → TaskListController.cs
View        → JSON Response (não há Razor Views)
```

---

### Frontend

#### 1. **Component-Based Architecture**
Interface dividida em componentes reutilizáveis.

```
App (Container)
  └── TaskForm (Componente)
      ├── Form (Inputs)
      ├── Buttons (Actions)
      └── Table (Data Display)
```

#### 2. **Controlled Components**
Inputs controlados pelo state do React.

```javascript
<input value={this.state.inputTaskTitleValue} 
       onChange={evt => this.updateInputTaskTitleValue(evt)} />
```

#### 3. **Fetch API Pattern**
Requisições HTTP com tratamento de promises.

```javascript
fetch(url, options)
    .then(response => response.json())
    .then(data => handleData(data))
    .catch(error => handleError(error));
```

---

## 🧪 Testando a Aplicação

### Teste End-to-End Manual

**Cenário 1: Adicionar Nova Tarefa**

```
Passo 1: Inicie backend e frontend
Passo 2: Acesse http://localhost:3000
Passo 3: Preencha campos:
  - Tarefa: "Estudar React"
  - Descrição: "Completar tutorial de hooks"
Passo 4: Clique em "Adicionar Tarefa"

Resultado Esperado:
  ✅ Console do navegador: objeto da tarefa criada
  ✅ API retorna status 201 Created
  ⚠️ Tabela não atualiza automaticamente (bug conhecido)
```

**Cenário 2: Listar Tarefas via API**

```bash
# GET todas as tarefas
curl http://localhost:54814/api/TaskList

# Resposta esperada:
[
  {
    "id": 1,
    "title": "Tarefa 1",
    "description": "Tarefa teste 1",
    "status": true,
    ...
  }
]
```

**Cenário 3: Atualizar Tarefa**

```bash
# PUT para atualizar tarefa 1
curl -X PUT "http://localhost:54814/api/TaskList/1" \
     -H "Content-Type: application/json" \
     -d '{
       "title": "Tarefa Atualizada",
       "status": true
     }'

# Resposta esperada: 204 No Content
```

**Cenário 4: Deletar Tarefa**

```bash
# DELETE tarefa 1
curl -X DELETE "http://localhost:54814/api/TaskList/1"

# Resposta esperada: 204 No Content
```

---

### Testes Automatizados

#### Backend - Testes com xUnit

**Criar projeto de testes:**

```bash
cd api
dotnet new xunit -n TaskListWebAPI.Tests
dotnet add reference ../TaskListWebAPI.csproj
dotnet add package Microsoft.AspNetCore.Mvc.Testing
```

**Exemplo de teste:**

```csharp
public class TaskListControllerTests
{
    [Fact]
    public async Task GetAll_ReturnsOkResult_WithListOfTasks()
    {
        // Arrange
        var options = new DbContextOptionsBuilder<TaskContext>()
            .UseInMemoryDatabase(databaseName: "TestDatabase")
            .Options;
        
        var context = new TaskContext(options);
        var controller = new TaskListController(context);

        // Act
        var result = controller.GetAll();

        // Assert
        Assert.IsType<ActionResult<List<Tasks>>>(result);
        Assert.NotEmpty(result.Value);
    }

    [Fact]
    public async Task Create_ReturnsCreatedResult()
    {
        // Arrange
        var context = GetInMemoryContext();
        var controller = new TaskListController(context);
        var newTask = new Tasks 
        { 
            Title = "Test Task",
            Description = "Test Description",
            Status = false
        };

        // Act
        var result = controller.Create(newTask);

        // Assert
        Assert.IsType<CreatedAtRouteResult>(result);
    }
}
```

**Executar testes:**

```bash
dotnet test
```

---

#### Frontend - Testes com Jest/React Testing Library

**App.test.js:**

```javascript
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders task form', () => {
  const { getByText } = render(<App />);
  const element = getByText(/TaskListWeb/i);
  expect(element).toBeInTheDocument();
});
```

**Executar testes:**

```bash
npm test
```

---

## 🐛 Problemas Conhecidos e Soluções

### Problema 1: Tabela não atualiza após adicionar tarefa

**Causa:** 
O componente usa dados hardcoded (`products`) em vez de buscar da API.

**Código atual:**
```javascript
var products = [
    { id: 1, task: "Tarefa 1", ... }  // Dados fixos!
];
```

**Solução:**

```javascript
class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],  // Array vazio inicial
            // ...
        };
    }

    componentDidMount() {
        this.loadTasks();
    }

    loadTasks() {
        fetch('http://localhost:54814/api/TaskList')
            .then(response => response.json())
            .then(data => {
                this.setState({ tasks: data });
            })
            .catch(err => console.log(err));
    }

    handleAddButton() {
        // ... código de POST ...
        .then(data => {
            this.loadTasks();  // Recarrega lista após adicionar
        });
    }

    render() {
        return (
            <BootstrapTable data={this.state.tasks} ...>
                {/* ... */}
            </BootstrapTable>
        );
    }
}
```

---

### Problema 2: Erro CORS ao fazer requisições

**Sintoma:**
```
Access to fetch at 'http://localhost:54814' from origin 'http://localhost:3000' 
has been blocked by CORS policy
```

**Causa:** CORS não configurado ou mal configurado

**Solução (já implementada):**

Backend já tem CORS habilitado em `Startup.cs`. Se persistir, verificar:

1. **API está rodando?**
   ```bash
   curl http://localhost:54814/api/TaskList
   ```

2. **CORS está habilitado no controller?**
   ```csharp
   [EnableCors("MyPolicy")]
   ```

3. **Middleware CORS está na ordem correta?**
   ```csharp
   public void Configure(IApplicationBuilder app)
   {
       app.UseCors("MyPolicy");  // Antes do UseMvc!
       app.UseMvc();
   }
   ```

---

### Problema 3: Porta 54814 já em uso

**Erro:**
```
Unable to start Kestrel. Address http://localhost:54814 already in use.
```

**Solução A - Alterar porta:**

**launchSettings.json:**
```json
{
  "profiles": {
    "TaskListWebAPI": {
      "applicationUrl": "http://localhost:5000"
    }
  }
}
```

**Solução B - Matar processo:**

```bash
# Windows
netstat -ano | findstr :54814
taskkill /PID <PID> /F

# Linux/Mac
lsof -i :54814
kill -9 <PID>
```

---

### Problema 4: React não inicia (porta 3000 em uso)

**Solução:**

```bash
# Linux/Mac
PORT=3001 npm start

# Windows (PowerShell)
$env:PORT=3001; npm start

# Ou configurar no package.json
"start": "set PORT=3001 && react-scripts start"
```

---

### Problema 5: Dependências desatualizadas (vulnerabilidades)

**Avisos do npm:**

```
6 vulnerabilities (2 moderate, 4 high)
```

**Solução:**

```bash
# Atualizar dependências
npm audit fix

# Atualizar manualmente
npm install axios@latest
npm install react@latest react-dom@latest

# Atualizar react-scripts
npm install react-scripts@latest
```

---

## 📈 Melhorias e Roadmap

### Alta Prioridade (v1.1.0)

- [ ] **Integrar API com frontend** - Carregar tarefas da API real
- [ ] **Atualizar tabela dinamicamente** - Recarregar após CRUD operations
- [ ] **Adicionar feedback visual** - Loading spinners, toasts de sucesso/erro
- [ ] **Implementar validação de campos** - Não permitir título vazio
- [ ] **Selecionar tarefa na tabela** - Permitir editar/deletar tarefa selecionada
- [ ] **Limpar formulário após adicionar** - Reset de inputs
- [ ] **Migrar para SQL Server** - Substituir InMemory por DB persistente

### Média Prioridade (v1.2.0)

- [ ] **Autenticação JWT** - Login e proteção de rotas
- [ ] **Paginação** - Limitar resultados por página
- [ ] **Filtros e busca** - Buscar tarefas por título/status
- [ ] **Ordenação customizada** - Ordenar por data, status, etc.
- [ ] **Categorias/Tags** - Organizar tarefas por categoria
- [ ] **Prioridades** - Alta, Média, Baixa
- [ ] **Data de vencimento** - Adicionar deadline às tarefas
- [ ] **Notificações** - Alertas de tarefas próximas do vencimento

### Baixa Prioridade (v2.0.0)

- [ ] **Anexos** - Upload de arquivos nas tarefas
- [ ] **Comentários** - Adicionar notas às tarefas
- [ ] **Compartilhamento** - Tarefas colaborativas
- [ ] **Dashboard** - Gráficos e estatísticas
- [ ] **Dark Mode** - Tema escuro/claro
- [ ] **PWA completo** - App instalável offline-first
- [ ] **Sincronização em tempo real** - SignalR para updates live
- [ ] **Export/Import** - CSV, JSON, Excel

---

## 🔒 Segurança

### ⚠️ Vulnerabilidades Atuais

**Backend:**
1. **CORS aberto**: `AllowAnyOrigin()` permite qualquer domínio
2. **Sem autenticação**: Endpoints públicos sem proteção
3. **Sem validação de entrada**: Dados não são validados no controller
4. **Sem rate limiting**: Vulnerável a ataques DoS
5. **Sem HTTPS**: Comunicação não criptografada

**Frontend:**
1. **Axios desatualizado**: Versão antiga com vulnerabilidades conhecidas
2. **Sem sanitização**: Inputs não são sanitizados (XSS risk)
3. **API URL hardcoded**: Não usa variáveis de ambiente
4. **Sem tratamento de erros robusto**: Apenas console.log

### ✅ Recomendações de Segurança

#### Backend

**1. Implementar JWT Authentication:**

```bash
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
```

```csharp
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true
        };
    });

// Proteger endpoints
[Authorize]
public class TaskListController : ControllerBase { }
```

**2. Validação de entrada:**

```bash
dotnet add package FluentValidation.AspNetCore
```

```csharp
public class TaskValidator : AbstractValidator<Tasks>
{
    public TaskValidator()
    {
        RuleFor(x => x.Title)
            .NotEmpty().WithMessage("Título é obrigatório")
            .MaximumLength(200).WithMessage("Título muito longo");
    }
}
```

**3. CORS restritivo:**

```csharp
services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
{
    builder.WithOrigins("https://meudominio.com")
           .AllowAnyMethod()
           .AllowAnyHeader()
           .AllowCredentials();
}));
```

**4. Rate Limiting:**

```bash
dotnet add package AspNetCoreRateLimit
```

**5. HTTPS obrigatório:**

```csharp
services.AddHttpsRedirection(options =>
{
    options.HttpsPort = 443;
});
```

---

#### Frontend

**1. Atualizar dependências vulneráveis:**

```bash
npm install axios@latest
npm audit fix --force
```

**2. Usar variáveis de ambiente:**

```javascript
// .env
REACT_APP_API_BASE_URL=http://localhost:54814

// No código
const API_URL = process.env.REACT_APP_API_BASE_URL;
```

**3. Sanitizar inputs:**

```bash
npm install dompurify
```

```javascript
import DOMPurify from 'dompurify';

const sanitizedTitle = DOMPurify.sanitize(this.state.inputTaskTitleValue);
```

**4. Tratamento de erros robusto:**

```javascript
handleAddButton() {
    if (!this.state.inputTaskTitleValue) {
        alert('Título é obrigatório!');
        return;
    }

    fetch(/* ... */)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Erro ao adicionar tarefa:', error);
            alert('Erro ao adicionar tarefa. Tente novamente.');
        });
}
```

---

## 🧩 Detalhes de Implementação

### Backend - Entity Framework Core

#### TaskContext (DbContext)

**Função:** Gerencia entidades e conexão com banco de dados.

```csharp
public class TaskContext : DbContext
{
    public TaskContext(DbContextOptions<TaskContext> options)
        : base(options)
    {
    }

    public DbSet<Tasks> Tasks { get; set; }
}
```

**DbSet&lt;Tasks&gt;:**
- Representa coleção de entidades `Tasks` na memória
- Permite consultas LINQ
- Rastreia mudanças de estado
- Gerencia operações CRUD

**Configuração no Startup.cs:**

```csharp
services.AddDbContext<TaskContext>(opt =>
    opt.UseInMemoryDatabase("TaskList"));
```

---

#### Seed Data (Dados Iniciais)

**Implementação no construtor do Controller:**

```csharp
public TaskListController(TaskContext context)
{
    _context = context;

    if (_context.Tasks.Count() == 0)
    {
        _context.Tasks.Add(new Tasks
        {
            Title = "Tarefa 1",
            Description = "Tarefa teste 1",
            Status = true,
            CreationDate = DateTime.Now.ToUniversalTime()
                 .ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'Z'")
        });
        _context.SaveChanges();
    }
}
```

**Propósito:**
- Garante que sempre existe pelo menos uma tarefa
- Útil para testes e demonstrações
- Evita tabela vazia ao iniciar

---

### Frontend - React Components

#### State Management

**State atual:**

```javascript
this.state = {
    inputTaskTitleValue: '',
    inputTaskDescValue: ''
};
```

**State melhorado (sugerido):**

```javascript
this.state = {
    tasks: [],                    // Lista de tarefas da API
    inputTaskTitleValue: '',
    inputTaskDescValue: '',
    selectedTaskId: null,         // Tarefa selecionada para editar
    isLoading: false,             // Indicador de carregamento
    error: null                   // Mensagem de erro
};
```

---

#### Lifecycle Methods

**Carregar dados ao montar componente:**

```javascript
componentDidMount() {
    this.loadTasksFromAPI();
}

loadTasksFromAPI() {
    this.setState({ isLoading: true });
    
    fetch('http://localhost:54814/api/TaskList')
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                tasks: data,
                isLoading: false 
            });
        })
        .catch(error => {
            this.setState({ 
                error: error.message,
                isLoading: false 
            });
        });
}
```

---

#### React Bootstrap Table

**Configuração da tabela:**

```javascript
<BootstrapTable 
    data={this.state.tasks}     // Dados da API
    striped={true}               // Linhas zebradas
    hover={true}                 // Efeito hover
    onChange={this.handleChange} // Callback de mudanças
>
    <TableHeaderColumn 
        dataField="id" 
        isKey={true}             // Chave primária
        dataAlign="center" 
        dataSort={true}          // Habilitador ordenação
    >
        ID
    </TableHeaderColumn>
    
    <TableHeaderColumn 
        dataField="task" 
        dataSort={true}
    >
        Tarefa
    </TableHeaderColumn>
    
    <TableHeaderColumn 
        dataField="description"
    >
        Descrição
    </TableHeaderColumn>
    
    <TableHeaderColumn 
        dataField="datCreate" 
        dataSort={true}
    >
        Data Criação
    </TableHeaderColumn>
</BootstrapTable>
```

**Features:**
- ✅ Ordenação por clique no header
- ✅ Linhas zebradas (striped)
- ✅ Efeito hover
- ✅ Colunas personalizáveis
- ✅ Formatadores customizados

---

## 🔄 Ciclo de Vida da Requisição

### Request/Response Cycle

```
┌───────────────────────────────────────────────────────┐
│ 1. Usuário clica em botão no React                    │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 2. Event handler dispara (ex: handleAddButton)        │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 3. Fetch API monta requisição HTTP                    │
│    - URL, Method, Headers, Body                       │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 4. Navegador envia requisição via rede                │
│    - DNS lookup                                       │
│    - TCP handshake                                    │
│    - HTTP request                                     │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 5. Kestrel (servidor web) recebe requisição           │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 6. CORS Middleware verifica origem                    │
│    - Adiciona headers CORS                            │
│    - Permite requisição cross-origin                  │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 7. MVC Middleware processa requisição                 │
│    - Routing: identifica controller e action          │
│    - Model Binding: converte JSON → objeto C#         │
│    - Validation: valida modelo (se configurado)       │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 8. TaskListController.{Action}() executado            │
│    - Acessa _context (TaskContext)                    │
│    - Executa lógica de negócio                        │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 9. Entity Framework Core executa operação             │
│    - LINQ query traduzida para SQL                    │
│    - Operação executada no InMemory DB                │
│    - Change Tracker atualiza estado                   │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 10. Controller retorna ActionResult                   │
│     - OK(data), Created(), NoContent(), NotFound()    │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 11. MVC serializa resposta para JSON                  │
│     - System.Text.Json (ou Newtonsoft.Json)           │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 12. Kestrel envia resposta HTTP                       │
│     - Status code, Headers, Body                      │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 13. Navegador recebe resposta                         │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 14. Fetch API processa resposta                       │
│     - .then(response => response.json())              │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 15. Promise resolve com dados                         │ 
│     - .then(data => this.setState({ tasks: data }))   │
└────────────────┬──────────────────────────────────────┘
                 ▼
┌───────────────────────────────────────────────────────┐
│ 16. React re-renderiza componente                     │
│     - Virtual DOM diff                                │
│     - Atualiza apenas elementos alterados             │
└───────────────────────────────────────────────────────┘
```

---

## 🧰 Comandos Úteis

### Backend (.NET Core)

```bash
# Restaurar dependências
dotnet restore

# Compilar projeto
dotnet build

# Executar aplicação
dotnet run

# Executar com watch (hot reload)
dotnet watch run

# Limpar build
dotnet clean

# Publicar para produção
dotnet publish -c Release -o ./publish

# Listar pacotes instalados
dotnet list package

# Adicionar pacote NuGet
dotnet add package NomeDoPacote

# Verificar versão do SDK
dotnet --info

# Entity Framework migrations (se usar SQL Server)
dotnet ef migrations add InitialCreate
dotnet ef database update

# Executar testes
dotnet test

# Gerar relatório de cobertura
dotnet test /p:CollectCoverage=true
```

---

### Frontend (React)

```bash
# Instalar dependências
npm install

# Iniciar dev server
npm start

# Build de produção
npm run build

# Executar testes
npm test

# Executar testes com cobertura
npm test -- --coverage

# Analisar bundle size
npm run build
npx source-map-explorer 'build/static/js/*.js'

# Atualizar dependências
npm update

# Verificar vulnerabilidades
npm audit

# Corrigir vulnerabilidades automaticamente
npm audit fix

# Limpar cache do npm
npm cache clean --force

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install

# Ejetar configuração (irreversível!)
npm run eject
```

---

## 📊 Fluxo de Desenvolvimento

### Workflow Recomendado

```
┌─────────────────────────────────────┐
│ 1. Iniciar Backend (API)            │
│    cd api && dotnet run             │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ 2. Verificar API funcionando        │
│    curl localhost:54814/api/TaskList│
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ 3. Iniciar Frontend (React)         │
│    cd client-app && npm start       │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ 4. Desenvolver features             │
│    - Editar código                  │
│    - Hot reload automático          │
│    - Testar no navegador            │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ 5. Testar funcionalidades           │
│    - CRUD operations                │
│    - Validações                     │
│    - Error handling                 │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ 6. Commit e Push                    │
│    git add .                        │
│    git commit -m "feat: ..."        │
│    git push                         │
└─────────────────────────────────────┘
```

---

## 🎯 Casos de Uso Detalhados

### Caso de Uso 1: Adicionar Tarefa Completa

**Ator:** Usuário final

**Pré-condições:**
- Backend e frontend em execução
- Navegador em http://localhost:3000

**Fluxo Principal:**

| # | Usuário | Sistema |
|---|---------|---------|
| 1 | Acessa a aplicação web | Renderiza formulário e tabela |
| 2 | Preenche campo "Tarefa" | State atualizado via onChange |
| 3 | Preenche campo "Descrição" | State atualizado via onChange |
| 4 | Clica em "Adicionar Tarefa" | handleAddButton() executado |
| 5 | - | Fetch POST enviado para API |
| 6 | - | API valida e salva no InMemory DB |
| 7 | - | API retorna 201 Created com objeto |
| 8 | - | React recebe resposta (console.log) |
| 9 | - | ⚠️ Tabela não atualiza (bug) |

**Pós-condições:**
- Tarefa salva no banco InMemory
- Log no console do navegador com objeto criado
- ⚠️ Usuário não vê tarefa na tabela (necessita refresh manual da API)

---

### Caso de Uso 2: Editar Status de Tarefa

**Ator:** Usuário final

**Pré-condições:**
- Tarefa já cadastrada no sistema
- ID da tarefa conhecido

**Fluxo Principal:**

| # | Usuário | Sistema |
|---|---------|---------|
| 1 | Clica em "Editar Tarefa" | handleEditButton() executado |
| 2 | - | Fetch PUT enviado para /api/TaskList/1 |
| 3 | - | API busca tarefa por ID |
| 4 | - | API atualiza Title e Status |
| 5 | - | API salva mudanças (_context.SaveChanges) |
| 6 | - | API retorna 204 No Content |
| 7 | - | React recebe confirmação |

**Limitação atual:**
⚠️ ID da tarefa está hardcoded (sempre edita ID 1). Precisa implementar seleção de tarefa.

---

### Caso de Uso 3: Deletar Tarefa

**Ator:** Usuário final

**Pré-condições:**
- Tarefa cadastrada no sistema

**Fluxo Principal:**

| # | Usuário | Sistema |
|---|---------|---------|
| 1 | Clica em "Excluir Tarefa" | handleDeleteButton() executado |
| 2 | - | Fetch DELETE enviado para /api/TaskList/1 |
| 3 | - | API busca tarefa por ID |
| 4 | - | Se encontrada: _context.Tasks.Remove(task) |
| 5 | - | _context.SaveChanges() persiste exclusão |
| 6 | - | API retorna 204 No Content |
| 7 | - | React recebe confirmação |
| 8 | - | ⚠️ Tabela não atualiza automaticamente |

**Melhorias sugeridas:**
- Adicionar confirmação antes de deletar
- Selecionar tarefa na tabela em vez de ID hardcoded
- Atualizar UI após exclusão

---

## 🛠️ Desenvolvimento e Debugging

### Debugging Backend (Visual Studio)

**Breakpoints e debugging:**

1. Abra `TaskListWebAPI.sln` no Visual Studio
2. Defina breakpoints clicando na margem esquerda
3. Pressione `F5` para iniciar com debugger
4. Faça requisição da API
5. Execução pausa no breakpoint

**Inspecionar variáveis:**
- Hover sobre variável para ver valor
- Use janela "Locals" para ver todas variáveis
- Use janela "Watch" para monitorar expressões

---

### Debugging Frontend (Chrome DevTools)

**React Developer Tools:**

```bash
# Instalar extensão Chrome
# https://chrome.google.com/webstore/detail/react-developer-tools/
```

**Features:**
- 🔍 Inspecionar componentes React
- 📊 Visualizar props e state
- 🔄 Rastrear renderizações
- ⚡ Detectar problemas de performance

**Console do navegador (F12):**

```javascript
// Ver state atual do componente
// No console, após selecionar elemento:
$r.state

// Ver props
$r.props

// Simular evento
$r.handleAddButton()

// Ver tarefas no state
console.log($r.state.tasks);
```

---

### Logs e Monitoring

**Backend - Logging:**

```csharp
public class TaskListController : ControllerBase
{
    private readonly ILogger<TaskListController> _logger;
    
    public TaskListController(TaskContext context, 
                             ILogger<TaskListController> logger)
    {
        _context = context;
        _logger = logger;
    }
    
    [HttpPost]
    public IActionResult Create(Tasks task)
    {
        _logger.LogInformation($"Creating task: {task.Title}");
        
        _context.Tasks.Add(task);
        _context.SaveChanges();
        
        _logger.LogInformation($"Task created with ID: {task.Id}");
        
        return CreatedAtRoute("GetTasks", new { id = task.Id }, task);
    }
}
```

**Frontend - Logging:**

```javascript
// Development logging
if (process.env.NODE_ENV === 'development') {
    console.log('State:', this.state);
    console.log('Props:', this.props);
}

// Production logging (usar serviço como Sentry)
try {
    // código
} catch (error) {
    Sentry.captureException(error);
}
```

---

## 🌐 Deploy e Produção

### Backend - Deploy da API

#### Opção 1: Azure App Service

```bash
# Instalar Azure CLI
az login

# Criar App Service
az webapp create --resource-group MyResourceGroup \
                 --plan MyAppServicePlan \
                 --name tasklist-api \
                 --runtime "DOTNETCORE|2.0"

# Deploy
dotnet publish -c Release
cd bin/Release/netcoreapp2.0/publish
zip -r publish.zip .
az webapp deployment source config-zip --resource-group MyResourceGroup \
                                        --name tasklist-api \
                                        --src publish.zip
```

---

#### Opção 2: Docker

**Criar Dockerfile:**

```dockerfile
FROM mcr.microsoft.com/dotnet/core/sdk:2.0 AS build
WORKDIR /app

# Copiar csproj e restaurar dependências
COPY *.csproj ./
RUN dotnet restore

# Copiar código e compilar
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:2.0
WORKDIR /app
COPY --from=build /app/out .
ENTRYPOINT ["dotnet", "TaskListWebAPI.dll"]
```

**Build e executar:**

```bash
# Build imagem
docker build -t tasklist-api .

# Executar container
docker run -d -p 54814:80 --name tasklist-api tasklist-api

# Ver logs
docker logs tasklist-api

# Parar container
docker stop tasklist-api
```

---

#### Opção 3: IIS (Windows Server)

**Passos:**

1. Publicar aplicação:
   ```bash
   dotnet publish -c Release -o ./publish
   ```

2. Instalar .NET Core Hosting Bundle no servidor

3. Criar site no IIS:
   - Application Pool: No Managed Code
   - Physical Path: caminho da pasta publish

4. Configurar bindings (porta 54814)

5. Iniciar site

---

### Frontend - Deploy React App

#### Opção 1: Netlify

```bash
# Build de produção
npm run build

# Deploy via Netlify CLI
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=build
```

---

#### Opção 2: Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
cd client-app
vercel --prod
```

---

#### Opção 3: GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Adicionar scripts no package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

---

#### Opção 4: Build estático (qualquer servidor web)

```bash
# Build de produção
npm run build

# Arquivos gerados em: build/
# Fazer upload para servidor:
# - Apache
# - Nginx
# - IIS
# - S3 + CloudFront
```

**Configuração Nginx:**

```nginx
server {
    listen 80;
    server_name tasklist.exemplo.com;
    root /var/www/tasklist/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:54814;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔍 Análise de Código

### Métricas do Projeto

**Backend:**
- **Linguagem**: C# 7.0
- **Linhas de código**: ~200
- **Arquivos .cs**: 6
- **Controllers**: 2 (TaskList, Values)
- **Models**: 2 (Tasks, TaskContext)
- **Endpoints REST**: 5

**Frontend:**
- **Linguagem**: JavaScript (ES6)
- **Linhas de código**: ~170 (TaskForm.js)
- **Componentes React**: 2 (App, TaskForm)
- **Dependências NPM**: 5
- **Pages**: 1 (SPA)

---

### Qualidade do Código

**Pontos Fortes:**

**Backend:**
- ✅ Separação clara de responsabilidades
- ✅ Uso correto de ActionResult
- ✅ Injeção de dependências nativa
- ✅ CORS configurado corretamente
- ✅ Seed data para testes

**Frontend:**
- ✅ Componentes React bem estruturados
- ✅ State management com setState
- ✅ Event handlers corretamente bound
- ✅ Uso de react-bootstrap-table
- ✅ CSS separado por concerns

**Pontos de Melhoria:**

**Backend:**
- ⚠️ Falta validação de modelos
- ⚠️ Sem tratamento de exceções
- ⚠️ Sem logging estruturado
- ⚠️ Sem testes unitários
- ⚠️ InMemory DB não adequado para produção
- ⚠️ CORS muito permissivo

**Frontend:**
- ⚠️ Dados hardcoded em vez de vir da API
- ⚠️ IDs hardcoded nas funções edit/delete
- ⚠️ Sem atualização automática da UI
- ⚠️ Sem loading states
- ⚠️ Sem tratamento robusto de erros
- ⚠️ Sem seleção de tarefa na tabela
- ⚠️ Axios instalado mas não usado

---

## 🏛️ Princípios SOLID Aplicados

### Backend

**1. Single Responsibility Principle (SRP)**
- ✅ `Tasks.cs` - Apenas modelo de dados
- ✅ `TaskContext.cs` - Apenas acesso a dados
- ✅ `TaskListController.cs` - Apenas endpoints REST

**2. Open/Closed Principle (OCP)**
- ✅ DbContext aberto para extensão via DbSet
- ✅ Controller pode ser estendido com novos endpoints

**3. Dependency Inversion Principle (DIP)**
- ✅ Controller depende de abstração (`TaskContext`)
- ✅ Injeção via construtor (DI)

---

## 📚 Conceitos Avançados

### Entity Framework Core

**Change Tracker:**

```csharp
// EF rastreia automaticamente mudanças
var task = _context.Tasks.Find(1);
task.Title = "Novo Título";  // Mudança detectada
_context.SaveChanges();      // Gera UPDATE SQL
```

**Estados de entidades:**
- `Added` - Nova entidade a ser inserida
- `Modified` - Entidade alterada
- `Deleted` - Entidade marcada para exclusão
- `Unchanged` - Sem alterações
- `Detached` - Não rastreada

---

### ASP.NET Core Middleware Pipeline

**Ordem de execução:**

```
Request
   ↓
UseCors()           ← Adiciona headers CORS
   ↓
UseMvc()            ← Roteamento e execução de controllers
   ↓
Response
```

**Pipeline expandido (produção):**

```csharp
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.UseCors("MyPolicy");
app.UseEndpoints(endpoints => {
    endpoints.MapControllers();
});
```

---

### React Component Lifecycle

**Métodos do ciclo de vida (Class Components):**

```
MOUNTING (Montagem):
   ↓
constructor()          ← Inicializa state
   ↓
render()               ← Renderiza UI
   ↓
componentDidMount()    ← Ideal para fetch de dados

UPDATING (Atualização):
   ↓
shouldComponentUpdate()
   ↓
render()
   ↓
componentDidUpdate()   ← Após atualização

UNMOUNTING (Desmontagem):
   ↓
componentWillUnmount() ← Limpeza (timers, subscriptions)
```

---

## 🚀 Otimização de Performance

### Backend

**1. Caching:**

```csharp
[HttpGet]
[ResponseCache(Duration = 60)] // Cache por 60 segundos
public ActionResult<List<Tasks>> GetAll()
{
    return _context.Tasks.ToList();
}
```

**2. Paginação:**

```csharp
[HttpGet]
public ActionResult<List<Tasks>> GetAll(int page = 1, int pageSize = 10)
{
    return _context.Tasks
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .ToList();
}
```

**3. Async/Await:**

```csharp
[HttpGet]
public async Task<ActionResult<List<Tasks>>> GetAll()
{
    return await _context.Tasks.ToListAsync();
}
```

**4. Select específico:**

```csharp
// Em vez de retornar entidade completa
return _context.Tasks
    .Select(t => new { t.Id, t.Title, t.Status })
    .ToList();
```

---

### Frontend

**1. Lazy Loading de componentes:**

```javascript
import React, { lazy, Suspense } from 'react';

const TaskForm = lazy(() => import('./components/TaskForm'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TaskForm />
        </Suspense>
    );
}
```

**2. Memoização:**

```javascript
import React, { useMemo } from 'react';

function TaskList({ tasks }) {
    const sortedTasks = useMemo(() => {
        return tasks.sort((a, b) => a.id - b.id);
    }, [tasks]);
    
    return <BootstrapTable data={sortedTasks} />;
}
```

**3. Debounce em inputs:**

```javascript
import { debounce } from 'lodash';

updateInputTaskTitleValue = debounce((value) => {
    this.setState({ inputTaskTitleValue: value });
}, 300);
```

---

## 📋 Checklist de Produção

### Backend

- [ ] Migrar de InMemory para SQL Server/PostgreSQL
- [ ] Implementar autenticação JWT
- [ ] Adicionar validação de modelos (FluentValidation)
- [ ] Implementar tratamento global de exceções
- [ ] Configurar logging estruturado (Serilog)
- [ ] Adicionar Swagger/OpenAPI documentation
- [ ] Configurar CORS restritivo (apenas domínios permitidos)
- [ ] Implementar rate limiting
- [ ] Adicionar health checks
- [ ] Configurar HTTPS
- [ ] Implementar testes unitários (>80% cobertura)
- [ ] Configurar CI/CD pipeline
- [ ] Adicionar monitoramento (Application Insights)

---

### Frontend

- [ ] Integrar com API real (substituir dados hardcoded)
- [ ] Implementar seleção de tarefa na tabela
- [ ] Adicionar confirmação antes de deletar
- [ ] Implementar loading states (spinners)
- [ ] Adicionar toasts de sucesso/erro
- [ ] Validar campos antes de enviar
- [ ] Implementar tratamento robusto de erros
- [ ] Atualizar UI após operações CRUD
- [ ] Adicionar paginação
- [ ] Implementar busca/filtros
- [ ] Otimizar bundle size
- [ ] Configurar PWA completo
- [ ] Adicionar testes (Jest, React Testing Library)
- [ ] Implementar acessibilidade (ARIA labels)
- [ ] Build de produção otimizado

---

## 🎓 Conceitos Educacionais

### Para Estudantes

Este projeto é excelente para aprender:

**Backend (.NET Core):**
- ✅ ASP.NET Core Web API
- ✅ Entity Framework Core
- ✅ Dependency Injection
- ✅ REST API design
- ✅ CORS configuration
- ✅ MVC pattern

**Frontend (React):**
- ✅ React class components
- ✅ State management
- ✅ Event handling
- ✅ Fetch API
- ✅ Component lifecycle
- ✅ Props e State

**Full-Stack:**
- ✅ Arquitetura cliente-servidor
- ✅ Comunicação HTTP
- ✅ JSON serialization/deserialization
- ✅ CRUD operations
- ✅ Cross-origin requests

---

## 🔗 Recursos e Documentação

### Documentação Oficial

**Backend:**
- [ASP.NET Core Documentation](https://docs.microsoft.com/aspnet/core)
- [Entity Framework Core](https://docs.microsoft.com/ef/core)
- [.NET Core CLI](https://docs.microsoft.com/dotnet/core/tools)
- [C# Programming Guide](https://docs.microsoft.com/dotnet/csharp)

**Frontend:**
- [React Documentation](https://reactjs.org/docs)
- [React Bootstrap Table](https://react-bootstrap-table.github.io/react-bootstrap-table2/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Create React App](https://create-react-app.dev/)

---

### Tutoriais Recomendados

**Backend:**
- [Microsoft Learn - ASP.NET Core](https://docs.microsoft.com/learn/aspnet-core)
- [EF Core Tutorial](https://www.entityframeworktutorial.net/efcore/entity-framework-core.aspx)
- [REST API Best Practices](https://restfulapi.net/)

**Frontend:**
- [React Official Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [React Hooks (modernização)](https://reactjs.org/docs/hooks-intro.html)
- [JavaScript.info](https://javascript.info/)

---

### Comunidades

- [Stack Overflow - ASP.NET Core](https://stackoverflow.com/questions/tagged/asp.net-core)
- [Stack Overflow - React](https://stackoverflow.com/questions/tagged/reactjs)
- [Reddit - r/dotnet](https://www.reddit.com/r/dotnet/)
- [Reddit - r/reactjs](https://www.reddit.com/r/reactjs/)
- [Dev.to](https://dev.to/)

---

## 🤝 Como Contribuir

### Workflow de Contribuição

```bash
# 1. Fork o projeto no GitHub

# 2. Clone seu fork
git clone https://github.com/SEU_USUARIO/task-list-web.git
cd task-list-web-master

# 3. Crie branch para feature
git checkout -b feature/minha-feature

# 4. Faça alterações
# Edite código...

# 5. Teste suas alterações
cd api && dotnet build && dotnet run
cd client-app && npm install && npm start

# 6. Commit
git add .
git commit -m "feat: adiciona nova funcionalidade"

# 7. Push
git push origin feature/minha-feature

# 8. Abra Pull Request no GitHub
```

---

### Convenção de Commits

**Conventional Commits:**

```
feat:     Nova funcionalidade
fix:      Correção de bug
docs:     Apenas documentação
style:    Formatação (não afeta lógica)
refactor: Refatoração de código
test:     Adição/correção de testes
chore:    Manutenção, configs
perf:     Melhorias de performance
ci:       Mudanças em CI/CD
build:    Mudanças no build system
```

**Exemplos:**

```bash
git commit -m "feat: adiciona autenticação JWT"
git commit -m "fix: corrige bug na atualização de tarefas"
git commit -m "docs: atualiza README com instruções de deploy"
git commit -m "refactor: migra TaskForm para hooks"
```

---

### Áreas que Precisam de Contribuição

**Backend:**
- [ ] Implementar testes unitários
- [ ] Adicionar Swagger documentation
- [ ] Migrar para SQL Server
- [ ] Implementar soft delete
- [ ] Adicionar validações robustas
- [ ] Implementar autenticação

**Frontend:**
- [ ] Integrar com API real
- [ ] Adicionar testes de componentes
- [ ] Implementar Redux/Context API
- [ ] Migrar para Hooks
- [ ] Adicionar TypeScript
- [ ] Melhorar UX/UI

---

## 📊 Comparação com Alternativas

### vs. Trello

| Feature | TaskListWeb | Trello |
|---------|-------------|--------|
| Custo | Grátis (self-hosted) | Freemium |
| Customização | 100% | Limitada |
| Privacidade | Total | Dados no Trello |
| Complexidade | Simples | Média-Alta |
| Colaboração | Não | Sim |

### vs. Todoist

| Feature | TaskListWeb | Todoist |
|---------|-------------|---------|
| Offline | Não (requer API) | Sim |
| Plataformas | Web | Web, Mobile, Desktop |
| Sincronização | Não | Sim |
| Features | Básicas | Avançadas |
| Open Source | Sim | Não |

---

## 🎨 Wireframes e Design

### Mockup de Interface Melhorada

**Sugestão de novo layout:**

```
┌────────────────────────────────────────────────────────┐
│  📝 TaskListWeb                      [👤 User] [⚙️]   
├────────────────────────────────────────────────────────┤
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ ➕ Nova Tarefa                                  
│  │                                                  │  │
│  │ Título: [_________________________________]      │  │
│  │ Descrição: [____________________________]        │  │
│  │ Prioridade: [▼ Média]  Vencimento: [__/__/____]  │  │
│  │                                                  │  │
│  │ [Adicionar Tarefa] [Cancelar]                    │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  🔍 Buscar: [_____________]  Filtrar: [▼ Todas]        
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │ ☐ Implementar autenticação JWT          [📝] [🗑️] 
│  │   📅 Criada: 28/03/2026   ⏰ Vence: 30/03/2026  │  │
│  ├──────────────────────────────────────────────────┤  │
│  │ ☑ Configurar CI/CD pipeline             [📝] [🗑️] 
│  │   📅 Criada: 27/03/2026   ✅ Concluída          │  │
│  ├──────────────────────────────────────────────────┤  │
│  │ ☐ Escrever documentação técnica         [📝] [🗑️]  
│  │   📅 Criada: 28/03/2026   ⚠️ Atrasada           │  │
│  └──────────────────────────────────────────────────┘  │
│                                                        │
│  Mostrando 3 de 3 tarefas                  [1] [2] [>] │
└────────────────────────────────────────────────────────┘
```

---

## 🛡️ LGPD e Compliance

### Dados Coletados

| Dado | Tipo | Sensível | Propósito |
|------|------|----------|-----------|
| Título da tarefa | Texto | ❌ Não | Identificar tarefa |
| Descrição | Texto | ⚠️ Depende | Detalhes da tarefa |
| Datas | Timestamp | ❌ Não | Auditoria |
| Status | Boolean | ❌ Não | Estado da tarefa |

### Recomendações LGPD

**Se coletar dados pessoais:**

1. **Termo de Consentimento**
2. **Política de Privacidade**
3. **Direito ao Esquecimento** - Implementar hard delete
4. **Criptografia** - Dados sensíveis em repouso
5. **Log de Auditoria** - Quem acessou o quê e quando
6. **Anonimização** - Para dados analíticos

---

## 🔧 Troubleshooting Avançado

### Debug de Requisições HTTP

**Backend - Ver requests no console:**

```csharp
// Adicionar middleware de logging
app.Use(async (context, next) =>
{
    Console.WriteLine($"Request: {context.Request.Method} {context.Request.Path}");
    await next.Invoke();
    Console.WriteLine($"Response: {context.Response.StatusCode}");
});
```

**Frontend - Ver requests no DevTools:**

```
F12 → Network Tab
- Ver todos os requests
- Headers, Preview, Response
- Timing de cada request
```

---

### Verificar InMemory Database

**No TaskListController, adicionar endpoint de debug:**

```csharp
[HttpGet("debug")]
public ActionResult<object> Debug()
{
    return new
    {
        TotalTasks = _context.Tasks.Count(),
        DatabaseName = "TaskList (InMemory)",
        AllTasks = _context.Tasks.ToList()
    };
}
```

**Acessar:**
```
http://localhost:54814/api/TaskList/debug
```

---

## 📦 Estrutura de Pacotes NuGet

### Dependências Backend (TaskListWebAPI.csproj)

```xml
<ItemGroup>
  <PackageReference Include="Microsoft.AspNetCore.All" Version="2.0.8" />
  <PackageReference Include="Microsoft.AspNetCore.Cors" Version="2.1.1" />
  <PackageReference Include="Microsoft.AspNetCore.Mvc" Version="2.1.3" />
  <PackageReference Include="Microsoft.Extensions.DependencyInjection" Version="2.1.1" />
</ItemGroup>
```

**Microsoft.AspNetCore.All (Metapackage):**
Inclui:
- ASP.NET Core MVC
- Entity Framework Core
- Identity
- Logging
- Configuration
- E muitos outros pacotes

---

## 🌟 Exemplos de Uso

### Exemplo 1: Criar Tarefa via Postman

**Request:**

```
POST http://localhost:54814/api/TaskList
Content-Type: application/json

{
  "title": "Implementar testes unitários",
  "description": "Adicionar testes com xUnit para todos os endpoints",
  "status": false,
  "creationDate": "2026-03-28T21:00:00.000Z",
  "alterDate": "2026-03-28T21:00:00.000Z"
}
```

**Response:**

```
Status: 201 Created
Location: http://localhost:54814/api/TaskList/2

{
  "id": 2,
  "title": "Implementar testes unitários",
  "description": "Adicionar testes com xUnit para todos os endpoints",
  "status": false,
  "creationDate": "2026-03-28T21:00:00.000Z",
  "exclusionDate": null,
  "alterDate": "2026-03-28T21:00:00.000Z"
}
```

---

### Exemplo 2: Buscar Todas as Tarefas

**Request:**

```bash
curl -X GET "http://localhost:54814/api/TaskList" \
     -H "Accept: application/json"
```

**Response:**

```json
[
  {
    "id": 1,
    "title": "Tarefa 1",
    "description": "Tarefa teste 1",
    "status": true,
    "creationDate": "2026-03-28T18:30:49.477Z",
    "exclusionDate": null,
    "alterDate": null
  },
  {
    "id": 2,
    "title": "Implementar testes unitários",
    "description": "Adicionar testes com xUnit para todos os endpoints",
    "status": false,
    "creationDate": "2026-03-28T21:00:00.000Z",
    "exclusionDate": null,
    "alterDate": "2026-03-28T21:00:00.000Z"
  }
]
```

---

### Exemplo 3: Marcar Tarefa como Concluída

**Request:**

```bash
curl -X PUT "http://localhost:54814/api/TaskList/2" \
     -H "Content-Type: application/json" \
     -d '{
       "title": "Implementar testes unitários",
       "status": true
     }'
```

**Response:**

```
Status: 204 No Content
(sem body)
```

---

## 🎯 Desafios de Desenvolvimento

### Desafio 1 (Iniciante): Integrar API com Frontend

**Objetivo:** Fazer a tabela exibir dados reais da API

**Passos:**
1. Adicionar `componentDidMount()` no TaskForm
2. Fazer GET para `/api/TaskList`
3. Atualizar state com `this.setState({ tasks: data })`
4. Usar `this.state.tasks` no BootstrapTable

---

### Desafio 2 (Intermediário): Seleção de Tarefa

**Objetivo:** Permitir selecionar tarefa na tabela para editar/deletar

**Passos:**
1. Adicionar `onRowClick` no BootstrapTable
2. Armazenar ID da tarefa selecionada no state
3. Popular formulário com dados da tarefa selecionada
4. Botão "Editar" atualiza tarefa selecionada
5. Botão "Deletar" remove tarefa selecionada

---

### Desafio 3 (Avançado): Migrar para React Hooks

**Objetivo:** Converter classe components para functional components

**Exemplo:**

```javascript
// Antes (Class Component)
class TaskForm extends Component {
    constructor() {
        super();
        this.state = { tasks: [] };
    }
    
    componentDidMount() {
        this.loadTasks();
    }
}

// Depois (Functional Component com Hooks)
function TaskForm() {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        loadTasks();
    }, []);
    
    const loadTasks = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTasks(data);
    };
}
```

---

### Desafio 4 (Expert): Adicionar TypeScript

**Objetivo:** Migrar projeto para TypeScript para type safety

**Passos:**

**Backend:**
Já é C# (tipado estaticamente) ✅

**Frontend:**

```bash
# Adicionar TypeScript ao projeto React
npm install --save typescript @types/node @types/react @types/react-dom

# Renomear arquivos .js para .tsx
mv src/App.js src/App.tsx
mv src/components/TaskForm.js src/components/TaskForm.tsx

# Criar interfaces
interface Task {
    id: number;
    title: string;
    description: string;
    status: boolean;
    creationDate: string;
    exclusionDate?: string;
    alterDate?: string;
}

interface TaskFormState {
    tasks: Task[];
    inputTaskTitleValue: string;
    inputTaskDescValue: string;
}
```

---

## 📞 FAQ (Perguntas Frequentes)

**Q: Preciso instalar SQL Server?**  
R: Não! O projeto usa InMemory Database. SQL Server é opcional para produção.

**Q: Por que usar InMemory Database?**  
R: Facilita desenvolvimento e testes. Sem configuração necessária.

**Q: Os dados ficam salvos?**  
R: Não. InMemory DB perde dados ao reiniciar. Use SQL Server para persistência.

**Q: Posso usar PostgreSQL em vez de SQL Server?**  
R: Sim! Instale `Npgsql.EntityFrameworkCore.PostgreSQL` e configure connection string.

**Q: React 16 não está desatualizado?**  
R: Sim! Recomenda-se atualizar para React 18+ e usar Hooks.

**Q: Por que Axios está instalado mas não usado?**  
R: Provavelmente planejado mas implementação usou Fetch API.

**Q: Como adicionar Swagger?**  
R: Instale `Swashbuckle.AspNetCore` e configure no Startup.cs.

**Q: Funciona offline?**  
R: Não. Requer API backend rodando. PWA pode adicionar suporte offline.

**Q: Posso usar este projeto comercialmente?**  
R: Sim, se licença for MIT ou similar.

---

## 🏆 Boas Práticas Demonstradas

### Backend

1. ✅ **RESTful design** - Verbos HTTP corretos
2. ✅ **Injeção de dependências** - Desacoplamento
3. ✅ **CORS habilitado** - Comunicação cross-origin
4. ✅ **ActionResult types** - Respostas tipadas
5. ✅ **Seed data** - Dados iniciais para testes
6. ✅ **InMemory DB** - Desenvolvimento rápido
7. ✅ **Roteamento por atributos** - `[Route]`

### Frontend

1. ✅ **Component-based** - Componentes reutilizáveis
2. ✅ **Controlled components** - Inputs controlados
3. ✅ **State management** - setState correto
4. ✅ **Event handling** - Handlers bem nomeados
5. ✅ **CSS separado** - Estilos organizados
6. ✅ **Bootstrap Table** - Tabela profissional
7. ✅ **Service Worker** - Base para PWA

---

## 🔄 Versionamento e Histórico

### Versões do Projeto

| Versão | Data | Alterações |
|--------|------|------------|
| 0.1.0 | 2018 | Versão inicial com CRUD básico |
| 1.0.0 | TBD | Integração completa frontend-backend |
| 2.0.0 | TBD | Autenticação e features avançadas |

---

## 📝 Licença

### MIT License

```
MIT License

Copyright (c) 2026 Junior Moreira Martins

Permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia
deste software e arquivos de documentação associados (o "Software"), para lidar
com o Software sem restrições, incluindo, sem limitação, os direitos de usar,
copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender
cópias do Software, e permitir que as pessoas a quem o Software é fornecido o
façam, sob as seguintes condições:

O aviso de copyright acima e este aviso de permissão devem ser incluídos em
todas as cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU
IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO,
ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. EM NENHUM CASO OS AUTORES OU
DETENTORES DE DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO,
DANOS OU OUTRA RESPONSABILIDADE, SEJA EM AÇÃO DE CONTRATO, ATO ILÍCITO OU DE
OUTRA FORMA, DECORRENTE DE, FORA DE OU EM CONEXÃO COM O SOFTWARE OU O USO OU
OUTRAS NEGOCIAÇÕES NO SOFTWARE.
```

---

## 👨‍💻 Autor e Créditos

### Desenvolvedor Principal

**Junior Moreira Martins**

- 🌐 **GitHub**: [@jrmoreiram](https://github.com/jrmoreiram)
- 📧 **E-mail**: [jumoreiram@gmail.com](mailto:jumoreiram@gmail.com)
- 💼 **LinkedIn**: [Perfil LinkedIn](https://www.linkedin.com/in/jumoreiram/)


---

## 🙏 Agradecimentos

- **Microsoft .NET Team** - Framework ASP.NET Core
- **Facebook/Meta** - Biblioteca React
- **Entity Framework Team** - EF Core ORM
- **Bootstrap Team** - Framework CSS
- **Comunidade Open Source** - Recursos e suporte

---

## 📚 Glossário Técnico

| Termo | Definição |
|-------|-----------|
| **API** | Application Programming Interface - Interface de comunicação entre aplicações |
| **CORS** | Cross-Origin Resource Sharing - Permite requisições entre domínios diferentes |
| **CRUD** | Create, Read, Update, Delete - Operações básicas de dados |
| **DbContext** | Classe do EF Core que gerencia conexão e operações de BD |
| **DTO** | Data Transfer Object - Objeto para transferência de dados |
| **Entity** | Classe que representa tabela no banco de dados |
| **InMemory DB** | Banco de dados armazenado em memória RAM (não persiste) |
| **JWT** | JSON Web Token - Padrão de autenticação stateless |
| **ORM** | Object-Relational Mapping - Mapeamento objeto-relacional |
| **REST** | Representational State Transfer - Estilo arquitetural para APIs |
| **SPA** | Single Page Application - App de página única |
| **State** | Estado interno de componente React |

---

## 🔗 Links Úteis

### Ferramentas de Desenvolvimento

- [Postman](https://www.postman.com/) - Cliente REST para testes
- [Swagger Editor](https://editor.swagger.io/) - Editor de documentação OpenAPI
- [JSON Formatter](https://jsonformatter.org/) - Formatar e validar JSON
- [.NET Fiddle](https://dotnetfiddle.net/) - C# online playground
- [CodeSandbox](https://codesandbox.io/) - React online editor

### Extensões VS Code Recomendadas

**Backend:**
- C# (Microsoft)
- NuGet Package Manager
- .NET Core Test Explorer
- REST Client

**Frontend:**
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Path Intellisense

---

## 🎓 Recursos de Aprendizado

### Cursos Online

**Backend:**
- [Microsoft Learn - ASP.NET Core](https://docs.microsoft.com/learn)
- [Pluralsight - ASP.NET Core Path](https://www.pluralsight.com/)
- [Udemy - Complete ASP.NET Core](https://www.udemy.com/)

**Frontend:**
- [React Official Tutorial](https://reactjs.org/tutorial)
- [Scrimba - Learn React](https://scrimba.com/learn/learnreact)
- [Frontend Masters - React Path](https://frontendmasters.com/)

**Full-Stack:**
- [Full Stack Open](https://fullstackopen.com/)
- [The Odin Project](https://www.theodinproject.com/)

---

### Livros Recomendados

**Backend:**
- "Pro ASP.NET Core MVC 2" - Adam Freeman
- "C# in Depth" - Jon Skeet
- "Entity Framework Core in Action" - Jon P Smith

**Frontend:**
- "React - Up & Running" - Stoyan Stefanov
- "Learning React" - Alex Banks, Eve Porcello
- "Fullstack React" - Anthony Accomazzo

---

## 🎉 Conclusão

**TaskListWeb** é um projeto full-stack completo que demonstra a integração entre **ASP.NET Core Web API** e **React**, implementando um sistema funcional de gerenciamento de tarefas. Com arquitetura desacoplada e tecnologias modernas, serve como excelente base tanto para aprendizado quanto para projetos reais.

### Principais Destaques

🏗️ **Arquitetura Full-Stack moderna**  
🔌 **API REST completa com CRUD**  
⚛️ **Frontend React componentizado**  
🗄️ **Entity Framework Core ORM**  
🌐 **CORS configurado para integração**  
📊 **Tabela avançada com ordenação**  
🚀 **Pronto para expansão**  

---

## 📊 Estatísticas do Projeto

- **Linguagens**: C#, JavaScript
- **Frameworks**: ASP.NET Core, React
- **Arquivos**: ~15
- **Linhas de código**: ~600
- **Endpoints REST**: 5
- **Componentes React**: 2
- **Padrões de projeto**: 6+

---

## ⚡ Quick Start (Início Rápido)

Para desenvolvedores experientes:

```bash
# Terminal 1 - Backend
cd task-list-web-master/api
dotnet restore && dotnet run

# Terminal 2 - Frontend
cd task-list-web-master/client-app
npm install && npm start

# Acessar:
# API: http://localhost:54814/api/TaskList
# App: http://localhost:3000
```

---

## 🐞 Issues Conhecidas

| Issue | Descrição | Prioridade | Status |
|-------|-----------|------------|--------|
| #1 | Tabela não carrega dados da API | Alta | 🔴 Aberto |
| #2 | IDs hardcoded em edit/delete | Alta | 🔴 Aberto |
| #3 | Sem feedback visual de loading | Média | 🔴 Aberto |
| #4 | Axios instalado mas não usado | Baixa | 🔴 Aberto |
| #5 | Sem validação de campos vazios | Média | 🔴 Aberto |

---

## 📬 Suporte e Comunidade

### Como Obter Ajuda

1. **Issues no GitHub** - Para bugs e features
2. **Stack Overflow** - Perguntas técnicas
3. **Discussions** - Discussões gerais
4. **Discord/Slack** - Chat em tempo real (se disponível)

### Reportar Bugs

**Template de issue:**

```markdown
**Descrição do Bug:**
Descrição clara e concisa do problema.

**Passos para Reproduzir:**
1. Vá para '...'
2. Clique em '...'
3. Veja o erro

**Comportamento Esperado:**
O que deveria acontecer.

**Comportamento Atual:**
O que está acontecendo.

**Ambiente:**
- OS: Windows 10
- .NET Core: 2.0
- Node.js: 14.17
- Navegador: Chrome 90

**Logs de Erro:**
```
[Cole logs aqui]
```
```

---

## 🌍 Internacionalização (i18n)

### Suporte a Múltiplos Idiomas (Futuro)

**Backend:**

```bash
dotnet add package Microsoft.Extensions.Localization
```

**Frontend:**

```bash
npm install react-i18next i18next
```

---

## 🔐 Variáveis de Ambiente

### Backend (.env ou secrets.json)

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=...;Database=...;User Id=...;Password=..."
  },
  "JwtSettings": {
    "SecretKey": "your-secret-key-here",
    "Issuer": "TaskListAPI",
    "Audience": "TaskListClient"
  }
}
```

### Frontend (.env)

```env
REACT_APP_API_BASE_URL=http://localhost:54814
REACT_APP_API_TIMEOUT=5000
REACT_APP_ENABLE_ANALYTICS=false
```

---

**Data da Última Atualização:** 28 de Março de 2026  
**Versão do README:** 2.0  
**Versão da Aplicação:** 0.1.0

---

> 💡 **Dica:** Este projeto é perfeito para aprender desenvolvimento full-stack com .NET Core e React. Use como base para seus projetos pessoais ou corporativos!

**⭐ Se este projeto foi útil, considere dar uma estrela no GitHub e compartilhar com a comunidade!**

---

**Desenvolvido com ❤️ e ☕ por Junior Moreira Martins**
