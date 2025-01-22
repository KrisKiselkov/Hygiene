import './Main.css';


export function Main() {
    return (
        <main className='landing-main'>
            <div className='landing-main__fh-graph'>
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

            <div className='landing-main__most-bought'>
                <p className='most-bought__title-p'>Започни промяната към една <span>по-добра</span><br></br> твоя версия чрез <span>нас</span></p>

                <div className='most-bought__mb-products'>
                    <div className='mb-products__product-div'>
                        <figure className='product-div__figure'><img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img></figure>
                    
                        <button className='product-div__atc-btn'><img src={require('../../images/shopping_cart_24dp_181818_FILL0_wght400_GRAD0_opsz24.png')}></img></button>

                        <div className='product-div__bottom-part'>
                            <p className='bottom-part__product-label'>Serum Te Teint</p>
                            <p className='bottom-part__product-price'>$59.00</p>
                        </div>
                    </div>

                    <div className='mb-products__product-div'>
                        <figure className='product-div__figure'><img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img></figure>

                        <button className='product-div__atc-btn'><img src={require('../../images/shopping_cart_24dp_181818_FILL0_wght400_GRAD0_opsz24.png')}></img></button>

                        <div className='product-div__bottom-part'>
                            <p className='bottom-part__product-label'>Serum Te Teint</p>
                            <p className='bottom-part__product-price'>$59.00</p>
                        </div>
                    </div>

                    <div className='mb-products__product-div'>
                        <figure className='product-div__figure'><img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img></figure>

                        <button className='product-div__atc-btn'><img src={require('../../images/shopping_cart_24dp_181818_FILL0_wght400_GRAD0_opsz24.png')}></img></button>

                        <div className='product-div__bottom-part'>
                            <p className='bottom-part__product-label'>Serum Te Teint</p>
                            <p className='bottom-part__product-price'>$59.00</p>
                        </div>
                    </div>

                    <div className='mb-products__product-div'>
                        <figure className='product-div__figure'><img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img></figure>

                        <button className='product-div__atc-btn'><img src={require('../../images/shopping_cart_24dp_181818_FILL0_wght400_GRAD0_opsz24.png')}></img></button>

                        <div className='product-div__bottom-part'>
                            <p className='bottom-part__product-label'>Serum Te Teint</p>
                            <p className='bottom-part__product-price'>$59.00</p>
                        </div>
                    </div>

                    <div className='mb-products__product-div'>
                        <figure className='product-div__figure'><img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img></figure>

                        <button className='product-div__atc-btn'><img src={require('../../images/shopping_cart_24dp_181818_FILL0_wght400_GRAD0_opsz24.png')}></img></button>

                        <div className='product-div__bottom-part'>
                            <p className='bottom-part__product-label'>Serum Te Teint</p>
                            <p className='bottom-part__product-price'>$59.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='landing-main__product-range'>
                
            </div>
        </main>
    );
}