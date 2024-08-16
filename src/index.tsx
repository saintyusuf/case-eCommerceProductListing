import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./chakra/theme"

// LAYOUT
import Layout from "./layout/index.layout"

// PAGES
import HomePage from "./pages/home.page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={<HomePage/>}/>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
)