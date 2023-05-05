import ibirita from "../assets/projetos/ibirita.png";
import ibiritaGif from "../assets/projetos/gif/ibirita.gif";
import webScrap from "../assets/projetos/web-scrap.png";
import webScrapGif from "../assets/projetos/gif/web-scrap.gif";
import tabelaDoCampeonato from "../assets/projetos/tabela-do-campeonato.png";
import tabelaDoCampeonatoGif from "../assets/projetos/gif/tabela-do-campeonato.gif";
import ultracar from "../assets/projetos/ultracar-lite.png";
import ultracarGif from "../assets/projetos/gif/ultracar-lite.gif";
import exchangeWallet from "../assets/projetos/exchange-wallet.png";
import exchangeWalletGif from "../assets/projetos/gif/exchange-wallet.gif";
import appDeReceitas from "../assets/projetos/app-de-receitas.png";
import appDeReceitasGif from "../assets/projetos/gif/app-de-receitas.gif";
import pokedex from "../assets/projetos/pokedex.png";
import pokedexGif from "../assets/projetos/gif/pokedex.gif";
import musicTunes from "../assets/projetos/music-tunes.png";
import musicTunesGif from "../assets/projetos/gif/music-tunes.gif";
import shoppingCart from "../assets/projetos/shopping-cart.png";
import shoppingCartGif from "../assets/projetos/gif/shopping-cart.gif";
import carShop from "../assets/projetos/car-shop.png";
import carShopGif from "../assets/projetos/gif/car-shop.gif";
import storeManager from "../assets/projetos/store-manager.png";
import storeManagerGif from "../assets/projetos/gif/store-manager.gif";
import techNewsScrap from "../assets/projetos/tech-news-scrap.png";
import inventoryReport from "../assets/projetos/inventory-report.png";
import smithProject from "../assets/projetos/smith-project.png";
import smithProjectGif from "../assets/projetos/gif/smith-project.gif";
import blogsAPI from "../assets/projetos/blogs-api.png";
import blogsAPIGif from "../assets/projetos/gif/blogs-api.gif";
import dungeousAndDragons from "../assets/projetos/dungeous-and-dragons.png";
import dungeousAndDragonsGif from "../assets/projetos/gif/dungeous-and-dragons.gif";
// import construction from "../assets/projetos/construction.png";

export const fullProjects = [
  {
    id: 1,
    name: "iBirita Delivery App",
    src: ibirita,
    gif: ibiritaGif,
    href: "https://delivery-app-lovat.vercel.app/login",
    repository: "https://github.com/Rafael-Souza-97/ibirita-delivery-app",
    description: 'O iBirita é um app de delivery de bebidas com telas de login e cadastro para clientes, vendedores e administradores, desenvolvido por 5 devs. Ele inclui variedade de produtos, checkout e rastreio de pedidos com tecnologias modernas.',
    style: "shadow-yellow-400",
    showDescription: false,
    hover: false,
  },
  {
    id: 2,
    name: "Web Scrap",
    src: webScrap,
    gif: webScrapGif,
    repository: "https://github.com/Rafael-Souza-97/web-scrap",
    description: 'Web Scrap é um software fullstack para web scraping de produtos em lojas online. Utiliza TypeScript, Javascript, React, Node, Sequelize e Puppeteer. O usuário pode pesquisar por um produto em lojas como Buscapé e Mercado Livre, e exibir suas principais informações.',
    style: "shadow-gray-300",
    showDescription: false,
    hover: false,
  },
  {
    id: 3,
    name: "Tabela do Campeonato",
    src: tabelaDoCampeonato,
    gif: tabelaDoCampeonatoGif,
    repository: "https://github.com/Rafael-Souza-97/tabela-do-campeonato",
    description: 'Tabela do Campeonato é um site informativo de futebol com API e back-end dockerizado. Permite verificar a tabela geral, filtrar por jogos em casa e fora, adicionar e atualizar partidas (logado).',
    style: "shadow-teal-300",
    showDescription: false,
    hover: false,
  },
]

