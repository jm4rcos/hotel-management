import styled from 'styled-components';

import { ThemeProps } from '../../context/theme-context';

export const TableContainer = styled.table<ThemeProps>`
    width: 100%;
    border-collapse: collapse;
    
    tr {
        transition: background-color 0.25s ease-in-out;

        &:hover {
            background-color: ${({ appTheme }) => appTheme && appTheme.gray100};
        }
    }
`

export const HeaderCell = styled.tr<ThemeProps>`
   th {
    padding: 10px;
    color: ${({ appTheme }) => appTheme && appTheme.text};
    
    font-weight: 300;
    font-size: 14px;
    text-align: center;
   }
`
export const DataCell = styled.tr<ThemeProps>`
    td {
        padding: 10px;
        color: ${({ appTheme }) => appTheme && appTheme.title};

        text-align: center;
        font-size: 16px;
        font-weight: 500;
    }
    
`