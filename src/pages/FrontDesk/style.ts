import styled from 'styled-components';

import { ThemeColors } from '../../context/theme-context';

interface ThemeProps {
    appTheme: ThemeColors;
}

export const Container = styled.div<ThemeProps>`
    height: 100vh;
    width: 100%;
    background-color: ${({ appTheme }) => appTheme && appTheme.background};

    .button-container{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        padding: 16px 16px 0 0;
        margin-bottom: -16px;
    }
`