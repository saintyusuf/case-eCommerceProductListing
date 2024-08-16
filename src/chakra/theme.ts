import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

import "@fontsource/montserrat/300.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/900.css"

const theme = extendTheme({
  styles: {
    global: (props:any) => ({
      body: {
        color: mode("#000", "#fff")(props),
        bg: mode("#fff", "#000")(props),
        img: {
          display: "inline-block",
          pointerEvents: "none",
          userSelect: "none"
        },
        "*::selection": {
          bg: "#222",
          color: "#fff"
        },
        "--borderColor": mode("#ddd", "#222")(props),
      }
    }),
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  breakpoints: {
    mobile: "0px",
    desktop: "800px"
  }
})

export default theme