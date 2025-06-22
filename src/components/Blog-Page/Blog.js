import "./Blog.css"
import { Nav } from "../Nav/Nav";
import { useState, useEffect } from "react";
import { blogsArrays } from "./BlogsArray";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";


export function Blog() {
    const [ currentTitleIndex, setCurrentTitleIndex ] = useState(0);

    const titleOptions = blogsArrays[currentTitleIndex].title;
    const [transitionStage, setTransitionStage] = useState("entering");

    useEffect(() => {
        const interval = setInterval(() => {
            setTransitionStage("exiting");
            setTimeout(() => {
                setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % blogsArrays.length);
                setTransitionStage("entering");
            }, 500);
        }, 2500);
    
        return () => clearInterval(interval);
    }, []);

    const [input, setInput] = useState('');
    
    const inputText = (e) => {
        setInput(e.target.value);
    }

    const blogFunc = () => {
       try {
            return (
                blogsArrays.map((blog, index) => (
                    <Link to={`/blog/${blog.id}`} className="all-blogs-content__all-blogs-div" key={index}>
                        <figure className="all-blogs-div__figure"><img src={blog.image}></img></figure>
                        <p className="all-blogs-div__about-p">{blog.topic}</p>

                        <div className="all-blogs-div__blog-text">
                            <h3 className="blog-text__h3">{blog.title}</h3>
                            <p className="blog-text__p">{blog.primaryP}</p>
                        </div>

                        <div className="all-blogs-div__blog-user-ttr">
                            <div className="blog-user-ttr__blog-user">
                                <figure className="amb-user-date__figure">
                                    <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                </figure>
                                <p className="amb-user__p">{blog.author}</p>
                            </div>

                            <div className="blog-user-ttr__blog-ttr">
                                <p className="blog-ttr__p">{blog.ttr}</p>
                            </div>
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

            <section className="blog">
                <div className="blog__top-blog-page">
                    <p className="top-blog-page__p-box">Чети нашия сермичен блог.</p>
                    <h1 className={`top-blog-page__h1 ${transitionStage}`}>{titleOptions}</h1>
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
                        {blogFunc()}
                    </div>
                </div>

                <div className="product__product-signup-banner product-signup-banner--blog">
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