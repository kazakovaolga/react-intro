import React, { useState } from 'react';

function Whitespace() {
    const hrStyle = {
        border: 0,
        borderBottom: '2px dashed #999',
        background: '#000'
    };

    return (
        <>
            <hr
                className="hr"
                data-testid='whitespace'
                style={hrStyle}
            >
            </hr>
        </>
    );
}

export default Whitespace;
