import Image from "next/image"
import Link from "next/link"

export default function Blog() {
    return (
        <div className="max-w-screen-2xl mx-auto">

            <section className="bg-ShopImage bg-repeat bg-cover  lg:mx-w-[100%] lg:h-[50vh]">
                <div className="flex justify-self-center py-24 items-center flex-col">
                    <h2 className="font-semibold font-sans text-4xl py-3">Blogs</h2>
                    <div className="flex gap-5 py-3">
                        
                       <Link href="/"><button className="font-medium">Home</button></Link>
                        <button >Blogs</button>
                    </div>
                </div>
            </section>



            <main className="lg:mx-w-[1440px] lg:h-[2300px]  w-auto h-auto">
                <section className="lg:px-16 px-5 lg:py-11 py-7 flex">
                    {/* left */}
                    <div className="lg:w-[800px] lg:h-[2300px] w-auto h-auto   pt-5">
                        {/* box1  */}
                        <div className="lg:w-[800px] w-auto h-auto lg:h-[750px] ">
                            <Image width={817} height={500} src="/b-1.png" alt="" />
                            <h3 className="font-medium text-2xl py-4">Going all-in with millennial design</h3>
                            <p className="font-sans text-sm py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                            <button className="font-medium underline lg:py-0 py-3">Read More</button>
                        </div>
                        {/* box2  */}
                        <div className="lg:w-[800px] lg:h-[750px] ">
                            <Image width={817} height={500} src="/b-2.png" alt="" />
                            <h3 className="font-medium text-2xl py-4">Exploring new ways of decorating</h3>
                            <p className="font-sans text-sm py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                            <button className="font-medium underline lg:py-0 py-3">Read More</button>
                        </div>
                        {/* box3  */}
                        <div className="lg:w-[800px] lg:h-[500px]">
                            <Image width={817} height={500} src="/b-3.png" alt="" />
                            <h3 className="font-medium text-2xl py-4">Handmade pieces that took time to make</h3>
                            <p className="font-sans text-sm py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                            <button className="font-medium underline lg:py-0 py-3">Read More</button>
                        </div>
                    </div>

                    {/* right-side */}
                    <div className="w-[390px] h-[750px]  p-10 md:block hidden" >
                        <h2 className="font-semibold  text-xl py-3">Categories</h2>
                        <p className="py-1 hover:underline">Crafts</p>
                        <p className="py-1 hover:underline">Design</p>
                        <p className="py-1 hover:underline">Handmade</p>
                        <p className="py-1 hover:underline">Interior</p>
                        <p className="py-1 hover:underline">Wood</p>

                        <h4 className="pt-11">Recent Post</h4>
                        {/* box-1  */}
                        <div className=" inline-flex gap-5 py-4">
                            <Image width={80} height={80} src="/b-r-1.png" alt="" />
                            <div className="flex-col">
                                <p className="font-medium">Going all-in with millennial design</p>
                                <p className="text-xs py-1">03 Aug 2022</p>
                            </div>
                        </div>
                        {/* box2 */}
                        <div className=" inline-flex gap-5 py-4">
                            <Image width={80} height={80} src="/b-r-2.png" alt="" />
                            <div className="flex-col">
                                <p className="font-medium">Exploring new ways of decorating</p>
                                <p className="text-xs py-1">03 Aug 2022</p>
                            </div>
                        </div>
                        {/* box3 */}
                        <div className=" inline-flex gap-5 py-4">
                            <Image width={80} height={80} src="/b-r-1.png" alt="" />
                            <div className="flex-col">
                                <p className="font-medium">Handmade pieces that took time to make</p>
                                <p className="text-xs py-1">03 Aug 2022</p>
                            </div>
                        </div>
                        {/* box4 */}
                        <div className=" inline-flex gap-5">
                            <Image width={80} height={80} src="/b-r-2.png" alt="" />
                            <div className="flex-col">
                                <p className="font-medium">Modern home in Milan</p>
                                <p className="text-xs py-1">03 Aug 2022</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>




            <section className="lg:mx-w-[1440px] lg:h-[300px] lg:mt-[px]  bg-[#FAF4F4] flex-col mx-auto  w-auto h-auto " >

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