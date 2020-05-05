import Typography from "typography"
import greadViewTheme from "typography-theme-grand-view"

const typography = new Typography({
    ...greadViewTheme,
    overrideThemeStyles: () => ({
        a: {
            textShadow: null,
        }
    })
})

export const { scale, rhythm, options } = typography
export default typography