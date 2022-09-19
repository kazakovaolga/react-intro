import React, { useState } from 'react';

function Emblem(props:{src:string}) {
    const [width, setWidth] = useState('200px');
    const [height, setHeight] = useState('200px');

    function clickHandler() {
        setWidth('400px');
        setHeight('400px');
      }

    return (
        <>
            <img className="emblem"
            onClick={clickHandler}
             width={width} height={height}
                src={props.src} />
        </>
    );
}

export default Emblem;