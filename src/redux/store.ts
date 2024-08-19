import { configureStore } from "@reduxjs/toolkit"
import user from "./slices/user.slice"
import app from "./slices/app.slice"

const store = configureStore({
  reducer: {
    user,
    app
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store