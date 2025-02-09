import "./Product.css";
import { Nav } from '../Nav/Nav';


export function Product() {
    return (
        <>
            <Nav />
            <section className="product">
                <div className="product__product-main">
                    <div className="product-main__product-img-div">
                        <div className="product-img-div__product-all-img">
                            
                        </div>

                        <div className="product-image-div__product-main-img">

                        </div>
                    </div>

                    <div className="product-main__product-info-div">
                        <p className="product-info-div__brand-p"></p>
                        <h2 className="product-info-div__h2"></h2>
                        <div className="product-info-div__product-rating">
                            <figure className="product-rating__figure"><img></img></figure>
                            <p className="product-rating__p"></p>
                        </div>

                        <div className="product-info-div__product-price-div">
                            <p className="product-price-div__new-price"></p>
                            <p className="product-price-div__old-price"></p>
                            <p className="product-price-div__discount"></p>
                        </div>

                        <p className="product-price-div__desc-p"></p>

                        <div className="product-price-div__product-atc-div">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}