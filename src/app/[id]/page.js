
import Image from "next/image";

async function getSingleProduct (id) {

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    const dataSingleProduct = await res.json()

    return dataSingleProduct

}

export default async function page( {params} ) {

    const data = await getSingleProduct(params.id);

    const {title, image, description, price} = data

  return (
    <div className="flex justify-center items-center my-10 border-2">
      <div className="space-y-2">
        <div className="text-center">{title}</div>
        <div className="flex justify-center items-center">
        <Image src={image} width={250} height={250}/>
        </div>
        <div className="text-center">Price : {price}</div>
        <div>Description : {description}</div>
      </div>
    </div>
  )
}

