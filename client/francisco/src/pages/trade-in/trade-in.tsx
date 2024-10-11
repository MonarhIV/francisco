import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Menu from "../../components/menu-nav/menu-nav";

import { AppRoute } from "../../const";

function TradeIn():JSX.Element {
    return (
        (
            <section className="trade-in">
                <Helmet>
                    <title>Трейд Ин</title>
                </Helmet>
                <h1 className="trade-in__title">
                    <span className="trade-in__title--color">Трейд-ин.</span> Обменяй.<br/> Обнови. Экономь. Это <br/>выигрыш-выигрыш-выигрыш.
                </h1>
                <img className="trade-in__picture-exchange" src="image/trade-in-exchange.png" srcSet="image/trade-in-exchange@4.png" alt="Обмен телефонами"/>
                <div className="trade-in__text">
                    Как воспользоваться <span className="trade-in__text--color">Трейд-ин?</span>
                </div>
                <ul className="trade-in__list list-steps">
                    <li className="list-steps__item list-steps__item--one">
                        <div className="list-steps__item-wrapper">
                            <h2 className="list-steps__item-title">
                                Шаг 1
                            </h2>
                            <p className="list-steps__item-text">
                                Свяжись с нами и расскажи <br/>о технике, которую хочешь <span className="list-steps__item-text--color">сдать.</span>
                            </p>
                        </div>
                        <img className="list-steps__item-picture" src="image/step-exchange-1.png" srcSet="image/step-exchange-1@4.png" alt="Изучение устройства"/>
                    </li>
                    <li className="list-steps__item list-steps__item--two">
                        <div className="list-steps__item-wrapper">
                            <h2 className="list-steps__item-title">
                                Шаг 2
                            </h2>
                            <p className="list-steps__item-text">
                            Поддержка поможет оценить твой девайс, и ты узнаешь <br/>его <span className="list-steps__item-text--color">стоимость.</span>
                            </p>
                        </div>
                        <img className="list-steps__item-picture" src="image/step-exchange-2.png" srcSet="image/step-exchange-2@4.png" alt="Узнать стоимость девайса"/>
                    </li>
                    <li className="list-steps__item list-steps__item--three">
                        <div className="list-steps__item-wrapper">
                            <h2 className="list-steps__item-title">
                                Шаг 3
                            </h2>
                            <p className="list-steps__item-text">
                            Выбери сам: получить <span className="list-steps__item-text--color">скидку</span> на смартфон или забрать деньги.
                            </p>
                        </div>
                        <img className="list-steps__item-picture" src="image/step-exchange-3.png" srcSet="image/step-exchange-3@4.png" alt="Изучение устройства"/>
                    </li>
                </ul>
                <a href="https://t.me/francisco_manager" className="trade-in__link">
                    Написать нам
                    <div className="trade-in__link-arrow"></div>
                </a>
                <Menu activePage={AppRoute.Main}/>
            </section>)
    );
}

export default TradeIn;
