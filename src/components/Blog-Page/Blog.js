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
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}