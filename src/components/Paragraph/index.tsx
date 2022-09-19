import React, { useState } from 'react';

function Paragraph(props:{text:string}) {    
    
    return (
        <>
            <p
                className="paragraph"  
                style={{ height: '50px', width: '200px', backgroundColor: 'pink' }}              
            >
                {props.text}
            </p>
        </>
    );
}

export default Paragraph;
