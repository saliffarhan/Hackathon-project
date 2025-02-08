import { Clock, MapPin, PhoneOutgoing } from "lucide-react";
import Link from "next/link";



export default function Contact() {
    return (
        <div className="max-w-screen-2xl mx-auto">


            <section className="bg-ShopImage bg-repeat bg-cover  lg:mx-w-[100%] lg:h-[50vh]">
                <div className="flex justify-self-center py-24 items-center flex-col">
                    <h2 className="font-semibold font-sans text-4xl py-3">Contact</h2>
                    <div className="flex gap-5 py-3">

                        <Link href="/"><button className="font-medium">Home</button></Link>
                        <button >Contact</button>
                    </div>
                </div>
            </section>




            <main className="lg:mx-w-[1440px] lg:h-[750px] lg:py-0 py-4  flex-col w-auto h-auto  ">
                <div className="text-center pt-6">
                    <h2 className="font-semibold text-2xl py-3">Get In Touch With Us</h2>
                    <p className="font-sans text-sm">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <section className="lg:mx-16 lg:inline-flex lg:gap-20  ">
                    {/* left-side */}
                    <div className="lg:w-[483px] lg:h-[530px]  lg:p-32 px-16 lg:px-0 ">

                        <div className="inline-flex gap-4 py-4">
                            <MapPin />
                            <div>
                                <h3>Address</h3>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className="inline-flex  gap-4">
                            <PhoneOutgoing />
                            <div>
                                <h3>Phone</h3>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className="inline-flex  gap-4 py-4">
                            <Clock />
                            <div>
                                <h3>Wroking Time</h3>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>


                    </div>


                    {/* right-side */}
                    <div className="lg:w-[530px] lg:h-[620px]      lg:mt-0 mt-7 lg:p-20 px-16 lg:px-0 w-auto h-auto">

                        <p className="py-4 font-sans">Your Name</p>
                        <input className="lg:w-[520px] w-auto h-auto lg:py-3 border border-neutral-500 rounded-xl" type="text" />

                        <p className="py-4 font-sans">Email address</p>
                        <input className="lg:w-[520px] w-auto h-auto  lg:py-3 border border-neutral-500 rounded-xl" type="email" />

                        <p className="py-4 font-sans">Subject</p>
                        <input className="lg:w-[520px] w-auto h-auto  lg:py-3 border border-neutral-500 rounded-xl" type="text" />

                        <p className="py-4 font-sans">Message</p>
                        <textarea className="lg:w-[520px] w-auto h-auto lg:py-3 border border-neutral-500 rounded-xl" typeof="checkbox" />
                        <div className="mt-6 flex">
                            <button className="border border-black px-14 py-2 rounded-lg">Submit</button>
                        </div>


                    </div>
                </section>
            </main >




            <section className="lg:mx-w-[1440px] lg:h-[300px] lg:mt-[0px]  bg-[#FAF4F4] flex-col mx-auto  w-auto h-auto " >

                <div className="lg:inline-flex lg:py-20 lg:px-16 gap-14 px-4 py-5">
                    {/* box1 */}
                    <div className="boder rounded-md lg:w-[365px] lg:h-[110px] relative cursor-pointer ">
                        <h2 className="font-semibold text-xl  py-1 pt-8">Free Delivery</h2>
                        <p className="font-sans ">For all oders over $50, consectetur adipim scing elit.</p>
                    </div>
                    {/* box2 */}
                    <div className="boder rounded-md lg:w-[365px] lg:h-[110px]  relative cursor-pointer ">
                        <h2 className="font-semibold text-xl  py-1 pt-8">90 Days Return</h2>
                        <p className="font-sans ">If goods have problems, consectetur adipim scing elit.</p>
                    </div>
                    {/* box3 */}
                    <div className="boder rounded-md lg:w-[365px] lg:h-[110px]  relative cursor-pointer ">
                        <h2 className="font-semibold text-xl py-1 pt-8">Secure Payment</h2>
                        <p className="font-sans ">100% secure payment, consectetur adipim scing elit.</p>
                    </div>

                </div>

            </section>








        </div>
    )
}

