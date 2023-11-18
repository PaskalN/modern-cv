import { extendBaseTheme } from "@chakra-ui/react"

import Heading from "./components/base/heading"
import Card from "./components/base/card"
import Button from "./components/base/button"
import Divider from "./components/base/divider"
import Text from "./components/base/text"
import App from "./components/project/app"
import breakpoints from "./foundations/breakpoints"
import colors from "./foundations/colors"
import colorsDark from "./foundations/colors-dark"
import fonts from "./foundations/fonts"
import layerStyles from "./foundations/layerStyles"
import shadows from "./foundations/shadows"
import sizes from "./foundations/sizes"
import Embla from "./components/project/embla"

const themeExt = {
    /**
   * Faoundations
   */
    colors,

    sizes,

    fonts,

    breakpoints,

    shadows,

    layerStyles,

    /**
   * Components
   */
    components: {
    // Base Components
        Heading,

        Text,

        Card,

        Divider,

        Button,

        // Project Components
        App,

        Embla
    }
}

export const themeDefault = extendBaseTheme({...themeExt})
export const themeDark = extendBaseTheme({...themeExt, colors: colorsDark})

// console.log(themeDefault)
