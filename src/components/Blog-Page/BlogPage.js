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


    return (
        <>
            <Nav />
            <section className="blog-page">
                <div className="blog-page__blog-page-main">
                    <div className='blog-page__blur'>
                        <figure className="blog-page-main__figure">
                            <img src={image}></img>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    );
}