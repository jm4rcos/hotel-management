import styled from 'styled-components';

import { ThemeColors } from '../../context/theme-context';

interface ThemeProps {
    appTheme: ThemeColors;
}

export const Container = styled.div<ThemeProps>`
    height: 100vh;
    width: 100%;
    background-color: ${({ appTheme }) => appTheme && appTheme.background};
`