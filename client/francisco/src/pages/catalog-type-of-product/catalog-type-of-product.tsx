import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Menu from "../../components/menu-nav/menu-nav";

function CatalogTypeOfProducts():JSX.Element {
    return (
        <section className="catalog-page-for-you">
            <Helmet>
                <title>Каталог товаров</title>
            </Helmet>
            <ul className="catalog-page-for-you-list list-type-products">
                <li className="list-type-products__item item-type-product item-type-product--macbook">
                    <div className="item-type-product__phrase-wrapper">
                        <div className="item-type-product__phrase">
                            <p className="item-type-product__phrase-text">
                                Легко использовать.
                                <span className="item-type-product__phrase-text--color">
                                    Легко любить.
                                </span>
                            </p>
                            <img className="item-type-product__phrase-image" width="551" height="371" src="image/type-macbook-bg@1.png" srcSet="image/type-macbook-bg@4.png"/>
                        </div>
                    </div>
                    <img className="item-type-product__image" src="image/macbook-type.png" srcSet="image/macbook-type@4.png"/>
                    <Link className="item-type-product__title" to="catalog-macbook.html">
                        MacBook
                    </Link>
                    <span className="item-type-product__price">
                        от 100990 ₽
                    </span>
                    <Link className="item-type-product__link" to="catalog-macbook.html">
                        Перейти
                        <div className="item-type-product__link-arrow"></div>
                    </Link>
                </li>
                <li className="list-type-products__item item-type-product item-type-product--airpods">
                    <div className="item-type-product__phrase-wrapper">
                        <div className="item-type-product__phrase">
                            <p className="item-type-product__phrase-text">
                                Культовые. <br/> Теперь
                                <span className="item-type-product__phrase-text--color">
                                    сверхзвуковые.
                                </span>
                            </p>
                            <img className="item-type-product__phrase-image" width="370" height="374" src="image/type-airpods-bg.png" srcSet="image/type-airpods-bg@4.png"/>
                        </div>
                    </div>
                    <img className="item-type-product__image" src="image/airpods-type.png" srcSet="image/airpods-type@4.png"/>
                    <Link className="item-type-product__title" to="catalog-airpods.html">
                        AirPods
                    </Link>
                    <span className="item-type-product__price">
                        от 10990 ₽
                    </span>
                    <Link to="" className="item-type-product__link">
                        Перейти
                        <div className="item-type-product__link-arrow"></div>
                    </Link>
                </li>
                <li className="list-type-products__item item-type-product item-type-product--ipad">
                    <div className="item-type-product__phrase-wrapper">
                        <div className="item-type-product__phrase">
                            <p className="item-type-product__phrase-text">
                                Ваше рабочее место может
                                <span className="item-type-product__phrase-text--color">
                                    быть где угодно.
                                </span>
                            </p>
                            <img className="item-type-product__phrase-image" width="394" height="371" src="image/type-ipad-bg.png" srcSet="image/type-ipad-bg@4.png"/>
                        </div>
                    </div>
                    <img className="item-type-product__image" src="image/ipad-type.png" srcSet="image/ipad-type@4.png"/>
                    <Link className="item-type-product__title" to="">
                        iPad
                    </Link>
                    <span className="item-type-product__price">
                        от 40990 ₽
                    </span>
                    <Link className="item-type-product__link" to="catalog-ipad.html">
                        Перейти
                        <div className="item-type-product__link-arrow"></div>
                    </Link>
                </li>
                <li className="list-type-products__item item-type-product item-type-product--apple-watch">
                    <div className="item-type-product__phrase-wrapper">
                        <div className="item-type-product__phrase">
                            <p className="item-type-product__phrase-text">
                                Ваше рабочее место может
                                <span className="item-type-product__phrase-text--color">
                                    быть где угодно.
                                </span>
                            </p>
                            <img className="item-type-product__phrase-image" width="394" height="371" src="image/type-apple-watch-bg.png" srcSet="image/type-apple-watch-bg@4.png"/>
                        </div>
                    </div>
                    <img className="item-type-product__image" src="image/apple-watch-type.png" srcSet="image/apple-watch-type@4.png"/>
                    <Link className="item-type-product__title" to="">
                        &#63743; Watch
                    </Link>
                    <span className="item-type-product__price">
                        от 27990 ₽
                    </span>
                    <Link className="item-type-product__link" to="catalog-apple-watch.html">
                        Перейти
                        <div className="item-type-product__link-arrow"></div>
                    </Link>
                </li>
                <li className="list-type-products__item item-type-product item-type-product--iphon">
                    <div className="item-type-product__phrase-wrapper">
                        <div className="item-type-product__phrase">
                            <p className="item-type-product__phrase-text">
                                Создан, чтобы быть
                                <span className="item-type-product__phrase-text--color">
                                    любимым
                                </span>
                            </p>
                            <img className="item-type-product__phrase-image" width="305" height="375" src="image/type-iphon-bg.png" srcSet="image/type-iphon-bg@4.png"/>
                        </div>
                    </div>
                    <img className="item-type-product__image" src="image/iphon-type.png" srcSet="image/iphon-type@4.png"/>
                    <Link className="item-type-product__title" to="">
                        iPhone
                    </Link>
                    <span className="item-type-product__price">
                        от 56990 ₽
                    </span>
                    <Link className="item-type-product__link" to="catalog-iphone.html">
                        Перейти
                        <div className="item-type-product__link-arrow"></div>
                    </Link>
                </li>
                <li className="list-type-products__item item-type-product item-type-product--dyson">
                    <div className="item-type-product__phrase-wrapper">
                        <div className="item-type-product__phrase">
                            <p className="item-type-product__phrase-text">
                                Выдающиеся цвета.
                                <span className="item-type-product__phrase-text--color">
                                    Только у Dyson.
                                </span>
                            </p>
                            <img className="item-type-product__phrase-image" width="393" height="323" src="image/type-dyson-bg.png" srcSet="image/type-dyson-bg@4.png"/>
                        </div>
                    </div>
                    <img className="item-type-product__image" src="image/dyson-type.png" srcSet="image/dyson-type@4.png"/>
                    <Link className="item-type-product__title" to="">
                        Dyson
                    </Link>
                    <span className="item-type-product__price">
                        от 33990 ₽
                    </span>
                    <Link className="item-type-product__link" to="catalog-dyson.html">
                        Перейти
                        <div className="item-type-product__link-arrow"></div>
                    </Link>
                </li>
                <li className="list-type-products__item item-type-product item-type-product--playstation">
                    <div className="item-type-product__phrase-wrapper">
                        <div className="item-type-product__phrase">
                            <p className="item-type-product__phrase-text">
                                Играйте на<br/>
                                <span className="item-type-product__phrase-text--color">
                                    новом
                                </span>
                                уровне.
                            </p>
                            <img className="item-type-product__phrase-image" width="393" height="297" src="image/type-playstation-bg.png" srcSet="image/type-playstation-bg@4.png"/>
                        </div>
                    </div>
                    <img className="item-type-product__image" src="image/playstation-type.png" srcSet="image/playstation-type@4.png"/>
                    <Link className="item-type-product__title" to="">
                        PlayStation
                    </Link>
                    <span className="item-type-product__price">
                        от 33990 ₽
                    </span>
                    <Link className="item-type-product__link" to="catalog-playstation.html">
                        Перейти
                        <div className="item-type-product__link-arrow"></div>
                    </Link>
                </li>
        </ul>
        <Menu/>
        </section>
    );
}

export default CatalogTypeOfProducts;
