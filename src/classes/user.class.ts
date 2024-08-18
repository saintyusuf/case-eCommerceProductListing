import axios from "axios"
import store from "../redux/store"
import CartType, { CartFullDataType } from "../types/cart.type"
import UserType from "../types/user.type"

export default class User {

  private user: UserType

  constructor(){
    this.user = store.getState().user
  }

  addToCart(productId: number){
    store.dispatch({type: "user/addToCart", payload: {productId}})
  }

  removeFromCart(productId: number){
    store.dispatch({type: "user/removeFromCart", payload: {productId}})
  }

  increaseQuantity(productId: number){
    store.dispatch({type: "user/increaseQuantity", payload: {productId}})
  }

  decreaseQuantity(productId: number){
    store.dispatch({type: "user/decreaseQuantity", payload: {productId}})
  }

  changeQuantity(productId: number, quantity: number){
    store.dispatch({type: "user/changeQuantity", payload: {productId, quantity}})
  }

  getCartItems():CartType[]{
    return this.user.cart
  }

  public getCartItemsFullData = async ():Promise<CartFullDataType[]> => new Promise((resolve, reject) => {
    const localCartItems:CartFullDataType[] = []
    
    const requests = this.user.cart.map(async (item) => axios.get(`https://fakestoreapi.com/products/${item.id}`))
    axios.all(requests).then(axios.spread((...responses) => {
      responses.forEach((res, i) => {
        localCartItems.push({...res.data, quantity: this.user.cart[i].quantity, totalPrice: res.data.price * this.user.cart[i].quantity})
      })
      resolve(localCartItems)
    }))
    
  })

  getCartTotalPrice(){
    return this.getCartItemsFullData().then((cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.totalPrice!, 0).toFixed(2))
  }

  isExistInCart(productId: number){
    return this.user.cart.some((cartItem) => cartItem.id === productId)
  }
  
}