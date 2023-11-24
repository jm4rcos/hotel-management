import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../context/theme-context";

export const useTheme = () => {
    const { getThemeColors } = useContext(ThemeContext) as ThemeContextProps;
    const theme = getThemeColors()

    return theme;
}