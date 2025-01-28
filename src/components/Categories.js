import { use, useState } from "react";

function Categories({ pizzas, setFilterPizzas }) {
    const categoriesNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const [active, setActive] = useState('Все')

    const activate = (e) => {
        setActive(e)
    }

    function filterArr(e) {
        if (e == 'Все')  setFilterPizzas(pizzas)
        else setFilterPizzas(pizzas.filter(item => item.categories == e));
    }

    return(
        <div className="categories">
            <ul>
                {categoriesNames.map((item, index) => 
                    <li key={index} className={item == active ? 'active' : ''} onClick={() => {activate(item); filterArr(item)}}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default Categories;