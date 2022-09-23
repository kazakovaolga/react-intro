import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {Header} from ".";

test("should render Header", () => {
    const text="React-Intro";
    const level=2;
    render(<Header level={level} text={text} />);

    const header = screen.getByText(text);
    expect(header).toBeInTheDocument();    
});