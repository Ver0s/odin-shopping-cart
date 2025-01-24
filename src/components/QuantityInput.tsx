type quantityInputProps = {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    updateCartQuantity?: (nextQuantity: number) => void;
    size?: "sm" | "lg";
};

export default function QuantityInput({
    quantity,
    setQuantity,
    updateCartQuantity,
    size = "lg",
}: quantityInputProps) {
    const styles = {
        sm: {
            button: "bg-slate-100 px-3 py-1.5 text-indigo-700 hover:bg-slate-200 disabled:text-gray-300 disabled:hover:bg-slate-100 transition-colors",
            input: "w-full bg-slate-100 py-1.5 text-center",
            container: "flex max-w-[120px] items-center font-bold",
        },
        lg: {
            button: "bg-slate-100 px-5 py-3 text-indigo-700 hover:bg-slate-200 disabled:text-gray-300 disabled:hover:bg-slate-100 transition-colors",
            input: "w-full bg-slate-100 py-3 text-center",
            container: "flex items-center font-bold",
        },
    };

    return (
        <div className={styles[size].container}>
            <button
                className={`${styles[size].button} rounded-l-lg`}
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
                className={styles[size].input}
                value={
                    !isNaN(quantity) && quantity !== null && quantity !== 0
                        ? quantity
                        : ""
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
                className={`${styles[size].button} rounded-r-lg`}
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
