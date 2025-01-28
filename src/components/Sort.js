import { useState } from "react";

function Sort({ setFilterPizzas, filterPizzas }) {
  const sortNames = ['популярности', 'цене', 'алфавиту'];
  const [hideSort, setHideSort] = useState(true)
  const [active, setActive] = useState('популярности')

    const activate = (e) => {
        setActive(e)
    }

    function filterSort(e) {
        if (e == 'популярности') setFilterPizzas([...filterPizzas].sort((a, b) => b.rating - a.rating))
        else if (e == 'цене') setFilterPizzas([...filterPizzas].sort((a, b) => b.price - a.price))
        else if (e == 'алфавиту') setFilterPizzas([...filterPizzas].sort((a, b) => a.name.localeCompare(b.name)))
    }

    return(
        <div className="sort">
              <div className="sort__label">
                <svg className={hideSort ? '' : 'rotated'}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => setHideSort(!hideSort)}>{active}</span>
              </div>
              <div className={hideSort ? 'sort__popup hide' : 'sort__popup'}>
                <ul>
                {sortNames.map((item, index) => 
                    <li key={index} className={item == active ? 'active' : ''} onClick={() => { activate(item); filterSort(item) }}>{item}</li>
                )}
                </ul>
              </div>
            </div>
    )
}

export default Sort;