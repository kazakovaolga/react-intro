import React, { FC } from "react";

interface HeaderProps {
    text: string,
    level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Header: FC<HeaderProps> = function({ text, level }) {
    const Tag = "h" + level as `h${typeof level}`;
    return (<Tag style={{height: "30px", width: "300px", backgroundColor: "yellow" }}>{text}</Tag>);
};
