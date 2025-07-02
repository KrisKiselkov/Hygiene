import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { store } from "../store";
import { removeItem } from "./cartSlice";
import './Cart.css';


export function CartContainer(props) {
    const { cart, cartUse } = props;
    const dispatch = store.dispatch;

    const [ cartElements, setCartElements ] = useState([]);

    const [ totalPrice, setTotalPrice ] = useState(0);
    
    const removeElement = (id) => {
        dispatch(removeItem(id))
    };
    
    const createCartItem = (prod) => {
        const { label, image, price, id, quantity } = prod;
        console.log(quantity);

        return (
            <div key={id} className="cart-prod">
                <figure className='cart-prod__figure'><img src={image} alt={label}></img></figure>
                <Link to={`/products/${id}`} className="cart-prod__cart-prod-desc">
                    <h3 className="cart-prod-desc__type">{label}</h3>
                    <h2 className="cart-prod-desc__price">$ {price.toLocaleString()}</h2>
                    <p>1 Week Delivery</p>

                    <p>Брой: {quantity}</p>
                </Link>
                <div className="cart-prod__remove" onClick={() => removeElement(id)}>
                    <h1>X</h1>
                </div>
            </div>
        );
    };
    
    useEffect(() => {
    const newCartElements = Object.values(cart).map(prod => createCartItem(prod));
    setCartElements(newCartElements);

    const newTotalPrice = Object.values(cart).reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    setTotalPrice(newTotalPrice);
    }, [cart]);

    return (
        <div className={`${cartUse ? "page-overlay" : "no-overlay"}`}>
            <div className={`cart-container ${cartUse ? "open-cart" : "closed-cart"}`}>
                <div className="cart-content">
                    <div className="cart-content__cart-header">    
                        <h2 className="cart-header__cart-h2">Your Shopping Cart ({cartElements.length})</h2>
                        <h2 id="x" onClick={props.openCart}>X</h2>
                    </div>
                    <div className="cart-content__container-body">
                        <div className="container-body__added-container">
                            {cartElements}
                        </div>
                        <div className="container-body__total-price">
                            <div>
                                <h2 className="total-price__h2">Total:</h2>
                                <h4 className="total-price__h2 shipping-h4">+ Shipping: $ 10,852.00</h4>
                                <h2 className="total-price__h2 cart-price">{cartElements.length ? `$ ${totalPrice.toLocaleString()}.00`: ` $ 0.00`}</h2>
                            </div>
                            <button id="checkout">To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    ) 
}