import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzas = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


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
    const numPizzas = pizzas.length;

    return <main className="menu">
        <h2>Our Menu</h2>{
        numPizzas > 0
            ?
            (<><p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone, all organic, all
                delicious.
            </p>
                <ul className="pizzas">
                    {pizzas.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name}/>
                    )}
                </ul>
            </>) : (<p>We are still working on our menu, please come back later!</p>)
    }

        {/*<Pizza name='Pizza Spinaci'*/}
        {/*       ingredients='Tomato, mozarella, spianch, and ricotta cheese'*/}
        {/*       photoName='../pizzas/spinaci.jpg'*/}
        {/*       price={10}/>*/}

        {/*<Pizza name='Pizza Funghi'*/}
        {/*       ingredients='Tomato, mushrooms'*/}
        {/*       price={12}*/}
        {/*       photoName='../pizzas/funghi.jpg'*/}
        {/*/>*/}
    </main>;
}

function Pizza({pizzaObj}) {
    console.log(pizzaObj);
    //if (pizzaObj.soldOut) return null;

    return (<div className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
        </div>
    </div>);
}

function Order({closeHour}) {
    return <div className="order">
        <p>We're open until {closeHour}:00. Come visit us or order online</p>
        <button className="btn">Open</button>
    </div>;
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // if ( hour >= openHour && hour <= closeHour )
    //     alert("We're currently open!");
    //

    return (<footer className='footer'>
        {isOpen ?
            (<Order closeHour={closeHour}/>) : (
                <p className="order">We are waiting you between {openHour}:00 and {closeHour}:00.</p>)}
    </footer>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
