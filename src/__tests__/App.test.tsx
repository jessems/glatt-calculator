import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('interface loads correctly', () => {
	render(<App />);
	const linkElement = screen.getByText(/Other nomenclatures/i);
	const slider = screen.getByRole('material-slider');
	const input = screen.getByRole('material-input');
	const select = screen.getByRole('material-select');
	expect(linkElement).toBeInTheDocument();
	expect(slider).toBeInTheDocument();
	expect(input).toBeInTheDocument();
	expect(select).toBeInTheDocument();
});
