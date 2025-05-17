import React from 'react';
import './App.css';
import {GlobalStyle} from './styles/GlobalStyles'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;
