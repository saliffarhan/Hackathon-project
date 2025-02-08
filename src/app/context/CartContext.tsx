"use client"

import { createContext, useContext, useState, ReactNode, useMemo, useEffect } from "react";
import { IProduct } from "../../../type/Ptypes";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation"; // Assuming you're using Next.js for navigation

interface ICartItem extends IProduct {
    quantity: number;
}

interface ICartContext {
    cart: ICartItem[];
    setCart: React.Dispatch<React.SetStateAction<ICartItem[]>>; // Add this line
    addToCart: (product: IProduct) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    subtotal: number;
    proceedToCheckout: () => void; // Add this function to the context
}

const CartContext = createContext<ICartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<ICartItem[]>([]);
    const router = useRouter(); // Initialize the router

    // Load cart data from localStorage on initial render
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart data to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Add to cart function
    const addToCart = (product: IProduct) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            toast.success(`${product.name} added to cart!`);
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // Remove from cart function
    const removeFromCart = (productId: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Update quantity function
    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId); // If quantity is 0 or less, remove the item
            return;
        }
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    // Calculate subtotal
    const subtotal = useMemo(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cart]);

    // Proceed to checkout function
    const proceedToCheckout = () => {
        if (cart.length === 0) {
            toast.error("Your cart is empty!");
            return;
        }
        // Here you can add any logic you need before proceeding to checkout
        // For example, you might want to clear the cart, or navigate to the checkout page
        router.push("/checkout"); // Navigate to the checkout page
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, updateQuantity, subtotal, proceedToCheckout }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};