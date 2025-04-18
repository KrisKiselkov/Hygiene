import { NavLink } from "react-router-dom";
import './Nav.css';


export function Nav() {
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
            </nav>
        </header>
    );
}