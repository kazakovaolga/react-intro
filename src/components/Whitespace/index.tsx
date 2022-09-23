import React,{ FC } from "react";

export const Whitespace: FC = function() {
    const hrStyle = {
        border: 0,
        borderBottom: "2px dashed #999",
        background: "#000"
    };

    return (
        <hr
            className="hr"
            data-testid='whitespace'
            style={hrStyle}
        />
    );
};
