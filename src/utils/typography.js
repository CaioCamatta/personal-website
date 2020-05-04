import Typography from "typography"
import oceanBeachTheme from "typography-theme-ocean-beach"

const typography = new Typography({
    ...oceanBeachTheme,
    overrideThemeStyles: () => ({
        a: {
            textShadow: null,
        }
    })
})

export const { scale, rhythm, options } = typography
export default typography