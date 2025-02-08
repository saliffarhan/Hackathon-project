import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { IProduct } from "../../type/Ptypes"

export default async function ShopPage() {

    const query = `*[_type == "product"][0...8]{
    _id,
    name,
    price,
    "image": image.asset->url
}`

    const Products: IProduct[] = await client.fetch(query)

  

    return (
        <div >
            <div className="text-center pt-7">
                <h2 className="font-bold text-gray-700 text-xl ">Top reated product</h2>
                <p className="text-gray-600 text-sm pt-2 ">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  mt-4 md:px-16 px-10 lg:px-20 gap-11">

                {Products.map((product: IProduct ) => (
                    <Link href={`/shop/${product._id}`} key={product._id}>
                    <div className="col-span-1 hover:opacity-65 hover:blur-0 py-2  gap-2" key={product._id}>
                        {/* img  */}
                        <div className="w-full lg:w-[280px] h-[280px]  flex items-center justify-center">
                            <Image
                                src={urlFor(product.image).url()}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="h-[250px] w-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className=" text-gray-600 font-bold " >{product.name}</h2>
                            <p className="text-sm py-2 font-medium text-red-600 ">$ {product.price}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center mt-3 items-center">
          <Link href="/shop"><button className="px-5 py-2 bg-orange-200 hover:rounded-2xl duration-300">View More</button></Link>  
            </div>

        </div>
    )
}



