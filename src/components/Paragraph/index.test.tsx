import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Paragraph from '.';

test('should render Paragraph', () => {
    const text = "Hello";
    render(<Paragraph text={text}></Paragraph>);

    const paragraph = screen.getByText(text);
    expect(paragraph).toBeInTheDocument();    
    
});