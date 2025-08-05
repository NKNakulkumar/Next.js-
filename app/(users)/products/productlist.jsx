"use client"

import { useSearchParams } from "next/navigation"

const ProductList = () => {
    const searchparam = useSearchParams();
    console.log("client",searchparam)
    const pages = searchparam.getAll('page')
    const category = searchparam.get('category')
    console.log("pages",pages);
    console.log("category",category);

  return (
    <div>
    
    </div>
  )
}

export default ProductList
