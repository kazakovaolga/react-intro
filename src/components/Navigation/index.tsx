import React, { useState } from 'react';

function Navigation({children}:{children:React.ReactNode}) {
    const [active, setActive] = useState(true);    

    return (
        <>
            <nav className='navigation'
                style={{ height: "180px", color: "#111" ,backgroundColor:"#4caf50"}}
            >               
            {children}
            </nav>
        </>
    );
}

export default Navigation;