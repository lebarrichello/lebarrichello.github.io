import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import { useDarkMode } from './context/DarkModeContext';

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Header />
      <body className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <main className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <AboutMe/>
          <Projects />
          <Footer />
        </main>
      </body>
    </>
  );
}

export default App;
