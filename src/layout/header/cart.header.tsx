import CartComponent from '../../components/cart.component'
import useApp from '../../hooks/useApp.hook'

const CartHeader = () => {

  const {getCartVisibility} = useApp()
  
  return (
    <CartComponent
      pos={{mobile: "fixed", desktop: "absolute"}} 
      display={{mobile: getCartVisibility() ? "block" : "none", desktop: getCartVisibility() ? "block" : "none"}}
      right={{mobile: "0", desktop: "0"}}
      top={{mobile: "0", desktop: "50px"}}
      border={{mobile: "initial", desktop: "1px solid var(--borderColor)"}}
      borderRadius={{mobile: 0, desktop: "10px"}}
      w={{mobile: "100%", desktop: "400px"}}
      h={{mobile: "100%", desktop: "400px"}}
      zIndex={100}
    />
  )
}

export default CartHeader