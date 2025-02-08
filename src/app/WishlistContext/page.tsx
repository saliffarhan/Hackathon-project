"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { IProduct } from "../../../type/Ptypes"; // Adjust the import path as needed
import toast from "react-hot-toast";

interface IWishlistContext {
  wishlist: IProduct[];
  addToWishlist: (product: IProduct) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
}

const WishlistContext = createContext<IWishlistContext | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<IProduct[]>([]);

  // Load wishlist data from localStorage on initial render
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist data to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add to wishlist function
  const addToWishlist = (product: IProduct) => {
    setWishlist((prevWishlist) => {
      const isAlreadyInWishlist = prevWishlist.some((item) => item.id === product.id);
      if (isAlreadyInWishlist) {
        toast.success(`${product.name} is already in your wishlist!`);
        return prevWishlist;
      }
      toast.success(`${product.name} added to wishlist!`);
      return [...prevWishlist, product];
    });
  };

  // Remove from wishlist function
  const removeFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
    toast.success("Item removed from wishlist!");
  };

  // Check if a product is in the wishlist
  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};