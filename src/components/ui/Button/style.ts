import styled, { css } from 'styled-components';
import { lightTheme } from '../../../themes/colors';


interface ButtonProps {
    animation: Boolean;
}

export const Container = styled.button<ButtonProps>`
    background-color: ${lightTheme.blueLight};
    color: ${lightTheme.blueDark};

    border-radius: 10px;
    padding: 10px 16px;

    border: 0;
    outline: 0;

    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    ${({ animation }) => animation && css`
        @keyframes AnimateButton {
            0% { transform: scale(1) }
            50% { transform: scale(0.8) }
            100% { transform: scale(1) }
        }
    `}

    &:hover {
        background-color: ${lightTheme.blueDark};
        color: #fff;
    }
`
