import { createSlice } from "@reduxjs/toolkit"
import AppType from "../../types/app.type"

const initialState:AppType = {
  isSidebarVisible: false
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible
    },
  },
})

export const { toggleSidebar } = appSlice.actions
export default appSlice.reducer