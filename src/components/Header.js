import { Link } from "react-router"

import HeaderCart from "./HeaderCart"

function Header({ cartPizzas, totalPrice, totalCount}) {
    return(
        <div className="header">
        <div className="container">
          <Link to='/'>
            <div className="header__logo">
              <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
              <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <HeaderCart cartPizzas={cartPizzas} totalPrice={totalPrice} totalCount={totalCount}/>
        </div>
      </div>
    )
}

export default Header