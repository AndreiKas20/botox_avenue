import React from 'react';
import './App.scss';
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import MoreServices from "./components/MoreServices/MoreServices";

function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
        <Services/>
        <MoreServices/>
      </Container>
    </div>
  );
}

export default App;
