import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Whitespace from '.';

test('should render Whitespace', () => {    
    render(<Whitespace></Whitespace>);
    const whitespace = screen.getByTestId('whitespace');
    expect(whitespace).toBeInTheDocument();    
});