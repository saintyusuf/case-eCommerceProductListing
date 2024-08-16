import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./chakra/theme"

// PAGES
import HomePage from "./pages/home.page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
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