import React,{ FC } from "react";

interface ParagraphProps {
    text: string
}
export const Paragraph: FC<ParagraphProps> = function({ text }) {
    return (
        <p
                className="paragraph"
                style={{ height: "50px", width: "200px", backgroundColor: "pink" }}
            >
                {text}
            </p>
    );
};
