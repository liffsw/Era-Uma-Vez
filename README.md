# Era uma Vez

Site institucional (SPA) para uma ONG fictícia de acolhimento a crianças em situação de abandono, desenvolvido como projeto prático da disciplina de Desenvolvimento Front-end.

## Sobre o projeto

O site apresenta a missão da ONG, seus projetos sociais e um formulário de cadastro para voluntários e doadores. É construído como uma Single Page Application (SPA), com navegação controlada via JavaScript, sem recarregamento de página.

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 (Design System com variáveis customizadas, Flexbox, Grid, media queries)
- JavaScript (Vanilla JS, manipulação de DOM, localStorage)
- [IMask.js](https://imask.js.org/) — máscaras de input para CPF, telefone e CEP

## Estrutura de pastas

site/
├── html/ → index.html (estrutura da SPA)
├── css/ → style.css (estilização)
├── js/ → scripts organizados por responsabilidade
│ ├── dados.js → dados dos projetos da ONG
│ ├── templates.js → geração de HTML das páginas
│ ├── nav.js → navegação SPA e menu
│ └── form.js → validação de formulário e localStorage
└── imagens/ → arquivos de mídia


## Funcionalidades

- Navegação entre seções (Início, Projetos, Cadastro) sem recarregamento de página
- Formulário de cadastro com validação nativa e customizada (CPF, telefone, CEP)
- Máscaras de input em tempo real via IMask.js
- Persistência de dados do formulário via localStorage
- Layout responsivo (breakpoints para desktop, tablet e mobile)

## Como executar

Basta abrir o arquivo `html/index.html` em um navegador. Recomenda-se o uso de um servidor local (como a extensão Live Server, no VS Code) para evitar limitações do navegador ao trabalhar com arquivos locais.