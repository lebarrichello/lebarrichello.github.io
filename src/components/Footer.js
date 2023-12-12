import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { GoMail} from 'react-icons/go';
import { useDarkMode } from '../context/DarkModeContext';

import '../styles/Footer.css';

function Footer(props) {
    const { isDarkMode } = useDarkMode();



    return (
      <>
      <footer className={`footer ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <div className="container_icons">
            <div className='icon-name'>
            <a className="social-icon" href="https://github.com/lebarrichello" target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
            <span>Github</span>
            </div>

            <div className='icon-name'>
            <a className="social-icon" href="https://linkedin.com/in/lebarrichello" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <span>Linkedin</span>
            </div>
        
            <div className='icon-name'>
            <a className="social-icon" href="mailto:leticia.barrichello@gmail.com" target="_blank" rel="noreferrer">
              <GoMail/>
            </a>
            <span>E-mail</span>
            </div>

          </div>
          {"Desenvolvido por Letícia Barrichello | 👩‍💻 "}
        </footer>
      </>
    );
  }

 
export default Footer;
