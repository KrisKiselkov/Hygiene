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
            </section>

            <Footer />
        </>
    );
}