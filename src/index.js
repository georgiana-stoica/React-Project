import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
    return (
        <div>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    );
}

function Header() {
    //const style = {color: 'red', fontsize: '32px', textTransform: 'uppercase'};
    const style = {};
    return <header className='header'>
        <h1>Fast React Pizza Co.</h1>
    </header>
}

function Menu() {
    return <main className='menu'>
        <h2>Our Menu</h2>
        <Pizza/>
        <Pizza/>
        <Pizza/>
    </main>;
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // if ( hour >= openHour && hour <= closeHour )
    //     alert("We're currently open!");
    //

    return <footer className='footer'>{new Date().toLocaleTimeString()} We're currently open!</footer>;
}

function Pizza() {
    return (<div>
        <img src="../pizzas/spinaci.jpg" alt="Pizza Spinaci"/>
        <h3>Pizza Spinaci</h3>
        <p>Tomato, mozarella, spianch, and ricotta cheese</p>
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
