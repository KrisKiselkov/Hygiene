import "./Blog.css"
import { Nav } from "../Nav/Nav";


export function Blog() {
    return (
        <>
            <Nav />

            <section className="blog">
                <div className="blog__top-blog-page">
                    <p className="top-blog-page__p-box">Чети нашия сермичен блог.</p>
                    <h1 className="top-blog-page__h1">Заглавие на блог публикация.</h1>
                    <p className="top-blog-page__p">Предоставяме съвети и ресурси от лидери в индустрията. Наистина.</p>
                </div>

                <div className="blog__main-blog">
                    <div className="main-blog__main-blog-div">
                        <div className="main-blog-div__about-main-blog">
                            <h2 className="about-main-blog__h2">Заглавие на блог публикация.</h2>

                            <p className="about-main-blog__p">Ето как всяка от тях работи за вашата кожа.</p>

                            <div className="about-main-blog__amb-user-date">
                                <div className="amb-user-date amb-user-date--amb-user">
                                    <figure className="amb-user-date__figure">
                                        <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                    </figure>
                                    <p className="amb-user__p">К. Киселков</p>
                                </div>

                                <div className="amb-user-date amb-user-date--amb-date">
                                    <figure className="amb-user-date__figure">
                                        <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                    </figure>
                                    <p className="amb-date__p">25 Юни, 2025</p>
                                </div>
                            </div>
                            <figure className="about-main-blog__arrow-figure"><img src={require('../../images/arrow_outward.png')}></img></figure>
                        </div>
                    </div>
                </div>

                <hr className="blog-hr"></hr>

                <div className="blog__all-blogs">
                    <div className="all-blogs__all-blogs-content">
                        <div className="all-blogs-content__all-blogs-div">
                            <figure className="all-blogs-div__figure"><img src={require('../../images/natural-dental-products-bondi-beach.webp')}></img></figure>
                            <p className="all-blogs-div__about-p">Хигиена</p>

                            <div className="all-blogs-div__blog-text">
                                <h3 className="blog-text__h3">Заглавие на блог.</h3>
                                <p className="blog-text__p">Предоставяме съвети и ресурси от лидери в индустрията. Ето как всяка от тях ...</p>
                            </div>

                            <div className="all-blogs-div__blog-user-ttr">
                                <div className="blog-user-ttr__blog-user">
                                    <figure className="amb-user-date__figure">
                                        <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                    </figure>
                                    <p className="amb-user__p">К. Киселков</p>
                                </div>

                                <div className="blog-user-ttr__blog-ttr">
                                    <p className="blog-ttr__p">Четене: 5 мин</p>
                                </div>
                            </div>
                        </div>

                        <div className="all-blogs-content__all-blogs-div">
                            <figure className="all-blogs-div__figure"><img src={require('../../images/natural-dental-products-bondi-beach.webp')}></img></figure>
                            <p className="all-blogs-div__about-p">Хигиена</p>

                            <div className="all-blogs-div__blog-text">
                                <h3 className="blog-text__h3">Заглавие на блог.</h3>
                                <p className="blog-text__p">Предоставяме съвети и ресурси от лидери в индустрията. Ето как всяка от тях ...</p>
                            </div>

                            <div className="all-blogs-div__blog-user-ttr">
                                <div className="blog-user-ttr__blog-user">
                                    <figure className="amb-user-date__figure">
                                        <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                    </figure>
                                    <p className="amb-user__p">К. Киселков</p>
                                </div>

                                <div className="blog-user-ttr__blog-ttr">
                                    <p className="blog-ttr__p">Четене: 5 мин</p>
                                </div>
                            </div>
                        </div>

                        <div className="all-blogs-content__all-blogs-div">
                            <figure className="all-blogs-div__figure"><img src={require('../../images/natural-dental-products-bondi-beach.webp')}></img></figure>
                            <p className="all-blogs-div__about-p">Хигиена</p>

                            <div className="all-blogs-div__blog-text">
                                <h3 className="blog-text__h3">Заглавие на блог.</h3>
                                <p className="blog-text__p">Предоставяме съвети и ресурси от лидери в индустрията. Ето как всяка от тях ...</p>
                            </div>

                            <div className="all-blogs-div__blog-user-ttr">
                                <div className="blog-user-ttr__blog-user">
                                    <figure className="amb-user-date__figure">
                                        <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                    </figure>
                                    <p className="amb-user__p">К. Киселков</p>
                                </div>

                                <div className="blog-user-ttr__blog-ttr">
                                    <p className="blog-ttr__p">Четене: 5 мин</p>
                                </div>
                            </div>
                        </div>


                        <div className="all-blogs-content__all-blogs-div">
                            <figure className="all-blogs-div__figure"><img src={require('../../images/natural-dental-products-bondi-beach.webp')}></img></figure>
                            <p className="all-blogs-div__about-p">Хигиена</p>

                            <div className="all-blogs-div__blog-text">
                                <h3 className="blog-text__h3">Заглавие на блог.</h3>
                                <p className="blog-text__p">Предоставяме съвети и ресурси от лидери в индустрията. Ето как всяка от тях ...</p>
                            </div>

                            <div className="all-blogs-div__blog-user-ttr">
                                <div className="blog-user-ttr__blog-user">
                                    <figure className="amb-user-date__figure">
                                        <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                    </figure>
                                    <p className="amb-user__p">К. Киселков</p>
                                </div>

                                <div className="blog-user-ttr__blog-ttr">
                                    <p className="blog-ttr__p">Четене: 5 мин</p>
                                </div>
                            </div>
                        </div>

                        <div className="all-blogs-content__all-blogs-div">
                            <figure className="all-blogs-div__figure"><img src={require('../../images/natural-dental-products-bondi-beach.webp')}></img></figure>
                            <p className="all-blogs-div__about-p">Хигиена</p>

                            <div className="all-blogs-div__blog-text">
                                <h3 className="blog-text__h3">Заглавие на блог.</h3>
                                <p className="blog-text__p">Предоставяме съвети и ресурси от лидери в индустрията. Ето как всяка от тях ...</p>
                            </div>

                            <div className="all-blogs-div__blog-user-ttr">
                                <div className="blog-user-ttr__blog-user">
                                    <figure className="amb-user-date__figure">
                                        <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                    </figure>
                                    <p className="amb-user__p">К. Киселков</p>
                                </div>

                                <div className="blog-user-ttr__blog-ttr">
                                    <p className="blog-ttr__p">Четене: 5 мин</p>
                                </div>
                            </div>
                        </div>

                        <div className="all-blogs-content__all-blogs-div">
                            <figure className="all-blogs-div__figure"><img src={require('../../images/natural-dental-products-bondi-beach.webp')}></img></figure>
                            <p className="all-blogs-div__about-p">Хигиена</p>

                            <div className="all-blogs-div__blog-text">
                                <h3 className="blog-text__h3">Заглавие на блог.</h3>
                                <p className="blog-text__p">Предоставяме съвети и ресурси от лидери в индустрията. Ето как всяка от тях ...</p>
                            </div>

                            <div className="all-blogs-div__blog-user-ttr">
                                <div className="blog-user-ttr__blog-user">
                                    <figure className="amb-user-date__figure">
                                        <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                    </figure>
                                    <p className="amb-user__p">К. Киселков</p>
                                </div>

                                <div className="blog-user-ttr__blog-ttr">
                                    <p className="blog-ttr__p">Четене: 5 мин</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}