import './Main.css';
import { productsArray } from '../ProductsArray';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

export function Main() {
    const mainProducts = () => {
        try {
            return (
                productsArray.map((prod, index) => (
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

    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    const progress = useMotionValue(0);
    const smoothProgress = useSpring(progress, { stiffness: 50, damping: 20 });
    const displayProgress = useTransform(smoothProgress, value => Math.round(value));

    useEffect(() => {
    if (inView) {
        controls.start({ width: "100%" });
        progress.set(100);
    }
    }, [inView, controls, progress]);


    return (
        <main className='landing-main'>
            <div className='landing-main__product-range'>
                <h2 className='main-h2 product-range__h2'>Нашата продуктова гама</h2>
                <div className='product-range__product-list'>
                    <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className='product-list__product-list-div product-list-div--body-products'>
                        <p className='product-list-div__p product-list-div__p--top-p'>Разгледай</p>

                        <p className='product-list-div__p product-list-div__p--bottom-p'>Продукти за тяло</p>
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, y: 90 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className='product-list__product-list-div  product-list-div--dental-products'>
                        <p className='product-list-div__p product-list-div__p--top-p'>Разгледай</p>

                        <p className='product-list-div__p product-list-div__p--bottom-p'>Продукти за уста</p>
                    </motion.div>

                    <motion.div 
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className='product-list__product-list-div product-list-div--shower-products'>
                        <p className='product-list-div__p product-list-div__p--top-p'>Разгледай</p>

                        <p className='product-list-div__p product-list-div__p--bottom-p'>Продукти за къпане</p>
                    </motion.div>
                </div>

                <div className='product-range__explore-more'>
                    <div className='explore-more__explore-img-divs'>
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }}
                            className='explore-img-divs__img-div img-div--fr-div'>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            viewport={{ once: true }} 
                            className='explore-img-divs__img-div img-div--sc-div'>

                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className='explore-more__explore-text-div'>
                        <p>Готови ли сте да вдигнете стандартите на вашата хигиенна рутина? Не се колебайте повече, разгледайте нашата селекция от продукти и изберете перфектното решение за вас. Насладете се на бърза доставка за безпроблемно пазаруване.</p>

                        <button type='button' className='explore-text-div__explore-btn'>
                            <p className='explore-btn__p'>Разгледай</p>
                            <figure className='explore-btn__figure'>
                                <img src={require('../../images/arrow_forward_24dp_181818_FILL0_wght400_GRAD0_opsz24.png')}></img>
                            </figure>
                        </button>
                    </motion.div>
                </div>
            </div>
            
            <motion.div 
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='landing-main__most-bought'>
                <p className='main-h2 most-bought__title-p'>Започни промяната към една <span>по-добра</span><br></br> твоя версия чрез <span>нас</span>.</p>

                <div className='most-bought__mb-products'>
                    {mainProducts()}
                </div>
            </motion.div>

            <div className='landing-main__fh-graph'>
                <div className='fh-graph__content'>
                    <p className='main-h2 fh-graph__p'>
                        Следването на всекидневна
                        <br></br>
                        <i><strong>хигиенна</strong> рутина</i>
                        <br></br>
                        те прави:
                    </p>

                    <div className='fh-graph__graphs'>
                        <div ref={ref} className='graphs__fr-graph'>
                            <p className='graphs__p'>По <i><strong>готин/а</strong></i></p>

                            <motion.span className='graphs__span-num'>{useMotionTemplate`${displayProgress}%`}</motion.span>
                            <motion.div className='graphs__div-graph'>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={controls}
                                    transition={{ duration: 2 }}
                                    className='div-graph__graph-fill graph-fill__fr-graphs'>
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className='graphs__sc-graph'>
                            <p className='graphs__p'>По <i><strong>удовлетворен/а</strong></i></p>
                            
                            <motion.span className='graphs__span-num'>{useMotionTemplate`${displayProgress}%`}</motion.span>
                            <motion.div className='graphs__div-graph'>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={controls}
                                    transition={{ duration: 2 }}
                                    className='div-graph__graph-fill graph-fill__sc-graphs'>
                                </motion.div>
                            </motion.div>
                        </div>

                        <div className='graphs__th-graph'>
                            <p className='graphs__p'>По <i><strong>уверен/а</strong></i></p>
                            
                            <motion.span className='graphs__span-num'>{useMotionTemplate`${displayProgress}%`}</motion.span>
                            <motion.div className='graphs__div-graph'>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={controls}
                                    transition={{ duration: 2 }}
                                    className='div-graph__graph-fill graph-fill__th-graphs'>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='landing-main__ratings'>
                <h2 className='main-h2 ratings__h2'>Разгледай отзиви от наши клиенти</h2>
            
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
                <div className='why-choose__why-choose-content'>
                    <h2 className='main-h2 why-choose__h2'>Защо да изберете нас?</h2>

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
            </div>
        </main>
    );
}