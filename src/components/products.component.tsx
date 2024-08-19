import { useEffect, useState } from "react"
import axios from "axios"
import ProductType from "../types/product.type"
import { Box } from "@chakra-ui/react"
import ProductComponent from "./product.component"
import LoadingComponent from "./loading.component"
import InfiniteScroll from "react-infinite-scroll-component"
import { useSearchParams } from "react-router-dom"
import { SortBy, SortOrder } from "../layout/topbar.layout"

const ProductsComponent = () => {

  const [searchParam, setSearchParam] = useSearchParams()

  const [minPrice, setMinPrice] = useState<number>(searchParam.get("minPrice") ? Number(searchParam.get("minPrice")) : 0)
  const [maxPrice, setMaxPrice] = useState<number>(searchParam.get("maxPrice") ? Number(searchParam.get("maxPrice")) : 10000)
  const [minStock, setMinStock] = useState<number>(searchParam.get("minStock") ? Number(searchParam.get("minStock")) : 0)
  const [search, setSearch] = useState<string>(searchParam.get("search") ?? "")
  const [sortBy, setSortBy] = useState<SortBy>(searchParam.get("sortBy") as SortBy ?? "")
  const [sortOrder, setSortOrder] = useState<SortOrder>(searchParam.get("sortOrder") as SortOrder ?? "")

  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [limit, setLimit] = useState<number>(20)
  const [more, setMore] = useState<boolean>(true)

  function getProducts(){
    setLoading(true)
    axios.get(`https://dummyjson.com/products${search ? `/search?q=${search}&` : `?`}limit=${limit}&select=id,title,price,images,stock&sortBy=${sortBy}&order=${sortOrder}`).then(async(res:any)=>{      
      
      const localProducts:ProductType[] = await res.data.products.filter((product:ProductType)=>{
        return product.price >= minPrice && product.price <= maxPrice && product.stock >= minStock
      })

      setProducts(localProducts)

      if(res.data.limit === res.data.total || localProducts.length === 0){
        setMore(false)
      } 

      setLimit(limit + 20)

    }).catch((err:any)=>{
      console.log(err)
    }).finally(()=>{
      setLoading(false)
    })
  }

  useEffect(()=>{
    getProducts()
  },[searchParam])
  
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={getProducts}
      hasMore={more}
      loader={
        <Box display="flex" justifyContent="center" alignItems="center" w="100%" h="100%" py="50px">
          <LoadingComponent/>
        </Box>
      }
      style={{overflow: "hidden"}}
    >
      <Box display="flex" flexDir="column">
        <Box display="flex" flexDir="row" flexWrap="wrap">
          {products.map((product:ProductType)=>{
            return (
              <ProductComponent key={product.id} product={product}/>
            )
          })}
        </Box>
      </Box>
    </InfiniteScroll>
  )
}

export default ProductsComponent