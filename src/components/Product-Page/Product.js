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
    const [ products, setProducts ] = useState(productsArray);

    const toggleCategory = (filter) => {
        setCategory((prevFilters) =>
          prevFilters.includes(filter)
            ? prevFilters.filter((f) => f !== filter) // Remove filter if already active
            : [...prevFilters, filter] // Add filter if not active
        );
    };

    useEffect(() => {
        const filteredProducts = productsArray.filter((product) => {
          const matchCategory = category.every((filter) => product.type.includes(filter));
      
          // Only return recipes that match both the search and active category filters
          return category.length === 0 || matchCategory;
        });
      
        setProducts(filteredProducts);
    }, [category]);

    const allProducts = () => {
        try {
            return (
                products.map((prod, index) => (
                    <Link to={`/products/${prod.id}`} className='mb-products__product-div all-products-section__aps-product-div' key={index}>
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
                                <figure className='pb-view-prod-div__figure'>
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


                <div className="products-page__grid">
                    <div className="products-page__filter">
                        <div className='products-page__categories-div'>
                            <div className='products-page__filter-categories'>
                                <h2 className='products-page__col-h2'>Филтри</h2>
                                        
                                <div className='products-page__pp-all-categories'>
                                    <div className='pp-all-categories__type-hygiene'>
                                        <label className='category-div'>
                                            <div className='category__order-setting'>                                                
                                                <input type='checkbox' onChange={() => toggleCategory("dental")}
            checked={category.includes("dental")}></input>
                                                <span className="checkmark"></span>
                                                <p className='category__label'>Дентална</p>
                                                
                                            </div>
                                        </label>

                                        <label className='category-div'>
                                            <div className='category__order-setting'>
                                                <input type='checkbox' onChange={() => toggleCategory("face")}
            checked={category.includes("face")}></input>
                                                <span class="checkmark"></span>
                                                <p className='category__label'>За лице</p>
                                                
                                            </div>
            
                                        </label>

                                        <label className='category-div'>
                                            <div className='category__order-setting'>
                                                <input type='checkbox' onChange={() => toggleCategory("body")}
            checked={category.includes("body")}></input>
                                                <span class="checkmark"></span>
                                                <p className='category__label'>За тяло</p>
                                                
                                            </div>
                                        </label>

                                        <label className='category-div'>
                                            <div className='category__order-setting'>
                                                <input type='checkbox' onChange={() => toggleCategory("feet")}
            checked={category.includes("feet")}></input>
                                                <span class="checkmark"></span>
                                                <p className='category__label'>За ходила</p>
                                                
                                            </div>
                                        </label>

                                        <label className='category-div'>
                                            <div className='category__order-setting'>
                                                <input type='checkbox' onChange={() => toggleCategory("accessories")}
            checked={category.includes("accessories")}></input>
                                                <span class="checkmark"></span>
                                                <p className='category__label'>Аксесоари</p>
                                                
                                            </div>
                                        </label>   
                                    </div>           
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="products-page__all-products-section">
                        {allProducts()}                       
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}