export const frontProjects = [
  {
    id: 1,
    name: "Ultracar lite",
    src: ultracar,
    gif: ultracarGif,
    href: "https://ultracar-lite.vercel.app/",
    repository: "https://github.com/Rafael-Souza-97/ultracar-lite",
    description: 'O Ultracar lite é um software de um desafio técnico que tinha um prazo de 32 horas para ser desenvolvido. O objetivo era criar uma versão simplificada do software de gestão de uma oficina inspirado na Ultracar, com o front-end mockado.',
    style: "shadow-blue-400",
    showDescription: false,
    hover: false,
  },
  {
    id: 2,
    name: "Exchange Wallet",
    src: exchangeWallet,
    gif: exchangeWalletGif,
    href: "https://exchange-wallet-bay.vercel.app/",
    repository: "https://github.com/Rafael-Souza-97/exchange-wallet",
    description: 'Exchange Wallet é uma carteira de controle de gastos com conversor de moedas, que utiliza uma API de Cotações de Moedas. O usuário pode adicionar, editar e excluir despesas com cotações atualizadas em tempo real.',
    style: "shadow-rose-300",
    showDescription: false,
    hover: false,
  },
  {
    id: 3,
    name: "App de Receitas",
    src: appDeReceitas,
    gif: appDeReceitasGif,
    href: "https://app-de-receitas-pink.vercel.app/",
    repository: "https://github.com/Rafael-Souza-97/app-de-receitas",
    description: 'O aplicativo de receitas (web mobile) foi desenvolvido por uma equipe de 5 desenvolvedores usando metodologias ágeis, JavaScript, React, RTL e Jest. O aplicativo possui recursos de pesquisa, favoritos, tutoriais em vídeo e progresso de preparação.',
    style: "shadow-orange-600",
    showDescription: false,
    hover: false,
  },
  {
    id: 4,
    name: "Pokédex",
    src: pokedex,
    gif: pokedexGif,
    href: "https://rafael-pokedex-challenge.vercel.app/",
    repository: "https://github.com/Rafael-Souza-97/pokedex",
    description: 'A Pokédex (enciclopédia virtual de Pokémons) foi desenvolvida como parte de um desafio técnico, utilizando Typescript, React e testes automatizados. O Dark Mode e a estilização foram feitos com CSS puro.',
    style: "shadow-yellow-400",
    showDescription: false,
    hover: false,
  },
  {
    id: 5,
    name: "Music Tunes",
    src: musicTunes,
    gif: musicTunesGif,
    href: "https://frontend-online-store-peach.vercel.app/",
    repository: "https://github.com/Rafael-Souza-97/frontend-online-store",
    description: 'Desenvolvido em Javascript, React e testes automatizados, o Music Tunes utiliza a API do iTunes para listar álbuns, artistas e músicas. Com ele, é possivel reproduzir previews, pesquisar, favoritar, e criar playlists de músicas favoritas.',
    style: "shadow-purple-500",
    showDescription: false,
    hover: false,
  },
  {
    id: 6,
    name: "Shopping Cart",
    src: shoppingCart,
    gif: shoppingCartGif,
    href: "https://shopping-cart-roan-one.vercel.app/",
    repository: "https://github.com/Rafael-Souza-97/shopping-cart",
    description: 'O Shopping Cart é um app em Javascript Vanilla com CSS e Bootstrap, que usa a API do Mercado Livre para simular loja online. Tem campo de busca por produtos, marcas e preços, e permite adicionar itens ao carrinho.',
    style: "shadow-gray-400",
    showDescription: false,
    hover: false,
  },
];

export const backProjects = [
  {
    id: 1,
    name: "Car Shop",
    src: carShop,
    gif: carShopGif,
    repository: "https://github.com/Rafael-Souza-97/car-shop",
    description: 'Neste projeto, foram criadas APIs com CRUD para o gerenciamento de uma concessionária de veículos, utilizando Typescript com POO e MongoDB com Mongoose, além de testes automatizados para garantir a confiabilidade do código.',
    style: "shadow-blue-600",
    showDescription: false,
    hover: false,
  },
  {
    id: 2,
    name: "Store Manager",
    src: storeManager,
    gif: storeManagerGif,
    repository: "https://github.com/Rafael-Souza-97/store-manager",
    description: 'O projeto consiste em desenvolver um sistema de gerenciamento de vendas no formato dropshipping, em que é possível procurar, criar, visualizar e deletar produtos e vendas (CRUD). A aplicação utiliza uma API RESTful com arquitetura MSC.',
    style: "shadow-sky-300",
    showDescription: false,
    hover: false,
  },
  {
    id: 3,
    name: "Tech News Scrap",
    src: techNewsScrap,
    // gif: techNewsScrapGif,
    repository: "https://github.com/Rafael-Souza-97/tech-news-scrap",
    description: 'Tech News Scrap é um projeto em Python que possibilita a consulta de notícias sobre tecnologia por meio da raspagem de dados de um blog utilizando a biblioteca Parsel. A solução extrai o conteúdo HTML e o armazena no banco de dados MongoDB.',
    style: "shadow-green-200",
    showDescription: false,
    hover: false,
  },
  {
    id: 4,
    name: "inventory Report",
    src: inventoryReport,
    // gif: inventoryReportGif,
    repository: "https://github.com/Rafael-Souza-97/inventory-report",
    description: 'O projeto Inventory Report implementa um gerador de relatórios de estoque utilizando Programação Orientada a Objetos em Python. A aplicação lê arquivos nos formatos CSV, JSON ou XML e gera relatórios simples ou completos.',
    style: "shadow-orange-600",
    showDescription: false,
    hover: false,
  },
  {
    id: 5,
    name: "Smith Project",
    src: smithProject,
    gif: smithProjectGif,
    repository: "https://github.com/Rafael-Souza-97/smith-project",
    description: 'O Smith Project desenvolve o back-end de uma loja de itens medievais com API REST e arquitetura de software em camadas MSC. Oferece a possibilidade para a criação e leitura de usuários e produtos na aplicação.',
    style: "shadow-rose-300",
    showDescription: false,
    hover: false,
  },
  {
    id: 6,
    name: "Blogs-API",
    src: blogsAPI,
    gif: blogsAPIGif,
    repository: "https://github.com/Rafael-Souza-97/blogs-api",
    description: 'Blogs-API é uma aplicação back-end com APIs desenvolvidas em Express com arquitetura MSC, permitindo a busca, criação, visualização e remoção de usuáriose posts em um blog. Utiliza uma API RESTful para fornecer acesso aos recursos.',
    style: "shadow-white",
    showDescription: false,
    hover: false,
  },
]

export const otherProjects = [
  {
    id: 1,
    name: "Dungeons & Dragons",
    src: dungeousAndDragons,
    gif: dungeousAndDragonsGif,
    repository: "https://github.com/Rafael-Souza-97/dungeons-and-dragons",
    description: 'Dungeons & Dragons é um RPG de aventura onde os jogadores controlam personagens de raças distintas. Batalhas são realizadas com mecanismos de progresso como vida, força, energia e level para evolução dos personagens usando Typescript e POO.',
    style: "shadow-red-500",
    showDescription: false,
    hover: false,
  },
]
