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
    return <header className='header'>
        <h1>Fast React Pizza Co.</h1>
    </header>
}

function Menu() {
    return <main className='menu'>
        <h2>Our Menu</h2>
        <Pizza name='Pizza Spinaci'
               ingredients='Tomato, mozarella, spianch, and ricotta cheese'
               photoName='../pizzas/spinaci.jpg'
               price={10}/>

        <Pizza name='Pizza Funghi'
               ingredients='Tomato, mushrooms'
               price={12}
               photoName='../pizzas/funghi.jpg'
               />
    </main>;
}

function Pizza(props) {
    console.log(props);
    return (<div className="pizza">
        <img src={props.photoName} alt={props.name}/>
        <div>
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
            <span>{props.price}</span>
        </div>
    </div>);
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
