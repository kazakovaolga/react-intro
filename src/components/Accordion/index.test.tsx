import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Accordion } from ".";

describe("Accordion testing", () => {
    test("should be a Component", () => {
        expect(Accordion).toBeInstanceOf(Function);
    });

    test("testing render Accordion", async () => {
        const text = "This is accordion expamle";
        render(<Accordion text={text} />);
        const accordion = screen.getByText("Accordion Click Me");
        expect(accordion).toBeInTheDocument();
        userEvent.click(accordion);
        expect(screen.getByTestId("accordion").hidden).toBe(true);
        expect(await screen.findByText("This is accordion expamle")).toBeInTheDocument();

    });

});
