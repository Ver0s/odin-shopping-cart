import React from 'react';

type QuantityInputProps = {
	quantity: number;
	onQuantityDecrement: () => void;
	onQuantityIncrement: () => void;
	onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onCartQuantityUpdate?: () => void;
	size?: 'sm' | 'lg';
};
// TODO:
// 1. Handle onblur event, I want input to be set to 1 when out of focus
// 2. Handle restricting user from inputting decimals into input
export default function QuantityInput({
	quantity,
	onQuantityDecrement,
	onQuantityIncrement,
	onQuantityChange,
	onCartQuantityUpdate = null,
	size = 'lg',
}: QuantityInputProps) {
	const sizes = {
		sm: {
			px: '3',
			py: '1',
			maxWidth: 'max-w-[120px]',
		},
		lg: {
			px: '5',
			py: '3',
			maxWidth: '',
		},
	};

	const buttonClassName = `bg-slate-100 px-${sizes[size].px} py-${sizes[size].py} text-orange-500 hover:bg-slate-200 disabled:text-gray-300 disabled:hover:bg-slate-100`;
	const inputClassName = `w-full bg-slate-100 py-${sizes[size].py} text-center`;
	const containerClassName = `flex ${sizes[size].maxWidth} items-center font-bold`;

	return (
		<div className={containerClassName}>
			<button
				className={`${buttonClassName} rounded-l-lg`}
				onClick={onQuantityDecrement}
				disabled={quantity <= 1}
			>
				-
			</button>
			<input
				type="number"
				// className="min-w-0 flex-1 bg-slate-100 py-3 text-center"
				className={inputClassName}
				value={
					!isNaN(quantity) && quantity !== null && quantity !== 0
						? quantity
						: ''
				}
				min={1}
				step={1}
				onChange={onQuantityChange}
				// TODO:
				// Prevent from inputting 0 at the beginning
				onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
					if (e.key === ',' || e.key === '.') {
						e.preventDefault();
					}
				}}
				// TODO:
				// Onblur should alway cause quantity to go back to 1
				// I can maybe pass state setter as props here
				onBlur={onCartQuantityUpdate}
			/>
			<button
				className={`${buttonClassName} rounded-r-lg`}
				onClick={onQuantityIncrement}
			>
				+
			</button>
		</div>
	);
}
