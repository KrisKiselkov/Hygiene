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
          const matchCategory = category.some((filter) => product.type.includes(filter));
      
          // Only return recipes that match both the search and active category filters
          return category.length === 0 || matchCategory;
        });
      
        setProducts(filteredProducts);
    }, [category]);

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


                <div className='products-page__pp-filter-products'>
                    <div className='pp-filter-products__pp-filter-section'>
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

            <Footer />
        </>
    );
}


// import './Product.css';
// import { Nav } from "../Nav/Nav";
// import { useState, useEffect } from 'react';
// import { productsArray } from '../ProductsArray';
// import { Link } from 'react-router-dom';
// import { Footer } from '../Footer/Footer';


// export function Product() {
//     const typesOfProducts = [
//         'стъргалки за език.',
//         'miswak четки за зъби.',  
//         'тоалетки.',
//         'самобръсначки.',
//         'силиконови тривки.',
//     ]

//     const [currentTextIndex, setCurrentTextIndex] = useState(0);
//     const [transitionStage, setTransitionStage] = useState("entering");
    
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTransitionStage("exiting");
//             setTimeout(() => {
//                 setCurrentTextIndex((prevIndex) => (prevIndex + 1) % typesOfProducts.length);
//                 setTransitionStage("entering");
//             }, 500);
//         }, 2500);
    
//         return () => clearInterval(interval);
//     }, []);

//     const [ category, setCategory ] = useState([]);
//     const [ products, setProducts ] = useState(productsArray);

//     const toggleCategory = (filter) => {
//         setCategory((prevFilters) =>
//           prevFilters.includes(filter)
//             ? prevFilters.filter((f) => f !== filter) // Remove filter if already active
//             : [...prevFilters, filter] // Add filter if not active
//         );
//     };

//     useEffect(() => {
//         const filteredProducts = productsArray.filter((product) => {
//           const matchCategory = category.every((filter) => product.type.includes(filter));
      
//           // Only return recipes that match both the search and active category filters
//           return category.length === 0 || matchCategory;
//         });
      
//         setProducts(filteredProducts);
//     }, [category]);

//     const allProducts = () => {
//         try {
//             return (
//                 products.map((prod, index) => (
//                     <Link to={`/products/${prod.id}`} className='mb-products__product-div all-products-section__aps-product-div' key={index}>
//                         <button className='product-div__atc-btn'><img src={require('../../images/shopping_cart_24dp_181818_FILL0_wght400_GRAD0_opsz24.png')}></img></button>
//                         <figure className='product-div__figure'><img src={prod.image}></img></figure>
                            

//                         <div className='product-div__bottom-part'>
//                             <p className='bottom-part__product-label'>{prod.label}</p>
//                             <p className='bottom-part__product-price'>${prod.price}</p>
//                         </div>
//                     </Link>
                    
//                 ))
//             )
//         } catch(error) {
//             console.log(error);
//         }         
//     }


//     return (
//         <>
//             <Nav />
//             <section className='products-page'>
//                 <div className='products-page__products-page-banner'>
//                     <div className='products-page-banner__products-page-banner-frdiv'>
//                         <h1 className='products-page-banner-frdiv__h1'>Нашите<br></br><p className={`products-page-banner-frdiv__text-change ${transitionStage}`}>{typesOfProducts[currentTextIndex]}</p>
//                         </h1>
//                     </div>
                    

//                     <div className='products-page-banner__products-page-banner-scdiv'>
//                         <div className='products-page-banner-scdiv__pb-scdiv-img'>
//                             <div className='pb-scdiv-img__overlay'>
//                                 <div className='pb-scdiv-img-div__pb-scdiv-img-text'>
//                                     <h3 className='pb-scdiv-img-text__h3'>Грижи се за себе си</h3>

//                                     <p className='pb-scdiv-img-text__p'>Разгледай новите ни продукти</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

                    
//                     <div className='products-page-banner__pb-div pb-div--trdiv'>
//                         <div className='pb-div__pb-div-text'>
//                             <h3 className='pb-div-text__h3'>Най-продавани <br></br>продукти.</h3>
        
//                             <div className='pb-div-text__pb-view-prod-div'>
//                                 <figure className='pb-view-prod-div__figure'>
//                                     <img src={require('../../images/arrow_outward_black.png')}></img>
//                                 </figure>
//                                 <p className='pb-view-prod-div__p'>Разгледай продуктите.</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className='products-page-banner__pb-div pb-div--frthdiv'>
//                         <div className='pb-div__pb-div-text'>
//                             <div className='pb-div-text__pb-view-prod-div pb-view-prod-div--frthdiv'>
//                                 <figure className='pb-view-prod-div__figure'>
//                                     <img src={require('../../images/arrow_outward_black.png')}></img>
//                                 </figure>
//                                 <p className='pb-view-prod-div__p'>Разгледай абонаментите.</p>
//                             </div>

//                             <h3 className='pb-div-text__h3--frthdiv'>Абонаментни <br></br>планове.</h3>
//                         </div>
//                     </div>

                    
//                     <div className='products-page-banner__pb-div pb-div--fithdiv'>
//                         <div className='pb-div__pb-div-text'>
//                             <h3 className='pb-div-text__h3'>Нашите <br></br>блог странци.</h3>
        
//                             <div className='pb-div-text__pb-view-prod-div'>
//                                 <figure className='pb-view-prod-div__figure'>
//                                     <img src={require('../../images/arrow_outward_black.png')}></img>
//                                 </figure>
//                                 <p className='pb-view-prod-div__p'>Разгледай блоговете.</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className='products-page-banner__pb-div pb-div--sixdiv'>
//                         <div>
//                             <p className='pb-div--sixdiv__fr-p'>Hygiene</p>
//                             <p className='pb-div--sixdiv__sc-p'>Bulgaria</p>
//                         </div>
//                     </div>
//                 </div>


