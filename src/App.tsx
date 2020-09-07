import React from 'react';
import { createGlobalStyle } from 'styled-components';

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
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        personal manifesto

        {/*
          Get paid for what you are worth rather than of who you are
          Produce more than you consume
          Gain experience rather than wealth
          There is no failure except in no longer trying
          Nothing ventured, nothing gained
          Stick to your values
          Key aspects should never change
          Opportunities don't happen. You create them.
          Learn from your mistakes
          Work together, play together
          Offer servers that difference
          Give honest and timely feedback
          Failure is not a waste of time
          People over profits
        */}
      </div>
    </>
  );
}

export default App;
