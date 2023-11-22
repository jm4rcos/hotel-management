import styled from 'styled-components';

import { lightTheme } from '../../themes/colors';

export const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;

    tr {
        transition: background-color 0.25s ease-in-out;
    }

    tr {
        &:hover {
            background-color: ${lightTheme.gray100};
        }
    }
`

export const HeaderCell = styled.th`
    padding: 10px;
    color: ${lightTheme.text};
    
    font-weight: 300;
    font-size: 14px;
    text-align: center;
`
export const DataCell = styled.td`
    padding: 10px;
    color: ${lightTheme.title};

    text-align: center;
    font-size: 16px;
    font-weight: 500;
`