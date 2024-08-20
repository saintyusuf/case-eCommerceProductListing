import { createSlice } from "@reduxjs/toolkit"
import AppType from "../../types/app.type"

const initialState:AppType = {
  isSidebarVisible: false,
  isSearchbarVisible: false,
  isCartVisible: false
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible
    },
    toggleSearchbar: (state) => {
      state.isSearchbarVisible = !state.isSearchbarVisible
    },
    toggleCart: (state) => {
      state.isCartVisible = !state.isCartVisible
    },
    closeCart: (state) => {
      state.isCartVisible = false
    }
  },
})

export default appSlice.reducer