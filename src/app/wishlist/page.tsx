"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Adjust the import path as needed
import { useWishlist } from "../WishlistContext/page";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className=" bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-8">Your Wishlist</h1>
        {wishlist.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl"
                  >
                    <div className="w-full h-52 relative rounded-xl">
                      {item.image && (
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="mt-4 ">
                      <h2 className=" text-base  text-gray-600">{item.name}</h2>
                      <p className="text-red-600 text-sm font-medium my-2"><span className="text-gray-600">Price: </span>${item.price}</p>
                    </div>
                      <button
                        className="bg-orange-300"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        Remove
                      </button>
                  </div>
                ))}
              </div>
       
        ) : (
          <p className="text-gray-500">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
}