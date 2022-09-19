import React from 'react';

type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;

function Header(props: { text: string; level: HeaderLevel }) {
    const Tag = 'h' + props.level as `h${HeaderLevel}`;
    return (<><Tag style={{ height: '30px', width: '300px', backgroundColor: 'yellow' }}>{props.text}</Tag></>);
}

export default Header;
