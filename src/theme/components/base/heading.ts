import { ThemeObject } from "../../theme.interfaces"
import { getColorScheme } from "../../themeTools"
import TextColorScheme from "../../presets/text.colorScheme"
import TextSizes from "../../presets/text.sizes"

const colorScheme: ThemeObject = {
    ...TextColorScheme
}

export default {
    baseStyle: {
        fontSize: "1rem",
        fontFamily: "VisbyCFMediumRegular",
        color: "text.main",
        lineHeight: "1"
    },
    variants: {
        default: (props: { colorScheme?: string }): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme
            }
        },

        h_heavy: (props: { colorScheme?: string }): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                fontFamily: "VisbyCFHeavyRegular",
                letterSpacing: "0.0625rem",
                ...scheme
            }
        },

        h_medium: (props: { colorScheme?: string }): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                fontFamily: "VisbyCFMediumRegular",
                letterSpacing: "0.0625rem",
                ...scheme
            }
        },

        h_regular: (props: { colorScheme?: string }): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                fontFamily: "VisbyCFRegularRegular",
                letterSpacing: "0.0625rem",
                ...scheme
            }
        },
    },
    sizes: {
        ...TextSizes
    },

    defaultProps: {
        variant: "default",
        size: "md"
    }
}
