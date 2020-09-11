import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Header, Aside, Main, Footer } from "./components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    --monaco-monospace-font: 'Fira Code', 'SF Mono', Monaco, Menlo, Consolas, Courier, 'Coerier New', monospace;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(37,37,38);
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Aside />
      <Main />
      <Footer />
    </>
  );
}

export default App;
