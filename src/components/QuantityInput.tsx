type quantityInputProps = {
	quantity: number;
	setQuantity: React.Dispatch<React.SetStateAction<number>>;
	updateCartQuantity?: (nextQuantity: number) => void;
	size?: 'sm' | 'lg';
};

export default function QuantityInput({
	quantity,
	setQuantity,
	updateCartQuantity,
	size = 'lg',
}: quantityInputProps) {
	const sizes = {
		sm: {
			px: '3',
			py: '1.5',
			maxWidth: 'max-w-[120px]',
		},
		lg: {
			px: '5',
			py: '3',
			maxWidth: '',
		},
	};

	const buttonClassName = `bg-slate-100 px-${sizes[size].px} py-${sizes[size].py} text-indigo-700 hover:bg-slate-200 disabled:text-gray-300 disabled:hover:bg-slate-100 transition-colors`;
	const inputClassName = `w-full bg-slate-100 py-${sizes[size].py} text-center`;
	const containerClassName = `flex ${sizes[size].maxWidth} items-center font-bold`;

	return (
		<div className={containerClassName}>
			<button
				className={`${buttonClassName} rounded-l-lg`}
				onClick={() => {
					const nextQuantity = quantity - 1;
					setQuantity(nextQuantity);
					if (updateCartQuantity !== undefined) {
						updateCartQuantity(nextQuantity);
					}
				}}
				disabled={quantity <= 1}
			>
				-
			</button>
			<input
				type="number"
				className={inputClassName}
				value={
					!isNaN(quantity) && quantity !== null && quantity !== 0
						? quantity
						: ''
				}
				min={1}
				step={1}
				onChange={(e) => {
					setQuantity(parseInt(e.target.value));
				}}
				onBlur={() => {
					let nextQuantity = quantity;
					if (isNaN(nextQuantity)) {
						nextQuantity = 1;
					}
					if (updateCartQuantity !== undefined) {
						updateCartQuantity(nextQuantity);
					}
					setQuantity(nextQuantity);
				}}
			/>
			<button
				className={`${buttonClassName} rounded-r-lg`}
				onClick={() => {
					const nextQuantity = quantity + 1;
					setQuantity(nextQuantity);
					if (updateCartQuantity !== undefined) {
						updateCartQuantity(nextQuantity);
					}
				}}
			>
				+
			</button>
		</div>
	);
}
