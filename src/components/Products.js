import Product from "./Product";


function Products({ setCartCount, cartCount, setcartPrice, cartPrice, filterPizzas }) {

    return(
        <div className="content__items">
            {filterPizzas.map((pizza) => (
                <Product setCartCount={setCartCount} cartCount={cartCount} setcartPrice={setcartPrice} cartPrice={cartPrice} key={pizza.id} pizza={pizza} />
            ))}
          </div>
    )
}

export default Products;