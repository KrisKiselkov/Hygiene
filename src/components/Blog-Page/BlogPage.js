import './BlogPage.css';
import { Nav } from '../Nav/Nav';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogsArrays } from './BlogsArray';


export function BlogPage() {
    const { id } = useParams();
    const blog = blogsArrays.filter((blog) => blog.id === id);
    
    const [image, setImage] = useState(blog[0].image);
    
    useEffect(() => {
        if (blog) {
            setImage(blog[0].image)
        }
    }, [image]);

    const { textOne, author, authorImg, imageOne } = blog[0];


    return (
        <>
            <Nav />
            <section className="blog-page">
                <div className="blog-page__blog-page-main">
                    <figure className="blog-page-main__figure">
                        <img src={image}></img>
                    </figure>
                    <div className="main-blog-div__about-main-blog blog-page-main__blog-about-div">
                        <h2 className="about-main-blog__h2">Заглавие на блог публикация.</h2>

                        <p className="about-main-blog__p">Ето как всяка от тях работи за вашата кожа.</p>

                        <div className="about-main-blog__amb-user-date">
                            <div className="amb-user-date amb-user-date--amb-user">
                                <figure className="amb-user-date__figure">
                                    <img src={authorImg}></img>
                                </figure>
                                <p className="amb-user__p">{author}</p>
                            </div>

                            <div className="amb-user-date amb-user-date--amb-date">
                                <figure className="amb-user-date__figure">
                                    <img src={authorImg}></img>
                                </figure>
                                <p className="amb-date__p">25 Юни, 2025</p>
                            </div>
                        </div>                            
                    </div>
                </div>

                <div className='blog-page__blog-content'>
                    <div className='blog-content__blog-content-text'>
                        <p className='blog-content-text__p'>
                            {textOne}
                        </p>

                        <figure className='blog-content-text__figure'><img src={imageOne} alt='image'></img></figure>

                        <p className='blog-content-text__p'>
                            {textOne}
                        </p>
                    </div>

                    <div className='blog-content__blog-content-nav'>
                        <ul className='blog-content-nav__blog-nav-ul'>
                            <li className='blog-nav-ul__li'>
                                <p>Тема 1</p>
                            </li>

                            <li className='blog-nav-ul__li'>
                                <p>Тема 2</p>
                            </li>

                            <li className='blog-nav-ul__li'>
                                <p>Тема 3</p>
                            </li>

                            <li className='blog-nav-ul__li'>
                                <p>Тема 4</p>
                            </li>
                        </ul>

                        <hr className='blog-content-nav__hr'></hr>

                        <div className='blog-content-nav__blog-nav-author'>
                            <h3 className='blog-nav-author__h3'>Автор</h3>

                            <div className="amb-user-date amb-user-date--blog-nav-author">
                                <figure className="amb-user-date__figure">
                                    <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                </figure>
                                <p className="amb-user__p">К. Киселков</p>
                            </div>
                        </div>

                        <hr className='blog-content-nav__hr'></hr>

                        <div className='blog-content-nav__blog-nav-contributors'>
                            <h3 className='blog-nav-author__h3'>Сътрудници</h3>

                            <div className="amb-user-date amb-user-date--blog-nav-author">
                                <figure className="amb-user-date__figure">
                                    <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                </figure>
                                <p className="amb-user__p">К. Киселков</p>
                            </div>

                            <div className="amb-user-date amb-user-date--blog-nav-author">
                                <figure className="amb-user-date__figure">
                                    <img src={require('../../images/Aquaphor-Advanced-Therapy-Unscented-Hand-and-Body-Moisturizer-Ointment-for-Cracked-Skin-1-75oz_5f2b8be0-b637-4ed0-bf72-ee2cdca5510e.82f78b82388f236992aa121ae850e46a.png')}></img>
                                </figure>
                                <p className="amb-user__p">К. Киселков</p>
                            </div>
                        </div>

                        <hr className='blog-content-nav__hr'></hr>


                    </div>
                </div>
            </section>
        </>
    );
}