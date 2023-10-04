import React, { useCallback, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';


export const ThemeContext = React.createContext('null');

const App = () => {

  const [theme, setTheme] = useState('dark')
  const toggleTheme = () =>{
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <main className='main' id={theme}>
      <div className='switch'>
        <ReactSwitch 
        onChange={toggleTheme} 
        checked={theme === 'light'} 
        offHandleColor='#fff'
        checkedIcon=''
        uncheckedIcon=''/>          
      </div>
        <Header />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
        <Footer />
        <ScrollUp />
      </main>
    </ThemeContext.Provider>
  )
}

export default App
