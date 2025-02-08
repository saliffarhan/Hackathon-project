"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "../context/CartContext";
import { ChevronRight } from "lucide-react";
import { Flip, toast } from "react-toastify";

export default function CheckoutPage() {
  const { cart, subtotal, removeFromCart, setCart } = useCart(); 
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      toast.success('Order placed successfully!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
      setFormValues({ // Clear the form fields
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        phone: "",
        email: "",
      });
      setCart([]); // Clear the cart directly
    } 
  };

  return (
    <div className={`min-h-screen`}>
      {/* Breadcrumb */}
      <div className="mt-6">
      <section className="bg-ShopImage bg-repeat  bg-cover lg:mx-auto  lg:mx-w-[100%] lg:h-[40vh]">
        <div className="flex justify-self-center py-20 items-center flex-col">
          <h2 className="font-medium font-sans text-4xl py-3">Checkout</h2>
          <div className="flex gap-2 py-3">
            <Link href="/cart"><button className="text-gray-600">Cart </button></Link>
            <ChevronRight />
            <button className="font-medium">Checkout</button>
          </div>
        </div>
      </section>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className=" border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4 ">Order Summary</h2>
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-3 border-b-2"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className=" text-red-600 text-center font-bold ">Your cart is empty.</p>
            )}
            <div className="flex justify-between  ">
              <span>Subtotal</span>
              <span>$ {subtotal}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Discount</span>
              <span className="font-semibold">-$0</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Shipping</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-semibold">Total</span>
              <span className="text-yellow-600 font-bold">$ {subtotal}</span>
            </div>
            <p className="font-sans text-gray-600 text-sm">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          </div>

          {/* Billing Form */}
          <div className="bg-white border border-gray-300 shadow-lg rounded-xl p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Billing Details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 font-medium">First Name</label>
                <input
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full p-3 rounded-lg shadow-sm"
                />
                {formErrors.firstName && (
                  <p className="text-sm text-red-500 mt-1">First name is required.</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-gray-700 font-medium">Last Name</label>
                <input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full p-3 rounded-lg shadow-sm"
                />
                {formErrors.lastName && (
                  <p className="text-sm text-red-500 mt-1">Last name is required.</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-700 font-medium">Address</label>
              <input
                id="address"
                placeholder="Enter your address"
                value={formValues.address}
                onChange={handleInputChange}
                className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full p-3 rounded-lg shadow-sm"
              />
              {formErrors.address && (
                <p className="text-sm text-red-500 mt-1">Address is required.</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="block text-gray-700 font-medium">City</label>
              <input
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
                className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full p-3 rounded-lg shadow-sm"
              />
              {formErrors.city && (
                <p className="text-sm text-red-500 mt-1">City is required.</p>
              )}
            </div>

            <div>
              <label htmlFor="zipCode" className="block text-gray-700 font-medium">Zip Code</label>
              <input
                id="zipCode"
                placeholder="Enter your zip code"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full p-3 rounded-lg shadow-sm"
              />
              {formErrors.zipCode && (
                <p className="text-sm text-red-500 mt-1">Zip Code is required.</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium">Phone</label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
                className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full p-3 rounded-lg shadow-sm"
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500 mt-1">Phone is required.</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
              <input
                id="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleInputChange}
                className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full p-3 rounded-lg shadow-sm"
              />
              {formErrors.email && (
                <p className="text-sm text-red-500 mt-1">Email is required.</p>
              )}
            </div>

            <button
              className="w-full h-12 bg-zinc-800 text-white font-semibold hover:rounded-2xl duration-300 "
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}