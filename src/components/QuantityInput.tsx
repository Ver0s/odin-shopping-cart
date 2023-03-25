import React from 'react';

type QuantityInputProps = {
	quantity: number;
	onQuantityDecrement: () => void;
	onQuantityIncrement: () => void;
	onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
// TODO:
// 1. Handle onblur event, I want input to be set to 1 when out of focus
// 2. Handle restricting user from inputting decimals into input
export default function QuantityInput({
	quantity,
	onQuantityDecrement,
	onQuantityIncrement,
	onQuantityChange,
}: QuantityInputProps) {
	return (
		<div className="flex items-center font-bold">
			<button
				className="rounded-l-lg bg-slate-100 px-5 py-3 text-orange-500 hover:bg-slate-200 disabled:text-gray-300 disabled:hover:bg-slate-100"
				onClick={onQuantityDecrement}
				disabled={quantity <= 1}
			>
				-
			</button>
			<input
				type="number"
				// className="min-w-0 flex-1 bg-slate-100 py-3 text-center"
				className="w-full bg-slate-100 py-3 text-center"
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
			/>
			<button
				className="rounded-r-lg bg-slate-100 px-5 py-3 text-orange-500 hover:bg-slate-200 disabled:text-gray-300 disabled:hover:bg-slate-100"
				onClick={onQuantityIncrement}
			>
				+
			</button>
		</div>
	);
}
