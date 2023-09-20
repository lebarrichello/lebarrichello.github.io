import appReceitas from '../assets/app-receitas.png';
import triviaTrybe from '../assets/trivia-trybe.png';
import trybeTunes from '../assets/trybe-tunes.png';
import solarSystem from '../assets/solar-system.png';
import pixelsArt from '../assets/pixels-art.png';

export const projects = [
  {
    title: 'CookBook - APP',
    image: appReceitas,
    description: 'Aplicação front-end que consome duas APIs públicas, onde o usuário pode visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o progresso das receitas. Este projeto foi desenvolvido como parte do curso de Desenvolvimento Web da Trybe.',
    skills: ['react', 'testing-library', 'javascript', 'html5', 'css3'],
    source: `https://github.com/lebarrichello/recipes-app`,
    demo: `https://recipes-app-pi-lake.vercel.app/`,
    slug:'github',
  },
  

  {
    title: 'Trivia Trybe',
    image: triviaTrybe,
    description: 'Aplicação front-end que consome uma API pública para criar um jogo no estilo "trivia" de perguntas e respostas com níveis de dificuldade variados. Ao final do jogo, o jogador pode verificar um ranking. Este projeto foi desenvolvido como parte do curso de Desenvolvimento Web da Trybe.',
    skills: ['react', 'redux', 'javascript', 'html5', 'css3'],
    source: `https://github.com/lebarrichello/project-trivia-react-redux`,
    demo: `https://project-trivia-react-redux-lebarrichello.vercel.app/`,
    slug:'github',
  },
  
  {
    title: 'TrybeTunes',
    image: trybeTunes,
    description: 'Aplicação front-end que consome uma API de musicas , na qual o usuário pode pesquisar álbuns, artistas e bandas, ouvir e favoritar músicas. Este projeto foi desenvolvido como parte do curso de Desenvolvimento Web da Trybe.',
    skills: ['react', 'javascript', 'css3'],
    source: `https://github.com/lebarrichello/trybetunes-lebarrichello`,
    demo: `https://trybetunes-lebarrichello.vercel.app/#/`,
    slug:'github',
  },
  
  {
    title: 'Solar System',
    image: solarSystem ,
    description: 'Página que contém uma lista dos planetas e uma lista de missões espaciais. Este projeto foi desenvolvido como parte do curso de Desenvolvimento Web da Trybe.',
    skills: ['react', 'javascript', 'html5', 'css3'],
    source: `https://github.com/lebarrichello/solar-system-lebarrichello`,
    demo: `https://solar-system-lebarrichello.vercel.app/`,
    slug:'github',
  },
  {
    title: 'Pixels Art',
    image: pixelsArt,
    description: 'Página que contém um quadro de pixels, na qual o usuário pode escolher uma cor aleatória e pintar, formando assim uma arte pixelada. Este projeto foi desenvolvido como parte do curso de Desenvolvimento Web da Trybe.',
    skills: ['javascript', 'html5', 'css3'],
    source: `https://github.com/lebarrichello/pixel-art-lebarrichello`,
    demo: `https://pixel-art-lebarrichello.vercel.app/`,
    slug:'github',
  },
];
