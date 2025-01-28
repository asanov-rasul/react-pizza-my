import HeaderCart from "./HeaderCart"

function Header({ cartCount, cartPrice}) {
    return(
        <div className="header">
        <div className="container">
          <div className="header__logo">
            <img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <HeaderCart cartCount={cartCount} cartPrice={cartPrice}/>
        </div>
      </div>
    )
}

export default Header