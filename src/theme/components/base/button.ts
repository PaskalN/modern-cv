import { ThemeObject } from "../../theme.interfaces"
import { getColorScheme } from "../../themeTools"
import TextColorScheme from "../../presets/text.colorScheme"
import effectColors from "../../foundations/effectColors"

const colorScheme: ThemeObject = {
    base: {
        bg: "button.sfcc",
        color: "base.secondary",

        _hover: {
            bg: "button.sfcc_hover",
        },

        _active: {
            bg: "button.sfcc_click",
        }
    },
    gradient: {
        _before: {
            content: "\"\"",
            backgroundImage: TextColorScheme.interesting.backgroundImage,
            inset: "0px",
            position: "absolute",
            h: "100%",
            w: "100%",
            borderRadius: "8px"
        },

        _after: {
            content: "\"\"",
            background: "base.main",
            inset: "2px",
            position: "absolute",
            borderRadius: "8px"
        },

        _hover: {
            boxShadow: `0px 0px 15px -2px ${effectColors.gradient_2}`,
            _before: {        
                backgroundImage: TextColorScheme.interesting.backgroundImageHover
            }
        },

        _active: {
            boxShadow: `0px 0px 15px -2px ${effectColors.gradient_2}`,
            _before: {        
                backgroundImage: TextColorScheme.interesting.backgroundImageActive
            }
        },

        "&>*": {
            zIndex: "1"
        }
    }
}

export default {
    baseStyle: {
        px: "1rem",
        py: "0.875rem",
        borderRadius: "0.25rem",
        transition: "0.2s"
    },
    variants: {
        default: (props: { colorScheme?: string }): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme
            }
        }   
    },
    sizes: {},

    defaultProps: {
        colorScheme: "base",
        variant: "default",
        size: "md"
    }
}
