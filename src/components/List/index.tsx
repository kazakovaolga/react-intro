import React, { useState } from 'react';

function List() {
    const [active, setActive] = useState(true);
    const backgroundColor = ({ active }) ? "#4caf50" : "#111";

    return (
        <>   
                <ul className="navigation__list">
                    <li className="navigation__list-element navigation__list-element-active"
                        background-color={backgroundColor}>
                        <a href="">Главная</a>
                    </li>
                    <li className="navigation__list-element" background-color={backgroundColor}>
                        <a href="">Наши ученики</a>
                    </li>
                    <li className="navigation__list-element" background-color={backgroundColor}>
                        <a href="">Запись на пробное занятие</a>
                    </li>
                    <li className="navigation__list-element" background-color={backgroundColor}>
                        <a href="">Наши фото</a>
                    </li>
                </ul>            
        </>
    );
}

export default List;