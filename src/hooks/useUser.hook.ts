import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import axios from "axios"
import CartType, { CartFullDataType } from "../types/cart.type"

const useUser = () => {

  const userStates = useSelector((state:RootState)=>state.user)
  const dispatch = useDispatch()

  const addToCart = (productId: number) => {
    dispatch({ type: "user/addToCart", payload: { productId } })
  }

  const removeFromCart = (productId: number) => {
    dispatch({ type: "user/removeFromCart", payload: { productId } })
  }

  const increaseQuantity = (productId: number) => {
    dispatch({ type: "user/increaseQuantity", payload: { productId } })
  }

  const decreaseQuantity = (productId: number) => {
    dispatch({ type: "user/decreaseQuantity", payload: { productId } })
  }

  const changeQuantity = (productId: number, quantity: number) => {
    dispatch({ type: "user/changeQuantity", payload: { productId, quantity } })
  }

  const getCartItems = (): CartType[] => {
    return userStates.cart
  }

  const getCartItemsFullData = async (): Promise<CartFullDataType[]> => {
    try {
      const requests = userStates.cart.map((item) =>
        axios.get(`https://dummyjson.com/products/${item.id}`)
      );
      const responses = await axios.all(requests);
      return responses.map((res, i) => ({
        ...res.data,
        quantity: userStates.cart[i].quantity,
        totalPrice: Number(res.data.price.toFixed(2)) * userStates.cart[i].quantity,
      }));
    } catch (error) {
      console.error("Error fetching cart items full data:", error);
      throw error;
    }
  };

  const getCartTotalPrice = async (): Promise<string> => {
    try {
      const cartItems = await getCartItemsFullData();
      return cartItems.reduce((acc, cartItem) => acc + cartItem.totalPrice!, 0).toFixed(2);
    } catch (error) {
      console.error("Error calculating cart total price:", error);
      throw error;
    }
  };

  const isExistInCart = (productId: number): boolean => {
    return userStates.cart.some((cartItem) => cartItem.id === productId)
  }

  const clearCart = () => {
    dispatch({ type: "user/clearCart" })
  }

  return {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    changeQuantity,
    getCartItems,
    getCartItemsFullData,
    getCartTotalPrice,
    isExistInCart,
    clearCart
  }
  
}

export default useUser