import styled from 'styled-components';

import { lightTheme } from '../../themes/colors';

export const SearchContainer = styled.div`
    background-color: ${lightTheme.gray200};
    max-width: 250px;
    padding: 2px 16px;
    width: 250px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    input {
        background: none;
        border: 0;
        height: 100%;
        width: 100%;
        color: ${lightTheme.title};
        padding: 6px 0;
        font-size: 16px;

        outline: 0;

        &::placeholder {
            font-size: 14px;
            color: ${lightTheme.text};
        }
    }
`