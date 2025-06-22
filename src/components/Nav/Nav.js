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

                <Cart openCart={openCart} cartUse={cartUse} cart={cartState.cart}/>
                <CartContainer openCart={openCart} cartUse={cartUse} cart={cartState.cart} dispatch={cartDispatch}/>
            </nav>
        </header>
    );
}