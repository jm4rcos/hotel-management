import styled from "styled-components";

import { ThemeColors } from "../../context/theme-context";

interface ModalProps {
    appTheme: ThemeColors;
}

export const ModalContainer = styled.div<ModalProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: rgba(49, 51, 56, 0.50);

    height: 100vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    backdrop-filter: blur(2px);

    .modal-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 1rem;
        padding: 1rem;
        border-radius: 10px;
        background-color: ${({ appTheme }) => appTheme && appTheme.background};
    }

    .modal-header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .modal-title{
            color: ${({ appTheme }) => appTheme && appTheme.title};
        }

        .close-icon {
            cursor: pointer;
        }
    }
`