import { Outlet, useOutletContext } from "react-router-dom";
import Header from "./Header";
import useLocalStorage from "../hooks/useLocalStorage";
import Footer from "./Footer";

type CartType = {
    productId: number;
    quantity: number;
};

type ContextType = {
    cart: CartType[];
    handleAddToCart: (id: number, quantityAdded?: number) => void;
    handleDeleteFromCart: (id: number) => void;
    handleClearCart: () => void;
    handleUpdateCart: (id: number, updatedQuantity: number) => void;
};

export default function Layout() {
    const [cart, setCart] = useLocalStorage<CartType[]>("cartProducts", []);
    const totalProducts = cart.reduce(
        (total, currentProduct) => total + currentProduct.quantity,
        0
    );

    function handleUpdateCart(id: number, updatedQuantity: number) {
        const nextCart = cart.map((product) => {
            if (product.productId === id) {
                return { ...product, quantity: updatedQuantity };
            } else {
                return product;
            }
        });
        setCart(nextCart);
    }

    function handleAddToCart(id: number, quantityAdded = 1) {
        let nextCart;
        const isInCart = cart.some((product) => product.productId === id);

        if (isInCart) {
            nextCart = cart.map((product) => {
                if (product.productId === id) {
                    return {
                        ...product,
                        quantity: product.quantity + quantityAdded,
                    };
                } else {
                    return product;
                }
            });
        } else {
            nextCart = [...cart, { productId: id, quantity: quantityAdded }];
        }

        setCart(nextCart);
    }

    function handleDeleteFromCart(id: number) {
        const nextCart = cart.filter((product) => product.productId !== id);
        setCart(nextCart);
    }

    function handleClearCart() {
        setCart([]);
    }

    return (
        <>
            <Header totalProducts={totalProducts} />
            <main className="flex-grow pt-[81px]">
                <Outlet
                    context={{
                        cart,
                        setCart,
                        handleAddToCart,
                        handleDeleteFromCart,
                        handleClearCart,
                        handleUpdateCart,
                    }}
                />
            </main>
            <Footer />
        </>
    );
}

export function useCart() {
    return useOutletContext<ContextType>();
}
