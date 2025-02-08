import Image from "next/image"
import ShopPage from "./product"
import BlogItems from "./blog"

export default function HeroPage() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <main className="lg:mx-w-[1450px] lg:h-[600px] sm:flex-col w-auto h-auto bg-[#FBEBB5] lg:px-16 md:pt-16 px-5 pt-10 sm:w-auto sm:h-auto ">
                <section className="lg:inline-flex justify-center items-center gap-28 ">
                    {/* left-side */}
                    <div className="lg:mx-w-[440px] lg:h-[275px] flex-1 ">
                        <h2 className="font-medium font-sans lg:text-[65px] text-[27px] sm:text-[32px] ">Rocket single seater</h2>
                        <button className="py-6 underline font-medium">Shop Now</button>

                    </div>
                    {/* right-side */}
                    <div className="flex-1 lg:ml-9">
                        <Image width={600} height={1000} src="/hero-img.png" alt="hero" />
                    </div>
                </section>
            </main>



            <main className="lg:mx-w-[1450px] h-auto bg-[#FAF4F4] flex-col w-auto flex justify-center items-center g ">
                <section className=" lg:inline-flex lg:gap-36 lg:px-16 px-16 py-16 lg:py-10">
                    {/* // box1 */}
                    <div className="boder boder rounded-md lg:w-[73%] h-auto ">
                        <Image className="mx-auto" width={290} height={200} src="/s-1.png" alt="" />
                        <h3 className="py-4 font-medium text-[25px]">Side Table</h3>
                    </div>
                    {/* // box2 */}
                    <div className="boder boder rounded-md lg:w-[53%] h-auto lg:pt-0 pt-10 ">
                        <Image className="mx-auto lg:mt-9" width={400} height={200} src="/s-2.png" alt="" />
                        <h3 className="py-4 font-medium text-[25px]">Side Sofa</h3>
                    </div>
                </section>
            </main>

            <ShopPage/>
            


            <main className="lg:mx-w-[1440px]  h-auto bg-[#FFF9E5] lg:px-16 mt-10 flex-col">
                <section className="lg:flex justify-between ">
                    {/* left */}
                    <div >
                        <Image width={800} height={800} src="/sec-4-img.png" alt="" />
                    </div>
                    {/* right */}
                    <div className="lg:py-60 py-8 text-center">
                        <h3 className="font-medium text-lg py-2">New Arrivals</h3>
                        <h2 className="font-bold text-4xl pt-1">Asgaard sofa</h2>
                    </div>
                </section>
            </main>
           <BlogItems/>


            <section className="bg-BannerImage bg-repeat bg-cover bg-left lg:mx-w-[100%] lg:h-[40vh]">
                <div className="flex justify-self-center py-14 items-center flex-col">
                    <h2 className="font-bold font-sans text-2xl md:text-5xl text-gray-600 py-3">Our Instagram</h2>
                    <p className="font-medium text-gray-600 text-sm py-3">Follow our store on Instagram</p>
                    <button className="px-6 py-2 bg-zinc-700 text-white rounded-3xl hover:rounded-none duration-300">Follow Us</button>
                </div>
            </section>


        </div>



    )
}