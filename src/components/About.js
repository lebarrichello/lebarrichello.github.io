import React from 'react';
import { tools } from '../data/tools';
import ToolBadge from '../components/ToolBadge';
import { useDarkMode } from '../context/DarkModeContext';
import '../styles/About.css';

function About() {
    const { isDarkMode } = useDarkMode();

    return (
        <section className={`footer ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="container__about">
                <div className="container_photo">
                    <div className="photo"></div>
                </div>
                
                <div className="text-about">
  <b>Olá! Meu nome é <span style={{ color: '#ff4542' }}>Letícia Barrichello</span>, e estou atualmente em transição de carreira, embarcando em uma jornada de aprendizado e crescimento no campo do desenvolvimento web. Atualmente estou estudando na Trybe, onde estou me dedicando a adquirir as habilidades necessárias para criar experiências digitais incríveis.</b>
</div>


                    <div className="teste">
                        <h3>Algumas linguagens e ferramentas que conheço:</h3>
                        <div className="tools-container">
                            {tools.map((item) => <ToolBadge item={item} key={item.slug} />)}
                        </div>
                    </div>

                </div>
           
        </section>
    );
}

export default About;
