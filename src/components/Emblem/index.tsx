import React, { useState,FC } from "react";

interface EmblemProps {
    src:string
}

export const Emblem:FC<EmblemProps> = function({src}) {
    const [width, setWidth] = useState("200px");
    const [height, setHeight] = useState("200px");

    function clickHandler() {
        setWidth("400px");
        setHeight("400px");
      }

    return (
        <img className="emblem"
            height={height}
             onClick={clickHandler} src={src}
                width={width} />
    );
};