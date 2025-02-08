import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { IProduct } from "../../../type/Ptypes"
import Services from "@/components/services"


export default async function ShopPage() {

    const query = `*[_type == "product"]{
    _id,
    name,
    price,
    category,
    "image": image.asset->url
}`

    const products: IProduct[] = await client.fetch(query)



    return (
        <div className="max-w-screen-2xl mx-auto" >
            <section className="bg-ShopImage bg-repeat bg-cover  lg:mx-w-[100%] lg:h-[50vh]">
                <div className="flex justify-self-center py-24 items-center flex-col">
                    <h2 className="font-medium font-sans text-4xl py-3">Shop</h2>
                    <div className="flex gap-5 py-3">
                        <Link href="/"><button className="font-medium">Home</button></Link>
                        <button className="font-medium">Shop</button>
                    </div>
                </div>
            </section>
            <div className="text-center pt-7">
                <h2 className="font-bold text-gray-700 text-xl ">Top Picks For You</h2>
                <p className="text-gray-600 text-sm pt-2 ">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  mt-4 md:px-16 px-10 lg:px-20 gap-11">

                {products.map((product) => (
                    <Link href={`/shop/${product._id}`} key={product._id}>
                        <div className="col-span-1  py-2  gap-2">
                            {/* img  */}
                            <div className="w-full lg:w-[280px] h-[280px]  flex items-center justify-center">
                                <Image
                                    src={urlFor(product.image).url()}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="h-[250px] w-full object-cover hover:ease-in-out translate-x-1"
                                />
                            </div>
                            <div>
                                <h2 className=" text-gray-800 font-semibold font-sans" >{product.name}</h2>
                                <p className="text-sm py-2 font-medium text-red-600 ">$ {product.price}</p>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
            <Services/>
        </div>
    )
}
