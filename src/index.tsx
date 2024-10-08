import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./chakra/theme"
import { Provider as ReduxProvider } from "react-redux"
import store from "./redux/store"

// LAYOUT
import Layout from "./layout/index.layout"

// PAGES
import HomePage from "./pages/home.page"
import ProductDetailsPage from "./pages/productDetails.page"
import CartPage from "./pages/cart.page"
import CheckoutPage from "./pages/checkout.page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout isSidebarVisible isTopbarVisible children={<HomePage/>}/>
  },
  {
    path: "/product/:id",
    element: <Layout children={<ProductDetailsPage/>}/>
  },
  {
    path: "/cart",
    element: <Layout children={<CartPage/>}/>
  },
  {
    path: "/checkout",
    element: <Layout children={<CheckoutPage/>}/>
  },
  {
    path: "*",
    element: <Navigate to="/"/>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ReduxProvider store={store}>
        <HelmetProvider>
          <RouterProvider router={router}/>
        </HelmetProvider>
      </ReduxProvider>
    </ChakraProvider>
  </React.StrictMode>
)