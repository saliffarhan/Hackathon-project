"use client";

import { useCart } from "@/app/context/CartContext";
import Services from "@/components/services";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Flip, toast } from "react-toastify";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, proceedToCheckout } = useCart();

  const notify2 = () => {
    toast.error("Product was deleted!", {
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
  };

  return (
    <div>
      <section className="bg-ShopImage bg-repeat  bg-cover lg:mx-auto  lg:mx-w-[100%] lg:h-[40vh]">
        <div className="flex justify-self-center py-20 items-center flex-col">
          <h2 className="font-medium font-sans text-4xl py-3">Cart</h2>
          <div className="flex gap-2 py-3">
            <Link href="/shop"><button className="text-gray-600">Shop </button></Link>
            <ChevronRight />
            <button className="font-medium">Cart</button>
          </div>
        </div>
      </section>


      <div className="flex flex-col md:flex-row mt-2 items-start gap-8 p-4 md:p-6 ">
        {cart.length === 0 ? (
          <div className="flex flex-col justify-center items-center w-full">
            <p className="font-semibold text-gray-700">Your cart is empty.</p>
            <Image width={250} height={350} src="/cart.png" alt="cart" className="w-[300px]" />
            <Link href="/shop">
              <button className="shop mt-4">Continue Shopping &#8594;</button>
            </Link>
          </div>
        ) : (
          <div className="w-full md:w-2/3 bg-yellow-50 p-4 md:p-6 rounded-lg shadow-sm overflow-x-auto">
            <table className="w-full text-left text-sm sm:text-base">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2 hidden sm:table-cell">Subtotal</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="text-sm sm:text-base">
                    <td className=" p-1 flex items-center gap-4">
                      <div className="p-1 rounded-md w-16 sm:w-24">
                        <Image
                          width={150}
                          height={150}
                          src={urlFor(item.image).url()}
                          alt={item.name}
                          className="rounded-md  w-[80px] h-[50px]"
                        />
                      </div>
                      <span className="text-gray-600">{item.name}</span>
                    </td>
                    <td className="p-1">$ {item.price}</td>
                    <td className="p-1">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        min="1"
                        className="w-12 border text-center rounded p-1 sm:w-16"
                      />
                    </td>
                    <td className="p-2 font-semibold hidden sm:table-cell">$ {item.price * item.quantity}</td>
                    <td className="p-2">
                      <button onClick={() => { removeFromCart(item.id); notify2(); }} className="btn">
                        <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="icon">
                          <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {cart.length > 0 && (
          <div className="w-full md:w-1/3 bg-yellow-100 p-4 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between py-2 border-b text-sm sm:text-base">
              <span>Subtotal</span>
              <span>$ {subtotal}</span>
            </div>
            <div className="flex justify-between py-2 text-sm sm:text-base">
              <span>Discount</span>
              <span className="font-semibold">-$0</span>
            </div>
            <div className="flex justify-between py-2 text-sm sm:text-base">
              <span>Shipping</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between py-2 font-semibold text-sm sm:text-base">
              <span>Total</span>
              <span className="text-yellow-600 font-bold">$ {subtotal}</span>
            </div>
            <button onClick={proceedToCheckout} className="w-full mt-4 py-2  font-semibold bg-orange-200 hover:rounded-2xl duration-300 text-black">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
      <Services/>

    </div>

  );
};

export default Cart;
