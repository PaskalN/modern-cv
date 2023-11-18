import { ThemeObject , ThemeVariantProps } from "../../theme.interfaces"
import { getColorScheme } from "../../themeTools"
import TextColorScheme from "../../presets/text.colorScheme"
import TextSizes from "../../presets/text.sizes"

const colorScheme: ThemeObject = {
    ...TextColorScheme
}

export default {
    baseStyle: {
        lineHeight: "1",
        fontFamily: "VisbyCFMediumRegular",
        letterSpacing: "0.0625rem",
        color: "text.main",
    },
    variants: {
        default: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                lineHeight: props["data-p"] ? "1.5rem" : "1",
                ...scheme
            }
        },
        divider: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                backgroundImage: TextColorScheme.interesting.backgroundImage,
                height: "4px",
                ...scheme
            }
        },
        h_heavy: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                fontFamily: "VisbyCFHeavyRegular",
                ...scheme
            }
        },

        h_medium: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                fontFamily: "VisbyCFMediumRegular",
                ...scheme
            }
        },

        h_regular: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                fontFamily: "VisbyCFRegularRegular",
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
