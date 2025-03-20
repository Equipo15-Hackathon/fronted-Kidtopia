import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : {};
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addProduct = (name, price) => {
        setCartItems(prev => ({
            ...prev,
            [name]: prev[name]
            ? { ...prev[name], quantity: prev[name].quantity + 1 }
            : { price, quantity: 1 },
        }));
    };

    const removeProduct = (name) => {
        setCartItems(prev => {
            const { [name]: _, ...rest } = prev;
            return rest;
        });
    };

    const updateQuantity = (name, amount) => {
        setCartItems(prev => {
            if (!prev[name]) return prev;
            const newQuantity = prev[name].quantity + amount;

            if (newQuantity <= 0) {
                return { ...prev, [name]: { ...prev[name], quantity: 1 } };
            }

            return { ...prev, [name]: { ...prev[name], quantity: newQuantity } };
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addProduct, removeProduct, updateQuantity, isCartOpen, toggleCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