//                 <hr className='products-page__hr'></hr>


//                 <div className="products-page__grid">
//                     <div className="products-page__filter">
//                         <div className='products-page__categories-div'>
//                             <div className='products-page__filter-categories'>
//                                 <h2 className='products-page__col-h2'>Филтри</h2>
                                        
//                                 <div className='products-page__pp-all-categories'>
//                                     <div className='pp-all-categories__type-hygiene'>
//                                         <label className='category-div'>
//                                             <div className='category__order-setting'>                                                
//                                                 <input type='checkbox' onChange={() => toggleCategory("dental")}
//             checked={category.includes("dental")}></input>
//                                                 <span className="checkmark"></span>
//                                                 <p className='category__label'>Дентална</p>
                                                
//                                             </div>
//                                         </label>

//                                         <label className='category-div'>
//                                             <div className='category__order-setting'>
//                                                 <input type='checkbox' onChange={() => toggleCategory("face")}
//             checked={category.includes("face")}></input>
//                                                 <span class="checkmark"></span>
//                                                 <p className='category__label'>За лице</p>
                                                
//                                             </div>
            
//                                         </label>

//                                         <label className='category-div'>
//                                             <div className='category__order-setting'>
//                                                 <input type='checkbox' onChange={() => toggleCategory("body")}
//             checked={category.includes("body")}></input>
//                                                 <span class="checkmark"></span>
//                                                 <p className='category__label'>За тяло</p>
                                                
//                                             </div>
//                                         </label>

//                                         <label className='category-div'>
//                                             <div className='category__order-setting'>
//                                                 <input type='checkbox' onChange={() => toggleCategory("feet")}
//             checked={category.includes("feet")}></input>
//                                                 <span class="checkmark"></span>
//                                                 <p className='category__label'>За ходила</p>
                                                
//                                             </div>
//                                         </label>

//                                         <label className='category-div'>
//                                             <div className='category__order-setting'>
//                                                 <input type='checkbox' onChange={() => toggleCategory("accessories")}
//             checked={category.includes("accessories")}></input>
//                                                 <span class="checkmark"></span>
//                                                 <p className='category__label'>Аксесоари</p>
                                                
//                                             </div>
//                                         </label>   
//                                     </div>           
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="products-page__all-products-section">
//                         {allProducts()}                       
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </>
//     );
// }








// .products-page__grid {
//     display: grid;
//     grid-template-columns: 24% 73%;
//     gap: 3%;
//     width: 100%;
//     height: 100%;
//     margin: 0 auto;
//     margin-bottom: 9.5em;
//   }
  
  
//   /* RECIPES FILTER */
//   .products-page__filter {
//     display: flex;
//     flex-wrap: wrap;
//     width: 100%;
//     height: fit-content;
//     border-radius: 4px;
//     box-shadow: 0px 3px 10px 1px #18181850;
//     padding: 1em;
//   }
  
//   .products-page__categories-div {
//     width: 100%;
//   }
  
//   .products-page-col-h2 {
//     font-size: 22px;
//     margin-bottom: .5em;
//     border-bottom: 2px dashed #e9e9e9;
//   }
  
//   .products-page__pp-all-categories {
//     position: relative;
//     bottom: .8em;
//   }
  
//   .category-div {
//     display: flex;
//     justify-content: space-between;
//     position: relative;
//     top: 1em;
    
//   }
  
//   .category-div + .category-div::after {
//     content: "";
//     position: absolute;
//     height: 1px;
//     width: 100%;
//     background-color: #e9e9e9;
//   }
  
//   .category__order-setting {
//     display: flex;
//     align-items: center;
//     height: 2.8em;
//   }
  
//   .category-div input {
//     position: absolute;
//     opacity: 0;
//     cursor: pointer;
//     height: 0;
//     width: 0;
//   }
  
//   /* Create a custom checkbox */
//   .checkmark {
//     position: relative;
//     left: .3em;
//     height: 17px;
//     width: 17px;
//     border: 1px solid #8a6be9;
//     border-radius: 4px;
//     transition: all .2s;
//   }
  
//   /* On mouse-over, add a grey background color */
//   .category-div:hover input ~ .checkmark {
//     background-color: #eee;
//   }
  
//   /* When the checkbox is checked, add a blue background */
//   .category-div input:checked ~ .checkmark {
//     background-color: #8a6be9;
//   }
  
//   /* Create the checkmark/indicator (hidden when not checked) */
//   .checkmark:after {
//     content: "";
//     position: absolute;
//     display: none;
//   }
  
//   /* Show the checkmark when checked */
//   .category-div input:checked ~ .checkmark:after {
//     display: block;
//   }
  
//   /* Style the checkmark/indicator */
//   .category-div .checkmark:after {
//     left: 4px;
//     top: 1px;
//     width: 4px;
//     height: 8px;
//     border: solid white;
//     border-width: 0 3px 3px 0;
//     -webkit-transform: rotate(45deg);
//     -ms-transform: rotate(45deg);
//     transform: rotate(45deg);
//   }
  
//   .category__label {
//     position: relative;
//     left: .7em;
//     width: 11em;
//     font-weight: 500;
//     transition: all .2s ease-out;
//   }


// /* ALL PRODUCTS SECTION */
// .products-page__all-products-section {
//   display: flex;
//   width: 100%;
//   height: auto;
//   margin: 0 auto;
//   row-gap: 1.5em;
//   column-gap: 3%;
//   flex-wrap: wrap;
// }

// .all-products-section__aps-product-div {
//   flex: 0 0 calc(94% / 3);
// }