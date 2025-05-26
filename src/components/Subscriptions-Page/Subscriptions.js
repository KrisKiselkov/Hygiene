import "./Subscriptions.css";
import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";


export function Subscriptions() {
    return(
        <>
            <Nav />
            <section className="subscriptions">
                <div className="subscriptions__sub-heading">
                    <div className="sub-heading__sub-heading-text">
                        <h1 className="sub-heading-text__h1">Запознайте се с нашите <span>абонаменти</span>,<br></br> изберете правилният <span>за Вас</span>.</h1>
                        <p className="sub-heading-text__p"></p>
                    </div>
                </div>

                <div className="subscriptions__sub-div-table">
                    <table className="sub-div-table__sub-table">
                        <thead className="sub-table__head">
                            <tr>
                                <th className="th th--fr-col">
                                        <h2>Hygiene</h2>
                                        <p>Bulgaria</p>
                                </th>
                                <th className="th">
                                    <p className="th__plan-name">Базов</p>
                                    <p className="th__plan-price">$14.99<span>/мес.</span></p>
                                    <p className="th__plan-for">Подходящ за начинаещи.</p>
                                    <button className="th__plan-btn">Избери</button>
                                </th>

                                <th className="th">
                                    <p className="th__plan-name">Напредналии</p>
                                    <p className="th__plan-price">$19.99<span>/мес.</span></p>
                                    <p className="th__plan-for">Подходящ за напреднали.</p>
                                    <button className="th__plan-btn">Избери</button>
                                </th>

                                <th className="th">
                                    <p className="th__plan-name">Експерти</p>
                                    <p className="th__plan-price">$29.99<span>/мес.</span></p>
                                    <p className="th__plan-for">Подходящ за експерти.</p>
                                    <button className="th__plan-btn">Избери</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="sub-table__body">
                            <tr>
                                <td className="td td-fr-col">Продукти</td>
                                <td className="td">до 5</td>
                                <td className="td">до 10</td>
                                <td className="td">до 20</td>
                            </tr>
                            <tr>
                                <td className="td td-fr-col">Продукти</td>
                                <td className="td">до 5</td>
                                <td className="td">до 10</td>
                                <td className="td">до 20</td>
                            </tr>
                            <tr>
                                <td className="td td-fr-col">Продукти</td>
                                <td className="td">до 5</td>
                                <td className="td">до 10</td>
                                <td className="td">до 20</td>
                            </tr>
                            <tr>
                                <td className="td td-fr-col">Продукти</td>
                                <td className="td">до 5</td>
                                <td className="td">до 10</td>
                                <td className="td">до 20</td>
                            </tr>
                            <tr>
                                <td className="td td-fr-col">Продукти</td>
                                <td className="td">до 5</td>
                                <td className="td">до 10</td>
                                <td className="td">до 20</td>
                            </tr>
                            <tr>
                                <td className="td td-fr-col">Продукти</td>
                                <td className="td">до 5</td>
                                <td className="td">до 10</td>
                                <td className="td">до 20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="subscriptions__mobile-sub-div">
                    <div className="mobile-sub-div__mb-sub-card">
                        <h3 className="mb-sub-card__h3">Базов</h3>
                        <p className="mb-sub-card__p">Подходящ за начинаещи.</p>
                        <p className="mb-sub-card__price">$14.99<span>/мес.</span></p>

                        <hr className="mb-sub-card__hr"></hr>

                        <p className="mb-sub-card__p-include">Какво включва?</p>

                        <ul className="mb-sub-card__sub-card-ul">
                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 5</li>

                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 5</li>

                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 5</li>

                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 5</li>
                        </ul>

                        <button className="mb-sub-card__btn">Избери</button>
                        <a className="mb-sub-card__a">Научете повече</a>
                    </div>

                    <div className="mobile-sub-div__mb-sub-card">
                        <p className="mb-sub-card__popular">Популярно</p>
                        <h3 className="mb-sub-card__h3">Напреднали</h3>
                        <p className="mb-sub-card__p">Подходящ за напреднали.</p>
                        <p className="mb-sub-card__price">$19.99<span>/мес.</span></p>

                        <hr className="mb-sub-card__hr"></hr>

                        <p className="mb-sub-card__p-include">Какво включва?</p>

                        <ul className="mb-sub-card__sub-card-ul">
                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 10</li>

                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 10</li>

                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 10</li>

                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 10</li>
                        </ul>

                        <button className="mb-sub-card__btn mb-sub-card__btn--active">Избери</button>
                        <a className="mb-sub-card__a">Научете повече</a>
                    </div>

                    <div className="mobile-sub-div__mb-sub-card">
                        <h3 className="mb-sub-card__h3">Експерти</h3>
                        <p className="mb-sub-card__p">Подходящ за експерти.</p>
                        <p className="mb-sub-card__price">$29.99<span>/мес.</span></p>

                        <hr className="mb-sub-card__hr"></hr>

                        <p className="mb-sub-card__p-include">Какво включва?</p>

                        <ul className="mb-sub-card__sub-card-ul">
                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 20</li>

                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 20</li>

                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 20</li>

                            <li className="sub-card-ul__li"><img className="sub-card-ul__check" src={require('../../images/check_circle_32dp_181818_FILL0_wght400_GRAD0_opsz40.png')}></img> Продукти до 20</li>
                        </ul>

                        <button className="mb-sub-card__btn">Избери</button>
                        <a className="mb-sub-card__a">Научете повече</a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}