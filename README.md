# Teste Técnico Avanti - Buscador de Perfil GitHub

<div>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React.js Badge">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS Badge">
    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge">
</div>

## Sobre o Projeto

Este projeto consiste em uma aplicação **React** com **TypeScript** que permite buscar perfis de usuários do GitHub, exibindo informações como nome, foto de perfil e bio, conforme o layout fornecido no Figma. A aplicação faz uso de **Tailwind CSS** para estilização e utiliza a **API do GitHub** para obter os dados do perfil.

### Funcionalidades Principais

- **Campo de busca** para digitar o nome de um perfil do GitHub.
- **Exibição das informações** do usuário, incluindo:
  - Foto de perfil
  - Nome do usuário (caso não esteja disponível, será exibido o login do usuário)
  - Bio
- **Mensagens de erro** caso o perfil não seja encontrado.
- **Estilização com Tailwind CSS** conforme o design no Figma.

---

## Pré-requisitos

Para rodar o projeto localmente, você precisará das seguintes ferramentas instaladas:

- **Node.js** (v16.x ou superior)
- **npm** (gerenciador de pacotes)

---

## Para Rodar a Aplicação

Siga os passos abaixo para rodar o projeto:

### 1. Clone o Repositório

```bash
git clone <URL-do-repositório>
```

### 2. Acesse o Diretório

```bash
cd <nome-do-diretório>
```

### 3. Instale as Dependências

```bash
npm install
```

### 4. Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

---

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
src/
├── assets/              # Recursos visuais
│   ├── bg/              # Imagens de fundo
│   ├── icons/           # Ícones usados na aplicação
│   └── logos/           # Logotipos do projeto
├── components/          # Componentes reutilizáveis
│   ├── card.tsx         # Componente para exibir informações do perfil
│   └── search-bar.tsx   # Componente para o campo de busca
├── services/            # Serviços de integração com a API do GitHub
│   └── api/             # Arquivo para chamadas à API do GitHub
├── styles/              # Estilos
│   ├── colors.css       # Definições de cores customizadas
│   └── index.css        # Estilos globais
└── types/               # Tipagens TypeScript para o projeto
    └── user-profile.ts  # Tipagem para os dados do perfil do GitHub
```
