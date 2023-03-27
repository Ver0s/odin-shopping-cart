import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuantityInput from '../components/QuantityInput';

describe('QuantityInput', () => {
	const defaultProps = {
		quantity: 3,
		onQuantityDecrement: vi.fn(),
		onQuantityIncrement: vi.fn(),
		onQuantityChange: vi.fn(),
	};

	test('should render with the correct initial quantity', () => {
		render(<QuantityInput {...defaultProps} />);
		const input = screen.getByRole('spinbutton');
		expect(input).toHaveValue(3);
	});

	test('should only allow the user to input integers in the input', () => {
		const user = userEvent.setup();

		render(<QuantityInput {...defaultProps} />);
		const input = screen.getByRole('spinbutton');
		user.clear(input);
		user.type(input, '3.5');
		expect(input).toHaveValue(3);
	});
});
