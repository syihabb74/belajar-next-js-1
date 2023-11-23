import Image from "next/image"

import Link from "next/link"

export const ProductCard = ({data}) => {
  
    return (
    
    <div>
    <h1 className="text-center text-xl my-10">All Products</h1>
    <div className="grid grid-cols-3 gap-5">
        
            {data.map(({id,image, title, price}) => {

            return (
            
                    <div className="border-2 p-4 rounded-lg">
                        
                        <Image src={image} width={100} height={100}/>

                        <div>{title}</div>
                        
                        <div>{price}</div>

                        <Link href={`/${id}`}>

                            <button className="bg-indigo-500 rounded-lg p-2.5">View Details Product</button>
                            
                        </Link>

                    </div>)

            })}

    </div>

    </div>

  )

}