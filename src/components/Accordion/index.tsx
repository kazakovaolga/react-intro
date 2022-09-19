import React, { useState } from 'react';

function Accordion(props:{text:string}) {
    const [visible, setVisible] = useState(true);

    function clickHandler() {
        setVisible(!visible);        
      }

    return (
        <>
            <div className='accordion'
             onClick={clickHandler}
             style={{ height: '100px', width: '300px', backgroundColor: 'green' }}
            >
                <div data-accordion-header>Accordion Click Me</div>
                <div data-accordion-body
                    onClick={clickHandler}
                    hidden={visible}
                    data-testid='accordion'
                >
                   {props.text}
                </div>
            </div>
        </>
    );
}

export default Accordion;



