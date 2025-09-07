import './AboutUs.css';
import { Nav } from '../Nav/Nav';
import { Footer } from '../Footer/Footer';
import { useRef } from 'react';



export function AboutUs() {
    const formRef = useRef(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <>
            <Nav />
            <section className='about-us'>
                <div className='about-us__about-us-heading'>
                    <div className='about-us__ab-us-head-content'>
                        <figure className='ab-us-head-content__figure'><img src={require('../../images/skincare-ingredients.jpg')} alt=''></img></figure>
                        <h2 className='ab-us-head-content__h2'>Запознайте се с <span>нас</span></h2>
                    </div>
                </div>

                <div className='about-us__about-us-main'>
                    <div className='about-us-main__ab-us-main-content'>
                        <div className='ab-us-main-content__ab-us-left'>
                            <h2 className='ab-us-left__h2'>Малко за... <br></br><span>Hygiene Bulgaria</span></h2>
                            <button onClick={scrollToForm} className='ab-us-left__contact-btn'>
                                Пиши ни
                                <figure className='contact-btn__figure'>
                                    <img src={require('../../images/arrow_forward_24dp_8A6BE9_FILL0_wght400_GRAD0_opsz24.png')} alt=''></img>
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
                                    <div className='spez-block__center-content'>
                                        <figure className='spez-block__figure'><img src={require('../../images/emoji_objects_50dp_FFF_FILL0_wght400_GRAD0_opsz48.png')} alt=''></img></figure>
                                        <p className='spez-block__p'>Иновативни продукти</p>
                                    </div>
                                </div>

                                <div className='spez-right-blocks__spez-block spez-block--sc-trh'>
                                    <div className='spez-block__center-content'>
                                        <figure className='spez-block__figure'><img src={require('../../images/emoji_objects_50dp_FFF_FILL0_wght400_GRAD0_opsz48.png')} alt=''></img></figure>
                                        <p className='spez-block__p'>Иновативни продукти</p>
                                    </div>
                                </div>

                                <div className='spez-right-blocks__spez-block spez-block--sc-trh'>
                                    <div className='spez-block__center-content'>
                                        <figure className='spez-block__figure'><img src={require('../../images/emoji_objects_50dp_FFF_FILL0_wght400_GRAD0_opsz48.png')} alt=''></img></figure>
                                        <p className='spez-block__p'>Иновативни продукти</p>
                                    </div>
                                </div>

                                <div className='spez-right-blocks__spez-block spez-block--fr-fth'>
                                    <div className='spez-block__center-content'>
                                        <figure className='spez-block__figure'><img src={require('../../images/emoji_objects_50dp_FFF_FILL0_wght400_GRAD0_opsz48.png')} alt=''></img></figure>
                                        <p className='spez-block__p'>Иновативни продукти</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='about-us-main__ab-us-team'>
                        <h3 className='ab-us-main-txt__h3'><span>Поддържаният</span> ни екип.</h3>
                        <div className='ab-us-team__ab-us-team-divs'>
                            <div className='ab-us-team-divs__team-div'>
                                <figure className='team-div__figure'></figure>
                                <div className='team-div__team-emp-txt'>
                                    <p className='team-emp-txt__name-p'>Kristian Kiselkov</p>
                                    <p className='team-emp-txt__pos-p'>Founder & CEO</p>
                                </div>
                            </div>

                            <div className='ab-us-team-divs__team-div'>
                                <figure className='team-div__figure'></figure>
                                <div className='team-div__team-emp-txt'>
                                    <p className='team-emp-txt__name-p'>Kristian Kiselkov</p>
                                    <p className='team-emp-txt__pos-p'>Founder & CEO</p>
                                </div>
                            </div>

                            <div className='ab-us-team-divs__team-div'>
                                <figure className='team-div__figure'></figure>
                                <div className='team-div__team-emp-txt'>
                                    <p className='team-emp-txt__name-p'>Kristian Kiselkov</p>
                                    <p className='team-emp-txt__pos-p'>Founder & CEO</p>
                                </div>
                            </div>

                            <div className='ab-us-team-divs__team-div'>
                                <figure className='team-div__figure'></figure>
                                <div className='team-div__team-emp-txt'>
                                    <p className='team-emp-txt__name-p'>Kristian Kiselkov</p>
                                    <p ref={formRef} className='team-emp-txt__pos-p'>Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='about-us-main__ab-us-contact-section'>
                        <h3 className='ab-us-main-txt__h3'><span>Пиши ни</span>, не хапем.</h3>
                        <div className='ab-us-contact-section__ab-us-contact'>
                            <div className='ab-us-contact__contact-form'>
                                <div className='contact-form__con-form-fr-name'>
                                    <label className='con-form__label'>Име</label>
                                    <input className='con-form-fr-name__input' type='text' placeholder='Име...'></input>
                                </div>
                                <div className='contact-form__con-form-lst-name'>
                                    <label className='con-form__label'>Фамилия</label>
                                    <input className='con-form-lst-name__input' type='text' placeholder='Фамилия...'></input>       
                                </div>

                                <div className='contact-form__con-form-number'>
                                    <label className='con-form__label'>Телефон</label>
                                    <input className='con-form-number__input' type='text' placeholder='Телефон...'></input>
                                </div>

                                <div className='contact-form__con-form-email'>
                                    <label className='con-form__label'>Имейл</label>
                                        <input className='con-form-email__input' type='text' placeholder='Имейл...'></input>
                                </div>
                                <div className='contact-form__con-form-message'>
                                    <label className='con-form__label'>Съобщение</label>
                                    <textarea className='con-form-message__input' placeholder='Съобщение...'></textarea>
                                </div>

                                <button className='contact-form__con-form-btn'>
                                    Изпрати
                                </button>
                            </div>

                            <div className='ab-us-contact__contact-socials'>
                                <div className='contact-socials__socials'>
                                    <h3 className='socials__h3'>Последвайте ни.</h3>

                                    <div className='socials__socials-icons socials-icons'>
                                        <figure className='socials-icons__figure'>
                                            <img src={require('../../images/facebook.png')} alt=''></img>
                                        </figure>
                                        <p className='socials-icons__p'>@hygienebulgaria</p>
                                    </div>

                                    <div className='socials__socials-icons socials-icons'>
                                        <figure className='socials-icons__figure'>
                                            <img src={require('../../images/instagram.png')} alt=''></img>
                                        </figure>
                                        <p className='socials-icons__p'>@hygienebulgaria</p>
                                    </div>

                                    <div className='socials__socials-icons socials-icons'>
                                        <figure className='socials-icons__figure'>
                                            <img src={require('../../images/x.png')} alt=''></img>
                                        </figure>
                                        <p className='socials-icons__p'>@hygienebulgaria</p>
                                    </div>
                                </div>

                                <div className='contact-socials__call-us'>
                                    <h3 className='socials__h3'>Свържете се с нас.</h3>
                                    <div className='call-us-div socials-icons'>
                                        <figure className='socials-icons__figure'>
                                            <img src={require('../../images/phone-call.png')} alt=''></img>
                                        </figure>
                                        <p className='socials-icons__p'>+359 899 818 526</p>
                                    </div>
                                </div>

                                <div className='contact-socials__visit-us'>
                                    <h3 className='socials__h3'>Посетете ни.</h3>
                                    <div className='visit-us-div socials-icons'>
                                        <figure className='socials-icons__figure'>
                                            <img src={require('../../images/location.png')} alt=''></img>
                                        </figure>
                                        <p className='socials-icons__p'>ул. Братя Шкорпил 13, Варна, България</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}