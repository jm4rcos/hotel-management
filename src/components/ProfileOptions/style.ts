import styled from 'styled-components';

import { ThemeColors } from '../../context/theme-context';

interface ThemeProps {
    appTheme: ThemeColors;
}

export const Container = styled.div<ThemeProps>`
    position: absolute;
    background-color: ${({ appTheme }) => appTheme && appTheme.gray200};
    top: calc(100% + 10px);
    right: 0;
    border-radius: 10px 0 10px 10px;

    .profile-options-content {
        cursor: pointer;
        display: flex;
        gap: 1rem;
        padding: 1rem;

        color: ${({ appTheme }) => appTheme && appTheme.title};

        p {
            font-weight: 300;
        }
    }
`