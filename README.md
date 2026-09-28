# Jarvis

Interface web de um assistente de IA, construída com React e Tailwind CSS. A tela permite escrever uma mensagem, escolher entre os modos **Rápido** e **Especialista** e alternar as opções **Pensamento profundo** e **Pesquisa Inteligente**.

> Este projeto contém apenas a interface. O envio ainda não está conectado a um modelo de IA ou a um backend.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Oxlint

## Pré-requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Como executar

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev

# Gerar o build de produção
npm run build

# Visualizar o build localmente
npm run preview

# Executar o linter
npm run lint
```

Depois de iniciar o servidor, abra a URL exibida no terminal (normalmente `http://localhost:5173`).

## Estrutura do projeto

```text
src/
├── components/
│   ├── header/       # Título do projeto
│   ├── layout/       # Layout principal
│   ├── mode/         # Seleção do modo de resposta
│   ├── search/       # Campo de mensagem e controles
│   └── ui/           # Botões reutilizáveis
├── types/
│   └── chat.ts       # Tipo dos modos de chat
├── App.tsx           # Estado da interface e composição
├── index.css         # Estilos globais
└── main.tsx          # Ponto de entrada React
```

## Deploy no GitHub Pages

<<<<<<< HEAD
https://dienieper.github.io/projeto-ia-tailwind/
=======



>>>>>>> db60034ecc4cad42ebf5e43a6ce64233800e0884
