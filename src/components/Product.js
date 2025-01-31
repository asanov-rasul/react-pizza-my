import { useState } from "react";

function Product({ pizza, setCartCount, cartCount, setCartPrice, cartPrice, cartPizzas, setCartPizzas }) {
    const [count, setCount] = useState(0)
    const [pizzaWeight, setPizzaWeight] = useState(pizza.types[0])
    const [pizzaSize, setPizzaSize] = useState(pizza.sizes[0])

    const pizzaWeighter = (e) => {
        setPizzaWeight(e)
    }

    const pizzaSizeer = (e) => {
        setPizzaSize(e)
    }

    const pizzaWeights = ["тонкое", "традиционное"];
    const pizzaSizes = [26, 30, 40];

    const scale = pizzaSize / 37.5;

    return(
        <div className="pizza-block">
                <img
                className="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
                style={{
                    transform: `scale(${scale})`,
                    transition: "transform 0.3s ease",
                    transformOrigin: "center",

                }}
                />
                <h4 className="pizza-block__title">{pizza.name}</h4>
                <div className="pizza-block__selector">
                <ul>
                    {pizzaWeights.map((item, index) => 
                        <li key={index}
                            className={`${item === pizzaWeight ? 'active' : ''}${pizza.types.includes(item) ? "" : "disabled"}`}
                            onClick={() => pizzaWeighter(item)}>{item}</li>
                    )}
                </ul>
                <ul>
                    {pizzaSizes.map((item, index) => 
                        <li key={index}
                            className={`${item === pizzaSize ? 'active' : ''} ${pizza.sizes.includes(item) ? "" : "disabled"}`}
                            onClick={() => pizzaSizeer(item)}>{item} см.</li>
                    )}
                </ul>
                </div>
                <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {Math.floor(`${pizza.price + pizzaSize * 1.3}`)} ₽</div>
                <div className="button button--outline button--add"
                     onClick={() => { setCount(count + 1) ;setCartCount(cartCount + 1); setCartPrice(cartPrice + Math.floor(`${pizza.price + pizzaSize * 1.3}`)); setCartPizzas([...cartPizzas, {id: pizza.id, img: pizza.image, name: pizza.name, size: pizzaSize,type: pizzaWeight, count: 1, price: Math.floor(`${pizza.price + pizzaSize * 1.3}`)}])}}>
                    <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                    />
                    </svg>
                    <span>Добавить</span>
                    <i>{count}</i>
                </div>
                </div>
            </div>
    ) 
}

export default Product;