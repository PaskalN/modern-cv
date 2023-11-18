import { ThemeObject } from "../../theme.interfaces"
import { getColorScheme } from "../../themeTools"

const colorScheme: ThemeObject = {
    base: {
    
    },
    theme: {

    }
}

export default {
    baseStyle: {
        container: {
            padding: "1.5rem",        
            borderRadius: "0.5rem",        
        },

        body: {
        },
    },
    variants: {
        default: (props: { colorScheme?: string }): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                bg: "base.main",
                boxShadow: "12",
                ...scheme
            }
        },
        thumbnail: (props: { colorScheme?: string }): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                container: {
                    gap: "1rem"
                },
                ...scheme
            }
        }
    },
    sizes: {
    
    },

    defaultProps: {
        colorScheme: "base",
        variant: "default",
        size: "md"
    },

    parts: ["container", "body", "header", "footer"]
}
