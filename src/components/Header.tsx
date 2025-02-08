"use client"

import Link from "next/link"
// import {Heart, Search, ShoppingCart, UserRoundSearch } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight, Heart, ShoppingCart} from "lucide-react"
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/WishlistContext/page";






export default function Headerpage() {
    const { cart } = useCart(); // Get the cart state from CartContext
    const { wishlist } = useWishlist();



    // Calculate the total number of items in the cart
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="flex justify-between items-center  md:px-16 md:py-2 p-3 px-7 bg-[#FBEBB5] font-sans sticky top-0  max-w-screen-2xl mx-auto ">
            {/* logo */}
            <div data-aos="fade-right">
                <Link href="/"><h2 className="font-semibold text-xl"> furniture - <span className="text-green-500">io</span></h2></Link>

            </div>

            {/* navbar */}
            <ul className="hidden md:block md:flex-row flex-col " data-aos="fade-left" >
                <li className="space-x-10  ">
                    <Link className="hover:text-blue-600" href="/">Home</Link>
                    <Link className="hover:text-blue-600" href="/shop">Shop</Link>
                    <Link className="hover:text-blue-600" href="/blog">Blog</Link>
                    <Link className="hover:text-blue-600" href="/contact">Contact</Link>
                </li>


            </ul >
            <div className="md:flex-row  flex gap-4  ">
                <Link href="/wishlist" className="relative">
                    {/* Wishlist Icon */}
                    <Heart className="w-6 h-6" />

                    {/* Wishlist Item Count Badge */}
                    {wishlist.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {wishlist.length}
                        </span>
                    )}
                </Link>
                <Link href="/cart" className="relative">
                    {/* Cart Icon */}
                    <ShoppingCart className="w-6 h-6" />

                    {/* Cart Item Count Badge */}
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}
                </Link>

            </div>



            <Sheet>

                <SheetTrigger className="md:hidden">
                    <AlignRight />
                </SheetTrigger>

                <SheetContent className="bg-[#FFF9E5] py-5">
                    <ul  >
                        <li className="md:flex-row flex-col flex justify-center items-center mt-8 ">
                            <Link className="hover:text-blue-600 py-4" href="/">Home</Link>
                            <Link className="hover:text-blue-600" href="/shop">Shop</Link>
                            <Link className="hover:text-blue-600 py-4" href="/blog">Blogs</Link>
                            <Link className="hover:text-blue-600" href="/contact">Contact</Link>


                        </li>
                    </ul >

                </SheetContent>
            </Sheet>

        </header>
    )
}