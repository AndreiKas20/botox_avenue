import React from 'react';
import './App.scss';
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
      </Container>
    </div>
  );
}

export default App;
