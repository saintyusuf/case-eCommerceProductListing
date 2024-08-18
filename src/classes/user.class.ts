import store from "../redux/store"
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

  getCart(){
    return this.user.cart
  }

  getCartTotalPrice(){
    return this.user.cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
  }

  isExistInCart(productId: number){
    return this.user.cart.some((cartItem) => cartItem.id === productId)
  }
  
}