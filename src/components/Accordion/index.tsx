import React,{ useState,FC } from "react";

interface AccordionProps{
    text: string
};

export const Accordion:FC<AccordionProps> = function({text}) {
    const header="Accordion Click Me";
    const [visible, setVisible] = useState(true);

    function clickHandler() {
        setVisible(!visible);        
      }

    return (
        <div className='accordion'
             onClick={clickHandler}
             style={{ height: "100px", width: "300px", backgroundColor: "green" }}
            >
                <div data-accordion-header>{header}</div>
                <div data-accordion-body
                    data-testid='accordion'
                    hidden={visible}
                    onClick={clickHandler}
                >
                   {text}
                </div>
            </div>
    );
};