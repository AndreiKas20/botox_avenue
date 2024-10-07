import React from 'react';
import './App.scss';
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import MoreServices from "./components/MoreServices/MoreServices";
import Training from "./components/Training/Training";
import OrderCall from "./components/OrderCall/OrderCall";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Container>
                <Header/>
                <Services/>
                <MoreServices/>
                <Training/>
                <OrderCall/>
                <Footer/>
            </Container>0
0        </div>
    );
}

export default App;
