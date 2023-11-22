import styled from "styled-components";
import { lightTheme } from "../../themes/colors";

interface ListProps {
    selected: Boolean;
}

export const StyledSidebar = styled.nav`
    background: ${lightTheme.background};
    min-width: 260px;
    height: 100%;
`;

export const StyledList = styled.li<ListProps>`
    display: flex; 
    align-items: center;
    gap: 16px;
        padding: 10px 20px;
        display: flex;
        background: ${({ selected }) => selected ? '#DFF8F8' : 'none'};

        a {
            color: ${({ selected }) => selected ? '#00B5A6' : '#9CA3B5'};
        }
`;

export const Logo = styled.div`
    color: ${lightTheme.title};
    font-size: 20px;
    font-weight: 600;
    padding: 16px;
`