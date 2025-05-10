import './Product.css';
import { Nav } from "../Nav/Nav";
import { useState, useEffect } from 'react';
import { productsArray } from '../ProductsArray';
import { Link } from 'react-router-dom';
import { Footer } from '../Footer/Footer';


export function Product() {
    const typesOfProducts = [
        'стъргалки за език.',
        'miswak четки за зъби.',
        'тоалетки.',
        'самобръсначки.',
        'силиконови тривки.',
    ]

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [transitionStage, setTransitionStage] = useState("entering");
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTransitionStage("exiting");
            setTimeout(() => {
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % typesOfProducts.length);
                setTransitionStage("entering");
            }, 500);
        }, 2500);
    
        return () => clearInterval(interval);
    }, []);

    const [ category, setCategory ] = useState([]);
    const [ catChecked, setCatChecked ] = useState({ 
        dental: false,
        face: false,
        body: false,
        feet: false, 
        accessories: false 
    });
    const [ mobileFilter, setMobileFilter ] = useState(false);
    const [ products, setProducts ] = useState(productsArray);

    const toggleCategory = (filter) => {
        setCategory((prevFilters) =>
          prevFilters.includes(filter)
            ? prevFilters.filter((f) => f !== filter) // Remove filter if already active
            : [...prevFilters, filter] // Add filter if not active
        );
    };

    const handleCatChecked = (categoryName, isChecked) => {
        setCatChecked(prevState => ({
            ...prevState,
            [categoryName]: isChecked,
        }));
    };

    useEffect(() => {
        const filteredProducts = productsArray.filter((product) => {
          const matchCategory = category.some((filter) => product.type.includes(filter));
      
          // Only return recipes that match both the search and active category filters
          return category.length === 0 || matchCategory;
        });
      
        setProducts(filteredProducts);
    }, [category]);

    const openMobileFilter = () => {
        setMobileFilter(prev => {
            const newState = !prev;
            document.body.classList.toggle('no-scroll', newState);
            return newState;
        });
    };
    

    const allProducts = () => {
        try {
            return (
                products.map((prod, index) => (
                    <Link to={`/products/${prod.id}`} className='mb-products__product-div' key={index}>
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

    const [input, setInput] = useState('');

    const inputText = (e) => {
        setInput(e.target.value);
    }


    return (
        <>
            <Nav />
            <section className='products-page'>
                <div className='products-page__products-page-banner'>
                    <div className='products-page-banner__products-page-banner-frdiv'>
                        <h1 className='products-page-banner-frdiv__h1'>Нашите<br></br><p className={`products-page-banner-frdiv__text-change ${transitionStage}`}>{typesOfProducts[currentTextIndex]}</p>
                        </h1>
                    </div>
                    

                    <div className='products-page-banner__products-page-banner-scdiv'>
                        <div className='products-page-banner-scdiv__pb-scdiv-img'>
                            <div className='pb-scdiv-img__overlay'>
                                <div className='pb-scdiv-img-div__pb-scdiv-img-text'>
                                    <h3 className='pb-scdiv-img-text__h3'>Грижи се за себе си</h3>

                                    <p className='pb-scdiv-img-text__p'>Разгледай новите ни продукти</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className='products-page-banner__pb-div pb-div--trdiv'>
                        <div className='pb-div__pb-div-text'>
                            <h3 className='pb-div-text__h3'>Най-продавани <br></br>продукти.</h3>
        
                            <div className='pb-div-text__pb-view-prod-div'>
                                <figure className='pb-view-prod-div__figure'>
                                    <img src={require('../../images/arrow_outward_black.png')}></img>
                                </figure>
                                <p className='pb-view-prod-div__p'>Разгледай продуктите.</p>
                            </div>
                        </div>
                    </div>


                    <div className='products-page-banner__pb-div pb-div--frthdiv'>
                        <div className='pb-div__pb-div-text'>
                            <div className='pb-div-text__pb-view-prod-div pb-view-prod-div--frthdiv'>
                                <figure className='pb-view-prod-div__figure pb-view-prod-div__figure--frthdiv'>
                                    <img src={require('../../images/arrow_outward_black.png')}></img>
                                </figure>
                                <p className='pb-view-prod-div__p'>Разгледай абонаментите.</p>
                            </div>

                            <h3 className='pb-div-text__h3--frthdiv'>Абонаментни <br></br>планове.</h3>
                        </div>
                    </div>

                    
                    <div className='products-page-banner__pb-div pb-div--fithdiv'>
                        <div className='pb-div__pb-div-text'>
                            <h3 className='pb-div-text__h3'>Нашите <br></br>блог странци.</h3>
        
                            <div className='pb-div-text__pb-view-prod-div'>
                                <figure className='pb-view-prod-div__figure'>
                                    <img src={require('../../images/arrow_outward_black.png')}></img>
                                </figure>
                                <p className='pb-view-prod-div__p'>Разгледай блоговете.</p>
                            </div>
                        </div>
                    </div>


                    <div className='products-page-banner__pb-div pb-div--sixdiv'>
                        <div>
                            <p className='pb-div--sixdiv__fr-p'>Hygiene</p>
                            <p className='pb-div--sixdiv__sc-p'>Bulgaria</p>
                        </div>
                    </div>
                </div>

                <hr className='products-page__hr'></hr>

                <div className='products-page__pp-filter-products'>
                    <div className='pp-filter-products__pp-filter-section'>
                        <button className='pp-filter-products__pp-mobile-filter' onClick={openMobileFilter}>
                            <figure className='pp-mobile-filter__figure'><img src={require('../../images/filter_alt_26dp_181818_FILL0_wght400_GRAD0_opsz24.png')}></img></figure>
                            Филтри
                        </button>

                        <label className='pp-filter-section__pp-filter-label'>
                            <div className={category.includes("dental") ? 'pp-filter-label__pp-filter-div-true' : 'pp-filter-label__pp-filter-div'}>
                                <input type='checkbox' className='pp-filter-div__input' onChange={() => toggleCategory("dental")}
                                checked={category.includes("dental")}>
                                </input>
                                <p className='pp-filter-div__p'>Дентална</p>
                            </div>
                        </label>

                        <label className='pp-filter-section__pp-filter-label'>
                            <div className={category.includes("face") ? 'pp-filter-label__pp-filter-div-true' : 'pp-filter-label__pp-filter-div'}>
                                <input type='checkbox' className='pp-filter-div__input' onChange={() => toggleCategory("face")}
                                checked={category.includes("face")}>
                                </input>
                                <p className='pp-filter-div__p'>За лице</p>
                            </div>
                        </label>

                        <label className='pp-filter-section__pp-filter-label'>
                            <div className={category.includes("body") ? 'pp-filter-label__pp-filter-div-true' : 'pp-filter-label__pp-filter-div'}>
                                <input type='checkbox' className='pp-filter-div__input' onChange={() => toggleCategory("body")}
                                checked={category.includes("body")}>
                                </input>
                                <p className='pp-filter-div__p'>За тяло</p>
                            </div>
                        </label>

                        <label className='pp-filter-section__pp-filter-label'>
                            <div className={category.includes("feet") ? 'pp-filter-label__pp-filter-div-true' : 'pp-filter-label__pp-filter-div'}>
                                <input type='checkbox' className='pp-filter-div__input' onChange={() => toggleCategory("feet")}
                                checked={category.includes("feet")}>
                                </input>
                                <p className='pp-filter-div__p'>За ходила</p>
                            </div>
                        </label>

                        <label className='pp-filter-section__pp-filter-label'>
                            <div className={category.includes("accessories") ? 'pp-filter-label__pp-filter-div-true' : 'pp-filter-label__pp-filter-div'}>
                                <input type='checkbox' className='pp-filter-div__input' onChange={() => toggleCategory("accessories")}
                                checked={category.includes("accessories")}>
                                </input>
                                <p className='pp-filter-div__p'>Аксесоари</p>
                            </div>
                        </label>
                    </div>

                    <div className="pp-filter-products__all-products-section">
                        {allProducts()}                       
                    </div>
                </div>

                <div className="product__product-signup-banner">
                    <div className="product-signup-banner__overlay">
                        <div className="product-signup-banner__signup-banner-content">
                            <h2 className="signup-banner-content__h2">Насладете се на 10% отстъпка<br></br>от първата ви поръчка.</h2>

                            <p className="signup-banner-content__p">Регистрирайте се сега и получете ексклузивен код за 10% намаление, който да ползвате при първата Ви поръчка. Присъединете се към Hygiene и подобрете вашето хигиенно изживяване.</p>

                            <div className="signup-banner-content__news-letter">
                                <input type="text" placeholder="example@gmail.com" value={input} onChange={inputText} required></input>
                                <button id="signup-banner-content__inp-btn" type="submit" onClick={() => setInput('')}>Абониране</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <div className={`${mobileFilter ? 'product-page__pp-mobile-filter-popup' : 'product-page__pp-mobile-filter-popup--hidden'}`}>
                <div className='pp-mobile-filter-popup__mobile-filter-section'>
                    <div className='mobile-filter-section__mobile-filter-header'>
                        <h2 className='mobile-filter-header__h2'>Избери тип продукт.</h2>
                        <span className='mobile-filter-header__mobile-close' onClick={openMobileFilter}><figure className='mobile-close__figure'><img src={require('../../images/close_26dp_181818_FILL0_wght400_GRAD0_opsz24.png')}></img></figure></span>
                    </div>

                    <div className='mobile-filter-section__mobile-filter-main'>
                        <label className='mobile-filter-main__mobile-filter-label'>
                            <input type='checkbox' className='mobile-filter-label__input' onChange={(e) => {
                                toggleCategory("dental");
                                handleCatChecked("dental", e.target.checked);
                            }}
                            checked={category.includes("dental")}>
                            </input>
                            <span className='checkmark'></span>
                            <p className='mobile-filter-label__p'>Дентална</p>
                        </label>

                        <label className='mobile-filter-main__mobile-filter-label'>
                            <input type='checkbox' className='mobile-filter-label__input' onChange={(e) => {
                                toggleCategory("face");
                                handleCatChecked("face", e.target.checked);
                            }}
                            checked={category.includes("face")}>
                            </input>
                            <span className='checkmark'></span>
                            <p className='mobile-filter-label__p'>За лице</p>
                        </label>

                        <label className='mobile-filter-main__mobile-filter-label'>
                            <input type='checkbox' className='mobile-filter-label__input' onChange={(e) => {
                                toggleCategory("body");
                                handleCatChecked("body", e.target.checked);
                            }}
                            checked={category.includes("body")}>
                            </input>
                            <span className='checkmark'></span>
                            <p className='mobile-filter-label__p'>За тяло</p>
                        </label>

                        <label className='mobile-filter-main__mobile-filter-label'>
                            <input type='checkbox' className='mobile-filter-label__input' onChange={(e) => {
                                toggleCategory("accessories");
                                handleCatChecked("accessories", e.target.checked);
                            }}
                            checked={category.includes("accessories")}>
                            </input>
                            <span className='checkmark'></span>
                            <p className='mobile-filter-label__p'>За ходила</p>
                        </label>
                    </div>

                    <div className='mobile-filter-section__mobile-filter-footer'>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}