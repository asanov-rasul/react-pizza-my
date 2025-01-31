import Product from "./Product";

function Products({ setCartCount, cartCount, setCartPrice, cartPrice, filterPizzas, cartPizzas, setCartPizzas }) {

    return(
        <div className="content__items">
            {filterPizzas.map((pizza) => (
                <Product setCartCount={setCartCount} cartCount={cartCount} setCartPrice={setCartPrice} cartPrice={cartPrice} key={pizza.id} pizza={pizza} cartPizzas={cartPizzas} setCartPizzas={setCartPizzas} />
            ))}
          </div>
    )
}

export default Products;