import "./ProductPage.css";
import { Nav } from '../Nav/Nav';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsArray } from "../ProductsArray";
import { Link } from "react-router-dom";
import stars from '../../images/5-star-rating.webp';
import { Footer } from "../Footer/Footer";
import { store } from "../store";
import { addItem } from "../Cart/cartSlice";


export function ProductPage() {
    const dispatch = store.dispatch;

    const { id } = useParams();
    const product = productsArray.filter((item) => item.id === id);

    const [image, setImage] = useState(product[0].image);

    useEffect(() => {
        if (product) {
            setImage(product[0].image)
        }
    }, [image]);

    const { label, price } = product[0];

    const [ prodNum, setProdNum ] = useState(1);

    const addProdFunc = (prod) => {
        dispatch(addItem(prod))
    };

    const ymlArray = [];
    for(let i = 0; i < 5; i++) {
        ymlArray.push(productsArray[i]);
    };

    const ymlProducts = () => {
        try {
            return (
                ymlArray.map((prod, index) => (
                    <Link to={`/products/${prod.id}`} className='mb-products__product-div yml--product-div' key={index}>
                        <button className='product-div__atc-btn'><img src={require('../../images/shopping_cart_24dp_181818_FILL0_wght400_GRAD0_opsz24.png')}></img></button>
                        <figure className='product-div__figure'><img src={prod.image}></img></figure>
                                 
                        <div className='product-div__bottom-part'>
                            <p className='bottom-part__product-label'>{prod.label}</p>
                            <p className='bottom-part__product-price'>${prod.price}</p>
                        </div>
                    </Link>
                        
                ))
            )
        } catch(error) {
            console.log(error);
        }         
    }

    const [activeQ, setActiveQ] = useState("q1");

    const openQ = (id) => {
        setActiveQ(activeQ === id ? "" : id);
    };

    const getClassAnswer = (id) => {
        return activeQ === id ? "active-answer" : "";
    };

    const getClassQuestion = (id) => {
        return activeQ === id ? "active-question" : "";
    };

    const [input, setInput] = useState('');

    const inputText = (e) => {
        setInput(e.target.value);
    }


    return (
        <>
            <Nav />
            <section className="product">
                <div className="product__product-main">
                    <div className="product-main__product-img-div">
                        <div className="product-img-div__product-all-img">
                            <figure className="product-all-img__figure"><img src={image}></img></figure>

                            <figure className="product-all-img__figure"><img src={image}></img></figure>

                            <figure className="product-all-img__figure"><img src={image}></img></figure>

                            <figure className="product-all-img__figure"><img src={image}></img></figure>
                        </div>

                        <div className="product-img-div__product-main-img">
                            <figure className="product-main-img__figure">
                                <img src={image}></img>
                            </figure>
                        </div>
                    </div>

                    <div className="product-main__product-info-div">
                        <p className="product-info-div__brand-p">Hygiene</p>
                        <h2 className="product-info-div__h2">{label}</h2>
                        <div className="product-info-div__product-rating">
                            <figure className="product-rating__figure"><img src={stars}></img></figure>
                            <p className="product-rating__p">10 reviews</p>
                        </div>

                        <div className="product-info-div__product-price-div">
                            <p className="product-price-div__new-price">{price}лв.</p>
                            <p className="product-price-div__old-price">{price + 5.01}лв.</p>
                            <p className="product-price-div__discount">-10%</p>
                        </div>

                        <p className="product-info-div__desc-p">
                        Не се колебайте повече, разгледайте нашата селекция от продукти и изберете перфектното решение за вас. Насладете се на бърза доставка за безпроблемно пазаруване.
                        </p>

                        <div className="product-info-div__pos-bottom">
                            <div className="product-info-div__product-size-div">
                                <p className="product-size-div__p">Количество:</p>
                                
                                <button className="product-size-div__btn">100 мл</button>
                            </div>

                            <div className="product-info-div__product-atc-div">
                                <div className="product-atc-div__product-num-div">
                                    <div className="product-num-div__min" onClick={() => setProdNum(num => num -= 1)}><p>-</p></div>
                                    <p className="product-num-div__num">{prodNum}</p>
                                    <div className="product-num-div__min" onClick={() => setProdNum(num => num += 1)}><p>+</p></div>
                                </div>
                                <button className='product-atc-div__atc-btn' onClick={() => addProdFunc(product[0])}>Добавете в количката</button>
                            </div>

                            <div className="product-info-div__product-icons-div">
                                <div className="product-icons-div__icon-div">
                                    <figure className="icon-div__figure"><img src={require('../../images/experiment_17dp_181818_FILL0_wght400_GRAD0_opsz20.png')}></img></figure>
                                    <p className="icon-div__p">Safe & <br></br>Non-Toxic</p>
                                </div>

                                <div className="product-icons-div__icon-div">
                                    <figure className="icon-div__figure"><img src={require('../../images/experiment_17dp_181818_FILL0_wght400_GRAD0_opsz20.png')}></img></figure>
                                    <p className="icon-div__p">Safe & <br></br>Non-Toxic</p>
                                </div>

                                <div className="product-icons-div__icon-div">
                                    <figure className="icon-div__figure"><img src={require('../../images/experiment_17dp_181818_FILL0_wght400_GRAD0_opsz20.png')}></img></figure>
                                    <p className="icon-div__p">Safe & <br></br>Non-Toxic</p>
                                </div>

                                <div className="product-icons-div__icon-div">
                                    <figure className="icon-div__figure"><img src={require('../../images/experiment_17dp_181818_FILL0_wght400_GRAD0_opsz20.png')}></img></figure>
                                    <p className="icon-div__p">Safe & <br></br>Non-Toxic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product__product-details">
                    <div className="product-details__details-div product-details__htu-product">
                        <p className="details-div__main-p">Как се прилага</p>
                        
                        <p className="details-div__sec-p">Lorem ipsum dolor amet concesteur dolor, moron velen ipsum. Beron falan yo ratan emna pogalan totrakan, con. Semon hodon tulon. Lorem ipsum dolor amet concesteur dolor, moron velen ipsum.</p>
                    </div>

                    <div className="product-details__details-div product-details__ingredients-product">
                        <p className="details-div__main-p">Съставки</p>
                        
                        <p className="details-div__sec-p">Lorem ipsum dolor amet concesteur dolor, moron velen ipsum. Beron falan yo ratan emna pogalan totrakan, con. Semon hodon tulon. Lorem ipsum dolor amet concesteur dolor, moron velen ipsum.</p>
                    </div>
                </div>

                <div className="product__product-yml">
                    <div className="product-yml__product-yml-content">
                        <h2 className="product__h2">Може да харесаш също</h2>

                        <div className="product-yml-content__yml-product-div">
                            {ymlProducts()}
                        </div>
                    </div>
                </div>

                <div className="product__product-faq">
                    <h2 className="product__h2">Често задавани въпроси</h2>

                    <div className="product-faq__faq-div">
                        <div className="faq-div__question-div">
                            <div 
                            onClick={() => openQ("q1")} 
                            className={`questions ${getClassQuestion("q1")}`}>
                                <h3 className="question-div__h3">Продуктите ви съдържат ли парабени и сулфати?</h3>
                            </div>

                            <div
                                onClick={() => openQ("q1")}
                                className={`answers ${getClassAnswer("q1")}`}
                            >
                                Comparing rental car deals is important as it helps find the
                                best deal that fits your budget and requirements, ensuring you
                                get the most value for your money. By comparing various
                                options, you can find deals that offer lower prices,
                                additional services, or better car models. You can find car
                                rental deals by researching online and comparing prices from
                                different rental companies.
                            </div>
                        </div>
                        
                        <div className="faq-div__question-div">
                            <div onClick={() => openQ("q2")} className={`questions ${getClassQuestion("q2")}`}>
                                <h3 className="question-div__h3">Подходящи ли са вашите продукти за чувствителна кожа?</h3>
                            </div>

                            <div
                                onClick={() => openQ("q2")}
                                className={`answers ${getClassAnswer("q2")}`}
                            >
                                Comparing rental car deals is important as it helps find the
                                best deal that fits your budget and requirements, ensuring you
                                get the most value for your money. By comparing various
                                options, you can find deals that offer lower prices,
                                additional services, or better car models. You can find car
                                rental deals by researching online and comparing prices from
                                different rental companies.
                            </div>
                        </div>

                        <div className="faq-div__question-div">
                            <div onClick={() => openQ("q3")} className={`questions ${getClassQuestion("q3")}`}>
                                <h3 className="question-div__h3">Къде биват произвеждани вашите продукти?</h3>
                            </div>

                            <div
                                onClick={() => openQ("q3")}
                                className={`answers ${getClassAnswer("q3")}`}
                            >
                                Comparing rental car deals is important as it helps find the
                                best deal that fits your budget and requirements, ensuring you
                                get the most value for your money. By comparing various
                                options, you can find deals that offer lower prices,
                                additional services, or better car models. You can find car
                                rental deals by researching online and comparing prices from
                                different rental companies.
                            </div>
                        </div>

                        <div className="faq-div__question-div">
                            <div onClick={() => openQ("q4")} className={`questions ${getClassQuestion("q4")}`}>
                                <h3 className="question-div__h3">Колко време отнема доставката?</h3>
                            </div>

                            <div
                                onClick={() => openQ("q4")}
                                className={`answers ${getClassAnswer("q4")}`}
                            >
                                Comparing rental car deals is important as it helps find the
                                best deal that fits your budget and requirements, ensuring you
                                get the most value for your money. By comparing various
                                options, you can find deals that offer lower prices,
                                additional services, or better car models. You can find car
                                rental deals by researching online and comparing prices from
                                different rental companies.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product__product-signup-banner">
                    <div className="product-signup-banner__overlay">
                        <div className="product-signup-banner__signup-banner-content">
                            <h2 className="signup-banner-content__h2">Получете 10% отстъпка<br></br>от първата ви поръчка.</h2>

                            <p className="signup-banner-content__p">Регистрирайте се сега и получете ексклузивен код за 10% намаление, който да ползвате при първата Ви поръчка. Присъединете се към Hygiene и подобрете вашето хигиенно изживяване.</p>

                            <div className="signup-banner-content__news-letter">
                                <input type="text" placeholder="example@gmail.com" value={input} onChange={inputText} required></input>
                                <button id="signup-banner-content__inp-btn" type="submit" onClick={() => setInput('')}>Абониране</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}