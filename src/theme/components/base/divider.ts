import { ThemeObject } from "../../theme.interfaces"
import TextColorScheme from "../../presets/text.colorScheme"
export default {
    baseStyle: {
        borderStyle: "solid",
        borderColor: "neutral.30",
        borderImage: `${TextColorScheme.interesting.backgroundImage} 1 100%`
    },
    variants: {
        default: (_props: { colorScheme?: string }): ThemeObject => {
            return {}
        },

        focus: (_props: { colorScheme?: string }): ThemeObject => {
            return {
                borderImage: TextColorScheme.interesting.backgroundImage
            }
        }
    },
    sizes: {
        thin: {
            borderBottomWidth: "0.0625rem"
        },
        md: {
            borderBottomWidth: "0.125rem"
        },
        lg: {
            borderBottomWidth: "0.25rem"
        }
    },

    defaultProps: {    
        variant: "default",
        size: "thin"
    },

    parts: ["container", "body", "header", "footer"]
}