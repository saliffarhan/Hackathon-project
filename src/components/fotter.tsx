import Image from "next/image"
export default function FotterPage() {
    return (
        <main className="lg:mx-w-[1440px] lg:mt-10 lg:h-[420px] flex-col w-auto h-auto md:flex-wrap max-w-screen-2xl mx-auto">
            <section className="lg:px-16 px-5 lg:py-20  lg:inline-flex gap-[80px]">

                <div className="lg:w-[280px] lg:h-[70px] ">
                    <h3 className="pt-20">400 University Drive Suite 200 Coral Gables,
                    FL 33134 USA</h3>
                </div>

                <div className="w-[120px] h-[200px] ">
                    <h2 className="font-bold text-xl">Links</h2>
                    <p className="pt-5">Home</p>
                    <p className="py-2">Shop</p>
                    <p className="py-2">About</p>
                    <p className="py-2">Contact</p>
                    <p>Shop</p>
                </div>

                <div className="lg:w-[170px] lg:h-[170px] lg:pt-0 pt-6">
                    <h1 className="font-bold text-xl">Help</h1>
                    <p className="pt-5 w-auto text-sm">Payment Options</p>
                    <p className="py-4">Returns</p>
                    <p>Privacy Policies</p>
                </div>

           

                <div className="lg:w-[220px] lg:h-[165px] ">
                    <h1 className="font-bold text-xl">Newsletter</h1>
                    <div className="flex gap-3 py-6 ">
                        <input className=" underline" type="email" placeholder="Enter Your Email Address" />
                        <p className="font-medium underline cursor-pointer">SUBSCRIBE</p>
            
                    </div>

                </div>
            </section>
            <Image className="bg-black" width={1450} height={0} src="/hero-line.png" alt="" />
            <div className="py-4 lg:px-16 px-5">
                <p className="text-gray-700">@Copyright Rimel 2022. All right reserved</p>
            </div>
        </main>
    )
}