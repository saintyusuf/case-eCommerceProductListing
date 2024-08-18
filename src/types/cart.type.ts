import ProductType from "./product.type"

type CartType = {
  id: ProductType["id"]
  quantity: number
}

export type CartFullDataType = ProductType & CartType

export default CartType