import { useContext } from "react";
import { ThemeContextProps, ThemeContext } from "../../../context/theme-context";
import { StyledText } from "./style";

interface TextProps {
    content: string | undefined;
    type: 'text' | "title";
    size?: number;
}

export default function Text({ content, type = 'text', size }: TextProps) {
    const { getThemeColors } = useContext(ThemeContext) as ThemeContextProps;
    const theme = getThemeColors()

    return <StyledText appTheme={theme} size={size} type={type}>{content}</StyledText>
}