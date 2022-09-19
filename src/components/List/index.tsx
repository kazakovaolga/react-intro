import React, { useState } from 'react';

function List() {
    const [active, setActive] = useState(true);    

    return (
        <>   
                <ul className="navigation__list">
                    <li className="navigation__list-element navigation__list-element-active"
                        style = {{backgroundColor: "#4caf50"}}>
                        <a href="">Главная</a>
                    </li>
                    <li className="navigation__list-element" style = {{backgroundColor: "#4caf50"}}>
                        <a href="">Наши ученики</a>
                    </li>
                    <li className="navigation__list-element" style = {{backgroundColor: "#4caf50"}}>
                        <a href="">Запись на пробное занятие</a>
                    </li>
                    <li className="navigation__list-element" style = {{backgroundColor: "#4caf50"}}>
                        <a href="">Наши фото</a>
                    </li>
                </ul>            
        </>
    );
}

export default List;