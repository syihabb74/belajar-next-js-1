import Image from "next/image"

export const ProductCard = ({data}) => {
  
    return (
    
    <div className="grid grid-cols-3 gap-5">
        
            {data.map(({image, title, price}) => {

            return (
            
                    <div>
                        
                        <Image src={image} width={100} height={100}/>

                        <div>{title}</div>
                        
                        <div>{price}</div>

                    </div>)

            })}

    </div>

  )

}