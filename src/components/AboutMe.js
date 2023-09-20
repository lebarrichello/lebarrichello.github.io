import React from 'react'; // Removido o Component
import { tools } from '../data/tools';
import ToolBadge from '../components/ToolBadge';
import { useDarkMode } from '../context/DarkModeContext';
import octocat from '../images/octocat3.png'
import octocat2 from '../images/octocat4.png'
import '../styles/Intro.css';

function AboutMe() {
  const { isDarkMode} = useDarkMode();

  return (
    <div className={`container__about ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <section id="about">
        <div className="container__about-infos">
          <p className="info-header">Olá, meu nome é</p>
          <p className="info-name">Letícia Barrichello.</p>
          <p className="info-skills">Desenvolvedora Web Full Stack.</p>
          <p className="info-text">
            Estou atualmente em transição de carreira,
            embarcando em uma jornada de aprendizado e crescimento no campo do desenvolvimento web. Estudando na <a className="trybe-link bold" href="https://betrybe.com" target="_blank" rel="noreferrer">Trybe</a>, onde estou me dedicando a adquirir as habilidades necessárias para criar experiências digitais incríveis.
          </p>

          <div className="container__tools">
            
            <h3>Algumas linguagens e ferramentas que conheço:</h3>
            <div className="tools-container">
              {tools.map((item) => <ToolBadge item={item} key={item.slug} />)}
            </div>
          </div>
        </div>

        <div className="image-draw">
        <img
  src={isDarkMode ? octocat2 : octocat}
  alt="Octocat Draw"
/>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
