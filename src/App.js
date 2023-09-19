import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import { useDarkMode } from './context/DarkModeContext';
import './styles/App.css'

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Header />
      <body className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <main className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <About />
          <Projects />
          <Footer />
        </main>
      </body>
    </>
  );
}

export default App;
