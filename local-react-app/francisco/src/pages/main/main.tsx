import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import Menu from '../../components/menu-nav/menu-nav';
import SliderMain from '../../components/slider-main-page/slider-main-page';
import { AppRoute } from '../../const';

function Main(): JSX.Element {
    return (
        (
        <section className="main-page-for-you">
            <Helmet>
                <title>francisco</title>
            </Helmet>
            <section className="main-page-for-you-title title-block">
                <p className="title-block__text">
                    <span className="title-block__text--black">francisco.</span> Лучший способ купить продукты, которые ты любишь.
                </p>
            </section>
            <SliderMain/>
            <section className="main-page-for-you-text new-product">
                <p className="new-product__text">
                    <span className="new-product__text--gold">Последнее.</span>Открой для себя новинки Apple.
                </p>
                <a className="new-product__link" href="#">
                    Перейти
                    <div className="new-product__link-arrow"></div>
                </a>
            </section>
            <img className="main-page-for-you-image-electronic" src="image/electronic.png" srcSet="image/electronic@4.png" alt="Какая-то электроника"/>
            <section className="main-page-for-you-why-francisco why-francisco">
                <img className="why-francisco-image" src="image/why-francisco.webp" alt="Почему нужно выбрать francisco?"/>
                <ul className="why-francisco-list list-reasons-why">
                    <li className="list-reasons-why__item">
                        <div className="list-reasons-why__item-wrapper">
                            <p className="list-reasons-why__item-text">
                                24-часовая поддержка, готовая помочь <br/>с любым вопросом
                            </p>
                            <a className="list-reasons-why__item-link">
                                Написать в поддержку
                                <div className="list-reasons-why__item-link-arrow"></div>
                            </a>
                        </div>
                    </li>
                    <li className="list-reasons-why__item">
                        <div className="list-reasons-why__item-wrapper">
                            <p className="list-reasons-why__item-text">
                                Быстрая доставка <br/>по Москве и Ростову
                            </p>
                            <a className="list-reasons-why__item-link">
                                Подробнее о доставке
                                <div className="list-reasons-why__item-link-arrow"></div>
                            </a>
                        </div>
                    </li>
                    <li className="list-reasons-why__item">
                        <div className="list-reasons-why__item-wrapper">
                            <p className="list-reasons-why__item-text">
                                francisco имеет лучшие цены на рынке
                            </p>
                            <a className="list-reasons-why__item-link">
                                К выбору девайса
                                <div className="list-reasons-why__item-link-arrow"></div>
                            </a>
                        </div>
                    </li>
                    <li className="list-reasons-why__item">
                        <div className="list-reasons-why__item-wrapper">
                            <p className="list-reasons-why__item-text">
                                Удобная trade-in система
                            </p>
                            <a className="list-reasons-why__item-link">
                                Узнать о программе trade-in
                                <div className="list-reasons-why__item-link-arrow"></div>
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
            <img className="logo-and-additional-icons-image" src="image/logo-and-additional-icons.webp" alt="francisco"/>
            <section className="reviews-main">
                <p className="reviews-main__text">
                    <span className="reviews-main__text--black">Доверие.</span> Изучи отзывы довольных клиентов, выбравших francisco.
                </p>
                <a className="reviews-main__link" href="#">
                    Перейти
                    <div className="reviews-main__link-arrow"></div>
                </a>
            </section>
            <section className="phrase-francisco">
                <p className="phrase-francisco__text">
                    <span className="phrase-francisco__text--black">francisco.</span> Качество и стиль, которые вы заслуживаете.
                </p>
            </section>
            <section className="catalog-main">
                <Link className="catalog-main__link" to={AppRoute.Catalog}>
                    Перейти к продуктам
                    <div className="catalog-main__link-arrow"></div>
                </Link>
                <img className="catalog-main__image" src="image/catalog-image-main.png" srcSet="image/catalog-image-main@4.png" alt="Различные товары"/>
            </section>
            <Menu/>
        </section>)
    );
}

export default Main;