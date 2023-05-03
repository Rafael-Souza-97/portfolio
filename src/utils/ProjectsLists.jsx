import ibirita from "../assets/projetos/ibirita.png";
import ibiritaGif from "../assets/projetos/gif/ibirita.gif";
import webScrap from "../assets/projetos/web-scrap.png";
import webScrapGif from "../assets/projetos/gif/web-scrap.gif";
import tabelaDoCampeonato from "../assets/projetos/tabelaDoCampeonato.png";
import tabelaDoCampeonatoGif from "../assets/projetos/gif/tabelaDoCampeonato.gif";
import ultracar from "../assets/projetos/ultracar-lite.png";
import ultracarGif from "../assets/projetos/gif/ultracar-lite.gif";
import exchangeWallet from "../assets/projetos/exchangeWallet.png";
import exchangeWalletGif from "../assets/projetos/gif/exchangeWallet.gif";
import appDeReceitas from "../assets/projetos/appDeReceitas.png";
import appDeReceitasGif from "../assets/projetos/gif/app-de-receitas.gif";
import pokedex from "../assets/projetos/pokedex.png";
import pokedexGif from "../assets/projetos/gif/pokedex.gif";
import musicTunes from "../assets/projetos/musicTunes.png";
import musicTunesGif from "../assets/projetos/gif/music-tunes.gif";
import shoppingCart from "../assets/projetos/shoppingCart.png";
import shoppingCartGif from "../assets/projetos/gif/shoppingCart.gif";
import carShop from "../assets/projetos/carShop.png";
import jobsInsights from "../assets/projetos/jobsInsights.png";
import blogsAPI from "../assets/projetos/blogsAPI.png";
import dungeousAndDragons from "../assets/projetos/dungeousAndDragons.png";
import storeManager from "../assets/projetos/storeManager.png";
import smithProject from "../assets/projetos/smithProject.png";
// import construction from "../assets/projetos/construction.png";

export const fullProjects = [
  {
    id: 1,
    name: "iBirita Delivery App",
    src: ibirita,
    gif: ibiritaGif,
    href: "https://delivery-app-lovat.vercel.app/login",
    repository: "https://github.com/Rafael-Souza-97/ibirita-delivery-app",
    description: 'O iBirita é um app de delivery de bebidas com telas de login e cadastro para clientes, vendedores e administradores, desenvolvido por 5 devs. Ele inclui variedade de produtos, checkout e rastreamento de pedidos com tecnologias modernas.',
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
    description: 'Web Scrap é um software fullstack para web scraping de produtos em lojas online. Utiliza TypeScript, React, JavaScript, Node.js, Sequelize e Puppeteer. O usuário pode pesquisar por um produto específico em lojas como Buscapé e Mercado Livre, e exibir suas principais infos.',
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
    description: '"Tabela do Campeonato" é um site informativo de futebol com API e back-end dockerizado. Permite verificar a tabela geral, filtrar por jogos em casa e fora, adicionar e atualizar partidas (logado).',
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
    description: 'O app de receitas (web mobile) foi desenvolvido por uma equipe de 5 devs usando metodologias ágeis, JavaScript, React, RTL e Jest. O app possui funcionalidades de busca, favoritos, tutoriais em vídeo e progresso de preparação.',
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
    description: 'A Pokédex (enciclopédia virtual de Pokémons) foi desenvolvida como parte de um desafio técnico, utilizando React, Typescript e testes automatizados. A estilização foi feita com CSS puro, incluindo dark mode.',
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
    description: 'Desenvolvido em Javascript, React e testes automatizados, o Music Tunes utiliza a API do iTunes para listar álbuns, artistas e músicas. Nele, é possivel reproduzir previews, pesquisar, favoritar, e criar playlists de músicas favoritas.',
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
    repository: "https://github.com/Rafael-Souza-97/car-shop",
    style: "shadow-blue-600"
  },
  {
    id: 2,
    name: "Jobs Insights",
    src: jobsInsights,
    repository: "https://github.com/Rafael-Souza-97/jobs-insights",
    style: "shadow-gray-400"
  },
  {
    id: 3,
    name: "Blogs-API",
    src: blogsAPI,
    repository: "https://github.com/Rafael-Souza-97/blogs-api",
    style: "shadow-indigo-400",
  },
  {
    id: 4,
    name: "Dungeons & Dragons",
    src: dungeousAndDragons,
    repository: "https://github.com/Rafael-Souza-97/dungeons-and-dragons",
    style: "shadow-red-500"
  },
  {
    id: 5,
    name: "Store Manager",
    src: storeManager,
    repository: "https://github.com/Rafael-Souza-97/store-manager",
    style: "shadow-sky-600",
  },
  {
    id: 6,
    name: "Smith Project",
    src: smithProject,
    repository: "https://github.com/Rafael-Souza-97/smith-project",
    style: "shadow-rose-300"
  },
]
