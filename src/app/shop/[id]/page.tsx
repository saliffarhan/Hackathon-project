// app/product/[id]/page.tsx
"use client"

import { client } from "@/sanity/lib/client";
import { IProduct } from "../../../../type/Ptypes";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { Flip } from "react-toastify";
import { toast } from 'react-toastify';
import { ChevronRight, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import ProductDescription from "@/components/productDescription";
import { useWishlist } from "@/app/WishlistContext/page";




const ProductDetail = () => {
    const params = useParams(); // Get the dynamic route parameters
    const id = params.id as string; // Extract the id from the URL
    const [product, setProduct] = useState<IProduct | null>(null);
    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();





    useEffect(() => {
        if (!id) return; // Wait until id is available

        async function fetchProduct() {
            const fetchedProduct: IProduct = await client.fetch(
                `*[ _type == "product" && _id == $id ]{
            "id": _id,
            price,
            name,
            description,
            category,
            "image": image.asset->url,
            stockLevel,
          }[0]`,
                { id }
            );
            setProduct(fetchedProduct);
        }

        fetchProduct();
    }, [id]); // Re-run effect when `id` changes

    if (!product) {
        return <div className="w-full h-[100vh] flex justify-center items-center">
            <div>
                <div className="loader"></div>
            </div>
        </div>;
    }

    const notify = () => {
        toast.success('Product added to cart !', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
        });
    }
    const notify2 = () => {
        toast.success('Product added to Wishlist !', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
        });
    }

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="mt-6">
                <div className="md:px-16 px-8 mx-auto ">
                    <nav className="flex items-center gap-2 md:pt-5 ">
                        <Link
                            href="/shop"
                            className="text-[#666666] hover:text-black transition text-sm"
                        >
                            Shop
                        </Link>
                        <ChevronRight className="w-4 h-4 text-[#666666]" />
                        <span className="text-sm">Cart</span>
                        <p className="text-3xl text-gray-400 mb-2">|</p>
                        <p className="text-red-600">{product.name}</p>
                    </nav>
                </div>
            </div>
            <main className="lg:mx-w-[1100px] lg:h-auto max-w-screen-2xl mx-auto" key={product._id}>
                <section className="lg:inline-flex  lg:gap-20 mx-auto w-auto h-auto lg:px-16 px-4">
                    {/* left */}
                    <div className="lg:w-[550px] ">
                        <Image width={580} height={480} src={urlFor(product.image).url()} alt={product.name}
                            className="h-[450px] w-full hover:cursor-zoom-in pt-28" />
                    </div>
                    {/* right */}
                    <div className="lg:w-[500px] lg:h-auto md:py-40 ">
                        <h3 className="font-semibold text-bsae mt-4 lg:mt-0 pb-3"> <span className="text-gray-500 text-sm">Category : </span>{product.category}</h3>
                        <h2 className="font-bold md:text-3xl text-2xl text-gray-700">{product.name}</h2>
                        <p className="py-3 text-red-600 font-semibold"><span className="text-gray-600">Price $ : </span>{product.price}</p>
                        <p className=" font-sans text-sm font-medium py-3  "><span className="text-gray-500">Description : </span>{product.description}</p>
                        <p className="text-gray-700 font-medium"> <span className="text-gray-500">Stock : </span>{product.stockLevel} - Items are left</p>

                        <div className="flex gap-5 mt-5">
                            <button className="md:px-7 md:py-2 px-3 py-2 mt-3 bg-zinc-800 text-white flex gap-2 md:gap-4 hover:rounded-2xl duration-300" onClick={() => {
                                addToCart(product);
                                notify();
                            }} >
                                Add to Cart <ShoppingCart />

                            </button>
                            <button className="md:px-5 md:py-2 px-3 py-2 mt-3 bg-zinc-800 text-white flex gap-2 md:gap-4 hover:rounded-2xl duration-300"
                                onClick={() => {
                                    addToWishlist(product);
                                    notify2()
                                }}
                            >
                                Add to favorite <Heart />
                            </button>

                        </div>
                        <div className="flex gap-14 mt-11">
                            <p className="text-gray-600">SKU</p>
                            <p>SS001</p>
                        </div>
                        <div className="flex gap-14">
                            <p className="text-gray-600 my-1">Tags</p>
                            <p>Sofa, Chair, Table, Bed</p>
                        </div>
                    </div>
                </section>
            </main>
            <ProductDescription />
        </div>
    );
};

export default ProductDetail; 