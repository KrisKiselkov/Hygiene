import './Main.css';
import { productsArray } from '../ProductsArray';
import { Link } from 'react-router-dom';


export function Main() {
    const mainProducts = () => {
        try {
            return (
                productsArray.map((prod, index) => (
                    <Link to={`/${prod.id}`} className='mb-products__product-div' key={index}>
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
        <main className='landing-main'>
            <div className='landing-main__product-range'>
                <h2 className='product-range__h2'>Нашата продуктова гама</h2>
                <div className='product-range__product-list'>
                    <div className='product-list__product-list-div product-list-div--body-products'>
                        <p className='product-list-div__p product-list-div__p--top-p'>Разгледай</p>

                        <p className='product-list-div__p product-list-div__p--bottom-p'>Продукти за тяло</p>
                    </div>

                    <div className='product-list__product-list-div  product-list-div--dental-products'>
                        <p className='product-list-div__p product-list-div__p--top-p'>Разгледай</p>

                        <p className='product-list-div__p product-list-div__p--bottom-p'>Продукти за уста</p>
                    </div>

                    <div className='product-list__product-list-div product-list-div--shower-products'>
                        <p className='product-list-div__p product-list-div__p--top-p'>Разгледай</p>

                        <p className='product-list-div__p product-list-div__p--bottom-p'>Продукти за къпане</p>
                    </div>
                </div>

                <div className='product-range__explore-more'>
                    <div className='explore-more__explore-img-divs'>
                        <div className='explore-img-divs__img-div img-div--fr-div'>

                        </div>

                        <div className='explore-img-divs__img-div img-div--sc-div'>

                        </div>
                    </div>

                    <div className='explore-more__explore-text-div'>
                        <p>Готови ли сте да вдигнете стандартите на вашата хигиенна рутина? Не се колебайте повече, разгледайте нашата селекция от продукти и изберете перфектното решение за вас. Насладете се на бърза доставка за безпроблемно пазаруване.</p>

                        <button type='button' className='explore-text-div__explore-btn'>
                            <p className='explore-btn__p'>Разгледай</p>
                            <figure className='explore-btn__figure'>
                                <img src={require('../../images/arrow_forward_24dp_181818_FILL0_wght400_GRAD0_opsz24.png')}></img>
                            </figure>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='landing-main__most-bought'>
                <p className='most-bought__title-p'>Започни промяната към една <span>по-добра</span><br></br> твоя версия чрез <span>нас</span>.</p>

                <div className='most-bought__mb-products'>
                    {mainProducts()}
                </div>
            </div>

            <div className='landing-main__fh-graph'>
                <div className='fh-graph__content'>
                    <p className='fh-graph__p'>
                        Следването на всекидневна
                        <br></br>
                        <i><strong>хигиенна</strong> рутина</i>
                        <br></br>
                        те прави:
                    </p>

                    <div className='fh-graph__graphs'>
                        <div className='graphs__fr-graph'>
                            <p className='graphs__p'>По <i><strong>готин/а</strong></i></p>

                            <span className='graphs__span-num'>100%</span>
                            <div className='graphs__div-graph'>
                                <div className='div-graph__fr-graphs'></div>
                            </div>
                        </div>

                        <div className='graphs__sc-graph'>
                            <p className='graphs__p'>По <i><strong>удовлетворен/а</strong></i></p>
                            
                            <span className='graphs__span-num'>100%</span>
                            <div className='graphs__div-graph'>
                                <div className='div-graph__sc-graphs'></div>
                            </div>
                        </div>

                        <div className='graphs__th-graph'>
                            <p className='graphs__p'>По <i><strong>уверен/а</strong></i></p>
                            
                            <span className='graphs__span-num'>100%</span>
                            <div className='graphs__div-graph'>
                                <div className='div-graph__th-graphs'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='landing-main__ratings'>
                <h2 className='ratings__h2'>Разгледай отзиви от наши клиенти</h2>
            
                <div className='ratings__ratings-section'>
                    <div className='ratings__ratings-div'>
                        <div className='ratings-div__top-flex'>
                            <p className='ratings-div__name-p'>Boris P.</p>
                            <figure className='ratings-div__quotes-figure'><img src={require('../../images/double-quotes.png')}></img></figure>
                        </div>
                        <p className='ratings-div__testimonial-p'>Lorem ipsum dolor amet concesteur dolor, moron velen ipsum. Beron falan yo ratan emna pogalan totrakan, con. Semon hodon tulon.</p>
                        <figure className='ratings-div__stars-figure'><img src={require('../../images/5-star-rating.webp')} ></img></figure>
                    </div>

                    <div className='ratings__ratings-div'>
                        <div className='ratings-div__top-flex'>
                            <p className='ratings-div__name-p'>Kristian K.</p>
                            <figure className='ratings-div__quotes-figure'><img src={require('../../images/double-quotes.png')}></img></figure>
                        </div>
                        <p className='ratings-div__testimonial-p'>Lorem ipsum dolor amet concesteur dolor, moron velen ipsum. Beron falan yo ratan emna pogalan totrakan, con. Semon hodon tulon. Lorem ipsum dolor amet concesteur dolor, moron velen ipsum. </p>
                        <figure className='ratings-div__stars-figure'><img src={require('../../images/5-star-rating.webp')} ></img></figure>
                    </div>

                    <div className='ratings__ratings-div'>
                        <div className='ratings-div__top-flex'>
                            <p className='ratings-div__name-p'>Denis A.</p>
                            <figure className='ratings-div__quotes-figure'><img src={require('../../images/double-quotes.png')}></img></figure>
                        </div>
                        <p className='ratings-div__testimonial-p'>Lorem ipsum dolor amet concesteur dolor, moron velen ipsum. Beron falan yo ratan emna pogalan totrakan, con. Semon hodon tulon. Lorem ipsum dolor amet concesteur dolor, moron velen ipsum.</p>
                        <figure className='ratings-div__stars-figure'><img src={require('../../images/5-star-rating.webp')} ></img></figure>
                    </div>             
                </div>
            </div>

            <div className='landing-main__why-choose'>
                <h2 className='why-choose__h2'>Защо да изберете нас?</h2>

                <div className='why-choose__why-blocks'>
                    <div className='why-blocks__why-block-div'>
                        <figure className='why-block-div__figure'><img src={require('../../images/sensor_occupied_16dp_181818_FILL0_wght400_GRAD0_opsz20.png')}></img></figure>
                        <p>Персонализирани продукти</p>
                    </div>

                    <div className='why-blocks__why-block-div'>
                        <figure className='why-block-div__figure'><img src={require('../../images/sensor_occupied_16dp_181818_FILL0_wght400_GRAD0_opsz20.png')}></img></figure>
                        <p>Персонализирани продукти</p>
                    </div>

                    <div className='why-blocks__why-block-div'>
                        <figure className='why-block-div__figure'><img src={require('../../images/sensor_occupied_16dp_181818_FILL0_wght400_GRAD0_opsz20.png')}></img></figure>
                        <p>Персонализирани продукти</p>
                    </div>
                </div>
            </div>
        </main>
    );
}