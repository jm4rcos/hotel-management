import styled from "styled-components";

import { ThemeColors } from '../../context/theme-context';

interface ListProps {
    selected: Boolean;
}


interface ThemeProps {
    appTheme: ThemeColors;
}

export const StyledSidebar = styled.nav<ThemeProps>`
    background-color: ${({ appTheme }) => appTheme && appTheme.background};
    min-width: 260px;
    height: 100%;
`;

export const StyledList = styled.li<ListProps>`
    display: flex; 
    align-items: center;
    gap: 16px;
        padding: 10px 20px;
        display: flex;
        background: 'none';

        a {
            color: ${({ selected }) => selected ? '#00B5A6' : '#9CA3B5'};
        }
`;

export const Logo = styled.div<ThemeProps>`
    color: ${({ appTheme }) => appTheme && appTheme.title};
    font-size: 20px;
    font-weight: 600;
    padding: 16px;
`