import { NavLink } from "react-router-dom";
import './Nav.css';
import { Cart } from "../Cart/CartButton";
import { CartContainer } from "../Cart/CartContainer";
import { useState } from "react";
import { store } from "../store";

export function Nav() {
    const cartState = store.getState();
    const cartDispatch = store.dispatch;
    const [cartUse, setCartUse] = useState(false);

    const openCart = () => {
        setCartUse(!cartUse);
    }

    const navClick = () => {
        const ham = document.getElementById('hamburger');
        const info = document.querySelector('.mobile-nav');
        const links = document.querySelector('.mobile-nav__mobile-links'); 
    
        ham.addEventListener('click', () => {
            ham.classList.toggle('is-active');
            info.classList.toggle('is-active-info');
            
        })
    
        links.addEventListener('click', () => {
            ham.classList.toggle('is-active');
            info.classList.toggle('is-active-info');
        })
    }


    return (
        <header>
            <nav>
                <div className="nav__div nav-div-one">
                    <NavLink to={"/products"} className="nav__a"><p>Продукти</p></NavLink>
                    <NavLink to={"/blog"} className="nav__a"><p>Блог</p></NavLink>
                </div>
                <NavLink to={"/"} className="nav-main__a"><p>Hygiene</p></NavLink>
                <div className="nav__div nav-div-two">
                    <NavLink to={"/subscriptions"} className="nav__a"><p>Абонаменти</p></NavLink>
                    <NavLink to={"/about-us"} className="nav__a"><p>За нас</p></NavLink>
                </div>

                <button id="hamburger" onClick={navClick}>
                    <div className="bar"></div>
                </button>

                <Cart openCart={openCart} cartUse={cartUse} cart={cartState.cart}/>
                <CartContainer openCart={openCart} cartUse={cartUse} cart={cartState.cart} dispatch={cartDispatch}/>
            </nav>

            <nav className="mobile-nav" onClick={navClick}>
                <ul className="mobile-nav__mobile-links">
                    <NavLink to={'/'} className="mobile-links__navLink"><li>Начало</li></NavLink>
                    <NavLink to={'/products'} className="mobile-links__navLink"><li>Продукти</li></NavLink>
                    <NavLink to={'/blog'} className="mobile-links__navLink"><li>Блог</li></NavLink>
                    <NavLink to={'/subsriptions'} className="mobile-links__navLink"><li>Абонаменти</li></NavLink>
                    <NavLink to={'/about-us'} className="mobile-links__navLink"><li>За нас</li></NavLink>
                </ul>
            </nav>
        </header>
    );
}