import { useContext } from "react";
import { ThemeContextProps, ThemeContext } from "../../context/theme-context";

import { Container } from "./style";

const Dashboard = () => {
    const { getThemeColors } = useContext(ThemeContext) as ThemeContextProps;
    const theme = getThemeColors()

    return <Container appTheme={theme}>Dashboard</Container>
}

export default Dashboard;