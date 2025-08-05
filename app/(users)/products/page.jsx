import ProductList from "./productlist";

const Products = async({searchParams}) => {
const searchParam = await searchParams;
console.log(searchParam)

const category = searchParam?.category||"all"
const sort = searchParam?.sort||"defalut"
const page = searchParam?.page|| 1

  return (
    <div>
      <h1 className="pt-20"> Products is {category}- {sort}-{page}</h1>
      <ProductList/>
    </div>
  )
}

export default Products
