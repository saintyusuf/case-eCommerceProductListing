import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserType from "../../types/user.type"

const initialState:UserType = {
  cart: []
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{productId:number}>) => {
      state.cart.push({id: action.payload.productId, quantity: 1})
    },
    removeFromCart: (state, action: PayloadAction<{productId:number}>) => {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== action.payload.productId)
    },
    increaseQuantity: (state, action: PayloadAction<{productId:number}>) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.productId){
          cartItem.quantity += 1
        }
        return cartItem
      })
    },
    decreaseQuantity: (state, action: PayloadAction<{productId:number}>) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.productId){
          if(cartItem.quantity > 1){
            cartItem.quantity -= 1
          }
        }
        return cartItem
      })
    },
    changeQuantitiy: (state, action: PayloadAction<{productId:number, quantity:number}>) => {
      state.cart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.productId){
          cartItem.quantity = action.payload.quantity
        }
        return cartItem
      })
    }
  },
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = userSlice.actions
export default userSlice.reducer