import styled from "styled-components";

import { ThemeColors } from "./context/theme-context";

interface AppContentProps {
    appTheme: ThemeColors;
}

export const AppContent = styled.div<AppContentProps>`
    width: 100%;
    height: 100vh;
    padding: 16px;

    background-color: ${({ appTheme }) => appTheme && appTheme.background};
    display: flex;
    flex-direction: column;
`

export const AppContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`