import { Link } from "react-router-dom";

type TypeProductProps = {
    title: string;
    price: number;
}

function TypeProduct({typeProduct}: any): JSX.Element {
    const {title, price} = typeProduct;
    return (
        <li className="list-type-products__item item-type-product item-type-product--macbook">
            <img className="item-type-product__image" src="image/macbook-type.png" srcSet="image/macbook-type@4.png"/>
            <Link className="item-type-product__title" to="catalog-macbook.html">
                {title}
            </Link>
            <span className="item-type-product__price">
                от {price} ₽
            </span>
            <Link className="item-type-product__link" to="catalog-macbook.html">
                Перейти
                <div className="item-type-product__link-arrow"></div>
            </Link>
        </li>
    );
}

export default TypeProduct;
