import React, { useState } from 'react';

function Navigation({children}:{children:React.ReactNode}) {
    const [active, setActive] = useState(true);
    const backgroundColor = ({ active }) ? "#4caf50" : "#111";

    return (
        <>
            <nav className='navigation'
                style={{ height: "180px", color: "#111" }}
                vertical-align="top"
                color="black"
            >               
            {children}
            </nav>
        </>
    );
}

export default Navigation;