
import { getProductsData } from '@/gettingAPI/api'

import { ProductCard } from '@/components/ProductCard'


export default async function Home() {

  const products = await getProductsData()

  return (
        
    <div>
      < ProductCard data={products} />
    </div>
  )
}
