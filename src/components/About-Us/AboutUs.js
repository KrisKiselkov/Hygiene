import './AboutUs.css';
import { Nav } from '../Nav/Nav';
import { Footer } from '../Footer/Footer';


export function AboutUs() {
    return (
        <>
            <Nav />
            <section className='about-us'>
                <div className='about-us__about-us-heading'>
                    <div className='about-us__ab-us-head-content'>
                        <figure className='ab-us-head-content__figure'><img src={require('../../images/skincare-ingredients.jpg')}></img></figure>
                        <h2 className='ab-us-head-content__h2'>Запознайте се с <span>нас</span></h2>
                    </div>
                </div>

                <div className='about-us__about-us-main'>
                    <div className='about-us-main__ab-us-main-content'>
                        <div className='ab-us-main-content__ab-us-left'>
                            <h2 className='ab-us-left__h2'>Малко за... <br></br><span>Hygiene Bulgaria</span></h2>
                            <button className='ab-us-left__contact-btn'>
                                Пиши ни
                                <figure className='contact-btn__figure'>
                                    <img src={require('../../images/arrow_forward_24dp_8A6BE9_FILL0_wght400_GRAD0_opsz24.png')}></img>
                                </figure>
                            </button>
                        </div>

                        <div className='ab-us-main-content__ab-us-right'>
                            <div className='ab-us-right__ab-us-main-txt'>
                                <h3 className='ab-us-main-txt__h3'>Вашият <span>приятел</span> в Хигиената.</h3>
                                <p className='ab-us-main-txt__p'>
                                    Готови ли сте да вдигнете стандартите на вашата хигиенна рутина? Не се колебайте повече, разгледайте нашата селекция от продукти и изберете перфектното решение за вас. Насладете се на бърза доставка за безпроблемно пазаруване.
                                    <br></br>
                                    <br></br>
                                    Не се колебайте повече, разгледайте нашата селекция от продукти и изберете перфектното решение за вас. Насладете се на бърза доставка за безпроблемно пазаруване. Готови ли сте да вдигнете стандартите на вашата хигиенна рутина? Насладете се на бърза доставка за безпроблемно пазаруване.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='about-us-main__ab-us-spez'>
                        <div className='ab-us-spez__ab-us-spez-left'>
                            <h3 className='ab-us-main-txt__h3 ab-us-spez-left__h3'>Ние сме <span>специализирани</span> в</h3>
                            <p className='ab-us-main-txt__p ab-us-spez-left__p'>
                                Не се колебайте повече, разгледайте нашата селекция от продукти и изберете перфектното решение за вас. Насладете се на бърза доставка за безпроблемно пазаруване. Готови ли сте да вдигнете стандартите на вашата хигиенна рутина?
                                <br></br>
                                <br></br>
                                Готови ли сте да вдигнете стандартите на вашата хигиенна рутина? Не се колебайте повече, разгледайте нашата селекция от продукти и изберете перфектното решение за вас.
                            </p>
                        </div>

                        <div className='ab-us-spez__ab-us-spez-right'>
                            <div className='ab-us-spez-right__spez-right-blocks'>
                                <div className='spez-right-blocks__spez-block spez-block--fr-fth'>

                                </div>

                                <div className='spez-right-blocks__spez-block spez-block--sc-trh'>

                                </div>

                                <div className='spez-right-blocks__spez-block spez-block--sc-trh'>

                                </div>

                                <div className='spez-right-blocks__spez-block spez-block--fr-fth'>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='about-us-main__ab-us-team'>
                        <h2 className='ab-us-team__h2'><span>Поддържаният</span> ни екип.</h2>
                        <div className='ab-us-team__ab-us-team-divs'>
                            <div className='ab-us-team-divs__team-div'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}