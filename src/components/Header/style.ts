import styled from "styled-components";

import { lightTheme } from "../../themes/colors";

export const Container = styled.header`
    background: ${lightTheme.background};
    width: 100%;
    padding: 10px;

    display: flex;

    align-items: center;

    justify-content: space-between;
`;

export const ProfileContainer = styled.p`
    display: flex;
    gap: 16px;
    align-items: center;
`