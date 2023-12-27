import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import MoonIcon from './components/MoonIcon';
import SunIcon from './components/SunIcon';
import Switch from './components/Switch';

function App() {
  const [theme, setTheme] = useState("light")
  const isDarkTheme = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark")
  }

  const StyledApp = styled.div`
    min-height: 100vh;
    text-align: center;
    padding-top: 10rem;
    background-color: ${(props) => (props.theme.body)} ;
  `
  
  const Name = styled.h1`
  margin: 1rem;
  color: ${(props) => (props.theme.title)}
  `
  const Info = styled.p`
  margin: 1rem;
  color: ${(props) => (props.theme.subtitle)}
  `

  const darkTheme = {
    body: "#1c1c1c",
    title: '#fff',
    subtitle: "#b6b6b6"
  }

  const lightTheme = {
    body: "#fff",
    title: "#1c1c1c",
    subtitle: "#333"
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <StyledApp>
      <SunIcon />
      <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <MoonIcon />
      <Name>Princess Morris</Name> 
      <Info>Username: Pmorris</Info>
      <Info>Email: p.m@gmail.com</Info>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
