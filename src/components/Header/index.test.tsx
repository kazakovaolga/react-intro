import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '.';

type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;

test('should render Header', () => {
    const text="React-Intro";
    const level:HeaderLevel=2;
    render(<Header level={level} text={text}></Header>);

    const header = screen.getByText(text);
    expect(header).toBeInTheDocument();
    screen.debug(screen.getByRole("heading", { level: 2 }));    
});